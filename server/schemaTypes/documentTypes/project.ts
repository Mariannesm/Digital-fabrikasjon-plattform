import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'editPassword',
      title: 'Edit Password',
      type: 'string',
      description: 'Password for editing this project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'reference',
      to: [{ type: 'organization' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Pending Approval', value: 'pending' },
          { title: 'Approved', value: 'approved' },
          { title: 'Rejected', value: 'rejected' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
    }),
    defineField({
      name: 'attachments',
      title: 'Attachments',
      type: 'array',
      of: [
        {
          type: 'file',
          fields: [
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      organization: 'organization.name',
      status: 'status',
    },
    prepare({ title, organization, status }) {
      return {
        title,
        subtitle: `${organization || 'No org'} - ${status || 'draft'}`,
      }
    },
  },
})