import Link from 'next/link'
import Header from '@/components/ui/Header'
import MainWrapper from '@/components/templates/MainWrapper'
import { getCoursesByOrganization } from '@/lib/sanity/queries/course'
import { getTranslations } from '@/lib/i18n'

type Props = {
  params: Promise<{ organization_slug: string }>
}

export default async function DigitalCoursesPage({ params }: Props) {
  const { organization_slug } = await params
  const { t } = await getTranslations()
  const courses = await getCoursesByOrganization(organization_slug)

  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      <Header title={t('course.listTitle')} />

      <div className="mx-auto w-full max-w-6xl px-10 py-14">
        <p className="mb-3 text-lg font-medium text-black">
          {t('course.listIntro')}
        </p>

        {courses.length === 0 ? (
          <p className="mt-10 text-gray-500">{t('course.noCourses')}</p>
        ) : (
          <div className="mt-10 flex flex-col gap-4">
            {courses.map((course) => (
              <div
                key={course._id}
                className="flex items-center justify-between rounded-2xl bg-[#C2D8DA] px-6 py-5"
              >
                <h3 className="text-lg font-bold tracking-wide text-[#214C50]">
                  {course.title.toUpperCase()}
                </h3>
                {course.description && (
                  <p className="hidden text-sm text-[#214C50] md:block max-w-md">
                    {course.description}
                  </p>
                )}
                <Link
                  href={`/${organization_slug}/courses/${course.slug.current}`}
                  className="rounded-2xl bg-[#214C50] px-7 py-2 text-base font-bold text-white shadow hover:bg-[#488B90] transition"
                >
                  {t('course.startBtn')}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainWrapper>
  )
}
