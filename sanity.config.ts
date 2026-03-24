import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemaTypes';

const projectId = import.meta.env?.PUBLIC_SANITY_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID || '';
const dataset = import.meta.env?.PUBLIC_SANITY_DATASET || process.env.PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'studio-premium',
  title: 'Studio Premium',

  projectId,
  dataset,

  basePath: '/studio',

  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: '2024-01-01' }),
  ],

  schema: {
    types: schemaTypes,
  },
});
