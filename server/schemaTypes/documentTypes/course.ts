import { defineField, defineType, defineArrayMember } from 'sanity'

export const course = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'quiz', title: 'Quiz' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 200 },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Short description',
      type: 'text',
      rows: 2,
      description: 'Shown on the course listing page',
      group: 'content',
    }),
    defineField({
      name: 'content',
      title: 'Course content',
      type: 'blockContent',
      description: 'Main course text shown before the quiz',
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
      description: 'Optional: group this course under a category',
      group: 'settings',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Only active courses are visible on the site',
      initialValue: false,
      group: 'settings',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order on the course listing page',
      initialValue: 0,
      group: 'settings',
    }),
    defineField({
      name: 'quizQuestions',
      title: 'Quiz questions',
      type: 'array',
      group: 'quiz',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'quizQuestion',
          title: 'Question',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'options',
              title: 'Answer options',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Minimum 2, maximum 6 options',
              validation: (Rule) => Rule.min(2).max(6).required(),
            }),
            defineField({
              name: 'correctOptionIndex',
              title: 'Correct answer (index)',
              type: 'number',
              description: '0 = first option, 1 = second option, etc.',
              validation: (Rule) => Rule.required().min(0),
            }),
            defineField({
              name: 'explanation',
              title: 'Explanation (shown after answering)',
              type: 'text',
              rows: 2,
            }),
          ],
          preview: {
            select: { title: 'question' },
          },
        }),
      ],
    }),
    defineField({
      name: 'passingScore',
      title: 'Passing score (%)',
      type: 'number',
      description: 'Minimum percentage of correct answers to pass (e.g. 70 = 70%)',
      initialValue: 70,
      validation: (Rule) => Rule.min(1).max(100),
      group: 'quiz',
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      active: 'active',
      organization: 'organization.name',
    },
    prepare({ title, active, organization }) {
      return {
        title,
        subtitle: `${organization || 'No org'} – ${active ? 'Active' : 'Draft'}`,
      }
    },
  },
})
