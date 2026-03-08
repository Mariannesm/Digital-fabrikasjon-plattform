import Link from 'next/link'
import Image from 'next/image'
import { getProjectsByOrganization } from '@/lib/sanity/queries/project'
import MainWrapper from '@/components/templates/MainWrapper'
import Header from '@/components/ui/Header'
import { getTranslations } from '@/lib/i18n'
import type { TranslationKey } from '@/providers/LanguageProvider'

interface Props {
  params: Promise<{ organization_slug: string }>
}

const STATUS_COLORS: Record<string, string> = {
  draft: 'bg-gray-200 text-gray-700',
  pending: 'bg-yellow-100 text-yellow-800',
  approved: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-700',
}

const STATUS_KEYS: Record<string, TranslationKey> = {
  draft: 'project.status.draft',
  pending: 'project.status.pending',
  approved: 'project.status.approved',
  rejected: 'project.status.rejected',
}

export default async function ProjectsPage({ params }: Props) {
  const { organization_slug } = await params
  const { t } = await getTranslations()
  const projects = await getProjectsByOrganization(organization_slug)

  return (
    <MainWrapper classNames="pt-0 bg-[#FFFCF8]">
      <Header title={t('project.listTitle')} />

      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-6">
        <p className="font-normal text-lg text-left mb-10">{t('project.listIntro')}</p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Link
            href={`/${organization_slug}/projects/register`}
            className="rounded-md bg-[#E69138] px-8 py-2 text-sm font-semibold text-white hover:bg-[#d47e20] transition-colors"
          >
            {t('project.registerNew')}
          </Link>
          <Link
            href={`/${organization_slug}/projects/login`}
            className="rounded-md bg-gray-200 px-8 py-2 text-sm font-medium text-black hover:bg-gray-300 transition-colors"
          >
            {t('project.loginLink')}
          </Link>
        </div>

        {projects.length === 0 ? (
          <p className="text-gray-500 text-center py-16">{t('project.noProjects')}</p>
        ) : (
          <div className="mt-6 space-y-8">
            {projects.map((project) => {
              const imageUrl = project.coverImage?.asset?.url
              const statusKey = STATUS_KEYS[project.status ?? 'draft'] ?? 'project.status.draft'
              return (
                <Link
                  key={project._id}
                  href={`/${organization_slug}/projects/${project._id}`}
                  className="block overflow-hidden rounded-2xl bg-[#DBD6C2] shadow-lg ring-1 ring-black/5 hover:ring-2 hover:ring-[#E69138] transition-all"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="p-6 md:col-span-3 text-left">
                      <h2 className="text-4xl font-semibold tracking-wide text-black">
                        {project.title.toUpperCase()}
                      </h2>
                      <div className="mt-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${STATUS_COLORS[project.status ?? 'draft']}`}>
                          {t(statusKey)}
                        </span>
                      </div>
                    </div>

                    <div className="relative md:col-span-2 h-56 md:h-auto">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={project.coverImage?.alt ?? project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      ) : (
                        <div className="h-full w-full bg-[#C2D8DA] flex items-center justify-center">
                          <span className="text-gray-500 text-sm">{t('project.noImage')}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </MainWrapper>
  )
}
