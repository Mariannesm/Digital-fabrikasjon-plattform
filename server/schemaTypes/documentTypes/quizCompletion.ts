import { defineField, defineType } from 'sanity'

export const quizCompletion = defineType({
  name: 'quizCompletion',
  title: 'Quiz Completion',
  type: 'document',
  // Read-only in Studio – written programmatically
  fields: [
    defineField({
      name: 'course',
      title: 'Course',
      type: 'reference',
      to: [{ type: 'course' }],
    }),
    defineField({
      name: 'courseSlug',
      title: 'Course slug',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'E-post',
      type: 'string',
    }),
    defineField({
      name: 'score',
      title: 'Riktige svar',
      type: 'number',
    }),
    defineField({
      name: 'total',
      title: 'Totalt antall spørsmål',
      type: 'number',
    }),
    defineField({
      name: 'passed',
      title: 'Bestått',
      type: 'boolean',
    }),
    defineField({
      name: 'organizationSlug',
      title: 'Organisasjon',
      type: 'string',
    }),
    defineField({
      name: 'completedAt',
      title: 'Fullført',
      type: 'datetime',
    }),
  ],
  orderings: [
    {
      title: 'Nyeste først',
      name: 'completedAtDesc',
      by: [{ field: 'completedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      email: 'email',
      courseSlug: 'courseSlug',
      passed: 'passed',
      completedAt: 'completedAt',
    },
    prepare({ email, courseSlug, passed, completedAt }) {
      return {
        title: `${email} – ${courseSlug}`,
        subtitle: `${passed ? 'Bestått' : 'Ikke bestått'} · ${completedAt ? new Date(completedAt).toLocaleDateString('nb-NO') : ''}`,
      }
    },
  },
})
