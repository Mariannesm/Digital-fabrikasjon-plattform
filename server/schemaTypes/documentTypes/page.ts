import { defineField, defineType, defineArrayMember } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'settings',
      title: 'Settings',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Page Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Short description for SEO and previews',
      group: 'content',
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'reference',
      to: [{ type: 'organization' }],
      validation: (Rule) => Rule.required(),
      group: 'settings',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      description: 'Which category this page belongs to',
      group: 'settings',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Whether this page is visible on the site',
      initialValue: false,
      group: 'settings',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order within the category (lower numbers appear first)',
      initialValue: 0,
      group: 'settings',
    }),
    defineField({
      name: 'blocks',
      title: 'Page Content',
      type: 'array',
      description: 'Build your page by adding and arranging content blocks',
      group: 'content',
      of: [
        defineArrayMember({ type: 'heroBlock' }),
        defineArrayMember({ type: 'textBlock' }),
        defineArrayMember({ type: 'imageBlock' }),
        defineArrayMember({ type: 'imageGalleryBlock' }),
        defineArrayMember({ type: 'ctaBlock' }),
        defineArrayMember({ type: 'videoBlock' }),
        defineArrayMember({ type: 'accordionBlock' }),
        defineArrayMember({ type: 'cardGridBlock' }),
        defineArrayMember({ type: 'dividerBlock' }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Name',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      active: 'active',
      category: 'category.name',
      organization: 'organization.name',
    },
    prepare({ title, active, category, organization }) {
      const status = active ? 'Active' : 'Draft'
      const categoryText = category ? ` | ${category}` : ''
      return {
        title,
        subtitle: `${organization || 'No org'} - ${status}${categoryText}`,
      }
    },
  },
})
