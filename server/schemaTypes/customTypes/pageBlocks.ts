import { defineField, defineType, defineArrayMember } from 'sanity'

/**
 * Hero Block - For page headers with title, subtitle, and optional background image
 */
export const heroBlock = defineType({
  name: 'heroBlock',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'center',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'backgroundImage',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Hero Section',
        subtitle: 'Hero Block',
        media,
      }
    },
  },
})

/**
 * Text Block - Rich text content section
 */
export const textBlock = defineType({
  name: 'textBlock',
  title: 'Text Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Text Section',
        subtitle: 'Text Block',
      }
    },
  },
})

/**
 * Image Block - Single image with optional caption
 */
export const imageBlock = defineType({
  name: 'imageBlock',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for accessibility',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
          { title: 'Full Width', value: 'full' },
        ],
      },
      initialValue: 'medium',
    }),
  ],
  preview: {
    select: {
      media: 'image',
      caption: 'caption',
    },
    prepare({ media, caption }) {
      return {
        title: caption || 'Image',
        subtitle: 'Image Block',
        media,
      }
    },
  },
})

/**
 * Image Gallery Block - Multiple images in a grid
 */
export const imageGalleryBlock = defineType({
  name: 'imageGalleryBlock',
  title: 'Image Gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: {
        list: [2, 3, 4],
      },
      initialValue: 3,
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      images: 'images',
    },
    prepare({ title, images }) {
      return {
        title: title || 'Image Gallery',
        subtitle: `Gallery - ${images?.length || 0} images`,
      }
    },
  },
})

/**
 * Call to Action Block - Button or link with text
 */
export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Outline', value: 'outline' },
        ],
      },
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      buttonText: 'buttonText',
    },
    prepare({ title, buttonText }) {
      return {
        title: title || buttonText || 'Call to Action',
        subtitle: 'CTA Block',
      }
    },
  },
})

/**
 * Video Block - Embedded video (YouTube, Vimeo, or direct)
 */
export const videoBlock = defineType({
  name: 'videoBlock',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube, Vimeo, or direct video link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Video',
        subtitle: 'Video Block',
      }
    },
  },
})

/**
 * Accordion Block - Collapsible FAQ-style content
 */
export const accordionBlock = defineType({
  name: 'accordionBlock',
  title: 'Accordion / FAQ',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question / Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer / Content',
              type: 'blockContent',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'question',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      items: 'items',
    },
    prepare({ title, items }) {
      return {
        title: title || 'Accordion',
        subtitle: `FAQ - ${items?.length || 0} items`,
      }
    },
  },
})

/**
 * Card Grid Block - Grid of cards with icon, title, and description
 */
export const cardGridBlock = defineType({
  name: 'cardGridBlock',
  title: 'Card Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'pageRef',
              title: 'Intern sidelenke',
              type: 'reference',
              to: [{ type: 'page' }],
              description: 'Velg en intern side – overstyrer manuell URL',
            }),
            defineField({
              name: 'link',
              title: 'Ekstern / manuell URL (fallback)',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  allowRelative: true,
                  scheme: ['http', 'https'],
                }),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'icon',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: {
        list: [2, 3, 4],
      },
      initialValue: 3,
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      cards: 'cards',
    },
    prepare({ title, cards }) {
      return {
        title: title || 'Card Grid',
        subtitle: `Cards - ${cards?.length || 0} items`,
      }
    },
  },
})

/**
 * Divider Block - Visual separator
 */
export const dividerBlock = defineType({
  name: 'dividerBlock',
  title: 'Divider',
  type: 'object',
  fields: [
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          { title: 'Line', value: 'line' },
          { title: 'Dots', value: 'dots' },
          { title: 'Space', value: 'space' },
        ],
      },
      initialValue: 'line',
    }),
  ],
  preview: {
    select: {
      style: 'style',
    },
    prepare({ style }) {
      return {
        title: 'Divider',
        subtitle: style || 'line',
      }
    },
  },
})

/**
 * Version List Block – Grid of machine/variant cards (like SelectedTechnology)
 * Each card: image (teal header), title, description, "Velg"-button
 */
