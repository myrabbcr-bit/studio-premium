import { createClient } from '@sanity/client';

const projectId  = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset    = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2024-01-01';

/** Un projectId valide Sanity contient uniquement a-z, 0-9 et des tirets */
const VALID_PROJECT_ID = /^[a-z0-9-]+$/;

const isConfigured =
  typeof projectId === 'string' &&
  VALID_PROJECT_ID.test(projectId) &&
  projectId.length >= 4;

/**
 * Client Sanity — useCdn: false pour garantir des données fraîches au build.
 * Null si le projet n'est pas encore configuré.
 */
export const sanityClient = isConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: false, perspective: 'published' })
  : null;

/**
 * Fetch typé depuis Sanity.
 * Retourne null proprement si le projet n'est pas configuré.
 */
export async function sanityFetch<T = unknown>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<T | null> {
  if (!sanityClient) {
    if (import.meta.env.DEV) {
      console.info('[Sanity] Non configuré — données de fallback utilisées.');
    }
    return null;
  }
  return sanityClient.fetch<T>(query, params);
}
