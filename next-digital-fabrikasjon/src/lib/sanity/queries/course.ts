import { client } from '@/lib/sanity/client'

export interface CourseListItem {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  order: number
}

export interface QuizQuestion {
  _key: string
  question: string
  options: string[]
  correctOptionIndex: number
  explanation?: string
}

export interface CourseDetail {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[]
  quizQuestions: QuizQuestion[]
  passingScore: number
}

export async function getCoursesByOrganization(orgSlug: string): Promise<CourseListItem[]> {
  return client.fetch(
    `*[_type == "course"
      && organization->slug.current == $orgSlug
      && active == true
    ] | order(order asc) {
      _id,
      title,
      slug,
      description,
      order
    }`,
    { orgSlug }
  )
}

export async function getCourseBySlug(
  orgSlug: string,
  slug: string
): Promise<CourseDetail | null> {
  return client.fetch(
    `*[_type == "course"
      && organization->slug.current == $orgSlug
      && slug.current == $slug
      && active == true
    ][0] {
      _id,
      title,
      slug,
      description,
      content,
      quizQuestions[] {
        _key,
        question,
        options,
        correctOptionIndex,
        explanation
      },
      passingScore
    }`,
    { orgSlug, slug }
  )
}