export const versionListBlock = defineType({
  name: 'versionListBlock',
  title: 'Version List',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'pageRef',
              title: 'Intern sidelenke',
              type: 'reference',
              to: [{ type: 'page' }],
              description: 'Velg en intern side – overstyrer manuell URL',
            }),
            defineField({
              name: 'link',
              title: 'Ekstern / manuell URL (fallback)',
              type: 'string',
              description: 'Brukes kun om ingen intern sidelenke er valgt',
            }),
          ],
          preview: {
            select: { title: 'title', media: 'image' },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: 'heading', items: 'items' },
    prepare({ title, items }) {
      return {
        title: title || 'Version List',
        subtitle: `${items?.length || 0} items`,
      }
    },
  },
})

/**
 * Guide Block – Left sidebar step nav + right content panel (like GuidePage)
 * Steps with title, rich text content, optional safety info box, optional course link
 */
export const guideBlock = defineType({
  name: 'guideBlock',
  title: 'Guide (Step-by-step)',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon / Machine image',
      type: 'image',
      description: 'Shown in the sidebar above the step navigation',
      options: { hotspot: true },
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Step title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'blockContent',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'infoBox',
              title: 'Info / Safety box (optional)',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Box title',
                  type: 'string',
                }),
                defineField({
                  name: 'items',
                  title: 'Bullet points',
                  type: 'array',
                  of: [defineArrayMember({ type: 'string' })],
                }),
              ],
            }),
            defineField({
              name: 'courseLink',
              title: 'Course link (optional)',
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Label', type: 'string' }),
                defineField({
                  name: 'courseRef',
                  title: 'Kursreferanse (intern)',
                  type: 'reference',
                  to: [{ type: 'course' }],
                  description: 'Velg et kurs – overstyrer manuell URL',
                }),
                defineField({ name: 'href', title: 'Manuell URL (fallback)', type: 'string' }),
              ],
            }),
          ],
          preview: {
            select: { title: 'title' },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { steps: 'steps' },
    prepare({ steps }) {
      return {
        title: 'Guide',
        subtitle: `${steps?.length || 0} steps`,
      }
    },
  },
})

/**
 * Material Card Block – Grid of material/filament cards with specs (like FilamentPage)
 */
export const materialCardBlock = defineType({
  name: 'materialCardBlock',
  title: 'Material Cards',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      title: 'Intro text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'materials',
      title: 'Materials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name (e.g. PLA)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'specs',
              title: 'Specs (e.g. Nozzle: 200-220°C)',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({ name: 'label', title: 'Label', type: 'string' }),
                    defineField({ name: 'value', title: 'Value', type: 'string' }),
                  ],
                  preview: { select: { title: 'label', subtitle: 'value' } },
                }),
              ],
            }),
            defineField({
              name: 'fordeler',
              title: 'Fordeler (advantages)',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
            }),
            defineField({
              name: 'ulemper',
              title: 'Ulemper (disadvantages)',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
            }),
            defineField({
              name: 'anbefalingBruk',
              title: 'Anbefalt bruk (recommended use)',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
            }),
          ],
          preview: {
            select: { title: 'name', media: 'image' },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: 'heading', materials: 'materials' },
    prepare({ title, materials }) {
      return {
        title: title || 'Material Cards',
        subtitle: `${materials?.length || 0} materials`,
      }
    },
  },
})

/**
 * Staff Grid Block – List of staff members with photo, name, role, contact (like Staff.jsx)
 */
export const staffGridBlock = defineType({
  name: 'staffGridBlock',
  title: 'Staff List',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Ansatte',
    }),
    defineField({
      name: 'intro',
      title: 'Intro text',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'staff',
      title: 'Staff members',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'role',
              title: 'Role / Title',
              type: 'string',
            }),
            defineField({
              name: 'photo',
              title: 'Photo',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'contact',
              title: 'Contact (email or phone)',
              type: 'string',
            }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'role', media: 'photo' },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'heading', staff: 'staff' },
    prepare({ title, staff }) {
      return {
        title: title || 'Staff',
        subtitle: `${staff?.length || 0} members`,
      }
    },
  },
})

// Export all block types as an array for easy importing
export const pageBlocks = [
  heroBlock,
  textBlock,
  imageBlock,
  imageGalleryBlock,
  ctaBlock,
  videoBlock,
  accordionBlock,
  cardGridBlock,
  dividerBlock,
  versionListBlock,
  guideBlock,
  materialCardBlock,
  staffGridBlock,
]