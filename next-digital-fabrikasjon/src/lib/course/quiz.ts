'use server'

import { createClient as createSanityWriteClient } from '@sanity/client'
import { dataset, projectId, apiVersion } from '@/lib/sanity/env'
import { getCourseBySlug } from '@/lib/sanity/queries/course'
import { sendCourseCompletionEmail } from '@/lib/email/sendCourseCompletion'

function getWriteClient() {
  const token = process.env.SANITY_API_TOKEN
  if (!token) throw new Error('SANITY_API_TOKEN mangler i .env.local')
  return createSanityWriteClient({ projectId, dataset, apiVersion, useCdn: false, token })
}

export interface QuizResult {
  passed: boolean
  score: number
  total: number
  percentage: number
}

/**
 * Submit quiz answers for a course.
 * - answers: array of selected option indices (one per question)
 * - email: provided by user on the result screen (required to save completion)
 */
export async function submitQuiz(
  orgSlug: string,
  courseSlug: string,
  answers: number[],
  email: string
): Promise<QuizResult> {
  const course = await getCourseBySlug(orgSlug, courseSlug)
  if (!course) throw new Error('Course not found')

  const questions = course.quizQuestions ?? []
  const total = questions.length

  if (total === 0) {
    return { passed: true, score: 0, total: 0, percentage: 100 }
  }

  // Count correct answers
  let score = 0
  for (let i = 0; i < total; i++) {
    if (answers[i] === questions[i].correctOptionIndex) {
      score++
    }
  }

  const percentage = Math.round((score / total) * 100)
  const passed = percentage >= (course.passingScore ?? 70)

  if (passed && email) {
    // Save completion as Sanity document
    const writeClient = getWriteClient()
    await writeClient.create({
      _type: 'quizCompletion',
      course: { _type: 'reference', _ref: course._id },
      courseSlug,
      email,
      score,
      total,
      passed,
      organizationSlug: orgSlug,
      completedAt: new Date().toISOString(),
    })

    // Send confirmation email (fire-and-forget)
    sendCourseCompletionEmail({
      email,
      courseTitle: course.title,
      score,
      total,
      orgSlug,
    }).catch((err) => console.error('Email send failed:', err))
  }

  return { passed, score, total, percentage }
}
