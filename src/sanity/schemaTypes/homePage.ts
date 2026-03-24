import { defineType, defineField, defineArrayMember } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',

  fields: [
    // ── SEO ────────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Titre de la page pour les moteurs de recherche (50-60 caractères)',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      description: 'Description pour les moteurs de recherche (150-160 caractères)',
      validation: (Rule) => Rule.max(160),
    }),

    // ── Hero ───────────────────────────────────────────────
    defineField({
      name: 'heroBadge',
      title: 'Hero — Badge',
      type: 'string',
      description: 'Petit label au-dessus du titre hero',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero — Titre',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero — Sous-titre',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroButtons',
      title: 'Hero — Boutons',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'href', type: 'string', title: 'URL' }),
            defineField({
              name: 'variant',
              type: 'string',
              title: 'Variante',
              options: {
                list: [
                  { title: 'Primaire', value: 'primary' },
                  { title: 'Secondaire', value: 'secondary' },
                ],
              },
              initialValue: 'primary',
            }),
          ],
        }),
      ],
    }),

    // ── Stats ──────────────────────────────────────────────
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'value', type: 'string', title: 'Valeur (ex: 150+)' }),
            defineField({ name: 'label', type: 'string', title: 'Label (ex: Projets livrés)' }),
          ],
        }),
      ],
    }),

    // ── Services ───────────────────────────────────────────
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'number', type: 'string', title: 'Numéro (ex: 01)' }),
            defineField({ name: 'title', type: 'string', title: 'Titre' }),
            defineField({ name: 'description', type: 'text', title: 'Description', rows: 2 }),
            defineField({
              name: 'tags',
              type: 'array',
              title: 'Tags',
              of: [defineArrayMember({ type: 'string' })],
            }),
          ],
        }),
      ],
    }),

    // ── Projects ───────────────────────────────────────────
    defineField({
      name: 'projects',
      title: 'Projets',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Titre' }),
            defineField({ name: 'category', type: 'string', title: 'Catégorie' }),
            defineField({ name: 'year', type: 'string', title: 'Année' }),
            defineField({ name: 'description', type: 'text', title: 'Description courte', rows: 2 }),
            defineField({ name: 'href', type: 'string', title: 'URL du projet' }),
          ],
        }),
      ],
    }),

    // ── CTA ────────────────────────────────────────────────
    defineField({
      name: 'ctaTitle',
      title: 'CTA — Titre',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA — Sous-titre',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ctaButtonLabel',
      title: 'CTA — Label du bouton',
      type: 'string',
    }),
    defineField({
      name: 'ctaButtonHref',
      title: 'CTA — URL du bouton',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'seoTitle',
      subtitle: 'heroTitle',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Homepage',
        subtitle: subtitle || 'Aucun titre hero défini',
      };
    },
  },
});
