import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import MainWrapper from '@/components/templates/MainWrapper'
import { getCourseBySlug, getCoursesByOrganization } from '@/lib/sanity/queries/course'
import { getTranslations } from '@/lib/i18n'
import { QuizForm } from './QuizForm'

type Props = {
  params: Promise<{ organization_slug: string; slug: string }>
}

export default async function QuizPage({ params }: Props) {
  const { organization_slug, slug } = await params
  const { t } = await getTranslations()

  const [course, allCourses] = await Promise.all([
    getCourseBySlug(organization_slug, slug),
    getCoursesByOrganization(organization_slug),
  ])

  if (!course) notFound()

  if (!course.quizQuestions?.length) {
    return (
      <MainWrapper classNames="bg-[#FFFCF8]">
        <Header title={course.title.toUpperCase()} />
        <div className="mx-auto w-full max-w-3xl px-8 py-16 text-center">
          <p className="text-lg text-gray-500">{t('course.noQuiz')}</p>
          <Link
            href={`/${organization_slug}/courses/${slug}`}
            className="mt-6 inline-block rounded-2xl bg-[#214C50] px-8 py-3 text-white font-bold hover:bg-[#488B90] transition"
          >
            {t('course.backToCourse')}
          </Link>
        </div>
      </MainWrapper>
    )
  }

  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      <Header title={course.title.toUpperCase()} />

      <section className="flex-1">
        <div className="w-full px-4 py-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[420px_1fr]">

            <aside className="flex flex-col items-start self-start">
              <nav className="w-full space-y-6" aria-label="Kursnavigasjon">
                {allCourses.map((c) => (
                  <Link
                    key={c._id}
                    href={`/${organization_slug}/courses/${c.slug.current}`}
                    className="block w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg transition"
                  >
                    {c.title}
                  </Link>
                ))}
                <span className="block w-full bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg font-semibold">
                  {t('course.quizTitle')}
                </span>
              </nav>
            </aside>

            <div className="w-full pr-0 lg:pr-15">
              <section className="w-full rounded-2xl bg-white p-12 shadow-lg text-left">
                <QuizForm
                  orgSlug={organization_slug}
                  courseSlug={slug}
                  courseTitle={course.title}
                  questions={course.quizQuestions}
                  passingScore={course.passingScore ?? 70}
                />
              </section>
            </div>
          </div>
        </div>
      </section>
    </MainWrapper>
  )
}
