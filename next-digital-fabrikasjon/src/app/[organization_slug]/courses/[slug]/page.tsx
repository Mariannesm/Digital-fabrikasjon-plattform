import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import Header from '@/components/ui/Header'
import MainWrapper from '@/components/templates/MainWrapper'
import { getCourseBySlug, getCoursesByOrganization } from '@/lib/sanity/queries/course'
import { getTranslations } from '@/lib/i18n'

type Props = {
  params: Promise<{ organization_slug: string; slug: string }>
}

export default async function CoursePage({ params }: Props) {
  const { organization_slug, slug } = await params
  const { t } = await getTranslations()

  const [course, allCourses] = await Promise.all([
    getCourseBySlug(organization_slug, slug),
    getCoursesByOrganization(organization_slug),
  ])

  if (!course) notFound()

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
                    className={`block w-full px-8 py-6 text-left text-lg text-white shadow-lg transition ${
                      c.slug.current === slug
                        ? 'bg-[#214C50] font-semibold'
                        : 'bg-[#488B90] hover:bg-[#214C50]'
                    }`}
                  >
                    {c.title}
                  </Link>
                ))}
                <Link
                  href={`/${organization_slug}/courses/${slug}/quiz`}
                  className="block w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg transition"
                >
                  {t('course.quizTitle')}
                </Link>
              </nav>
            </aside>

            <div className="w-full pr-0 lg:pr-15">
              <section className="w-full rounded-2xl bg-white p-12 shadow-lg text-left">
                <div className="flex flex-col gap-2 mb-8">
                  <h2 className="text-2xl font-bold">{course.title}</h2>
                  <span className="h-1 w-full bg-[#488B90]" />
                </div>

                {course.description && (
                  <p className="mb-6 text-lg font-medium text-black">
                    {course.description}
                  </p>
                )}

                {course.content?.length > 0 && (
                  <div className="text-base leading-relaxed text-black [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-1 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_li]:mb-1 [&_strong]:font-bold [&_a]:underline [&_a]:text-[#488B90]">
                    <PortableText value={course.content} />
                  </div>
                )}

                <div className="mt-12 flex justify-start">
                  <Link
                    href={`/${organization_slug}/courses/${slug}/quiz`}
                    className="rounded-2xl bg-[#214C50] px-10 py-3 text-lg font-bold text-white shadow-md hover:bg-[#488B90] transition"
                  >
                    {t('course.startQuizBtn')}
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </MainWrapper>
  )
}
