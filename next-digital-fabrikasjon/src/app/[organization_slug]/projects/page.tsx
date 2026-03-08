import Link from 'next/link'
import Image from 'next/image'
import { getProjectsByOrganization } from '@/lib/sanity/queries/project'
import MainWrapper from '@/components/templates/MainWrapper'
import Header from '@/components/ui/Header'

interface Props {
  params: Promise<{ organization_slug: string }>
}

const STATUS_LABELS: Record<string, string> = {
  draft: 'Utkast',
  pending: 'Venter på godkjenning',
  approved: 'Godkjent',
  rejected: 'Avslått',
}

const STATUS_COLORS: Record<string, string> = {
  draft: 'bg-gray-200 text-gray-700',
  pending: 'bg-yellow-100 text-yellow-800',
  approved: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-700',
}

export default async function ProjectsPage({ params }: Props) {
  const { organization_slug } = await params
  const projects = await getProjectsByOrganization(organization_slug)

  return (
    <MainWrapper classNames="pt-0 bg-[#FFFCF8]">
      <Header title="PROSJEKTER" />

      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-6">
        <p className="font-normal text-lg text-left mb-10">
          Her finner du alle prosjekter registrert i plattformen.
        </p>

        {/* Handlingsknapper */}
        <div className="flex flex-wrap gap-4 mb-10">
          <Link
            href={`/${organization_slug}/projects/register`}
            className="rounded-md bg-[#E69138] px-8 py-2 text-sm font-semibold text-white hover:bg-[#d47e20] transition-colors"
          >
            + Registrer nytt prosjekt
          </Link>
          <Link
            href={`/${organization_slug}/projects/login`}
            className="rounded-md bg-gray-200 px-8 py-2 text-sm font-medium text-black hover:bg-gray-300 transition-colors"
          >
            Logg inn på ditt prosjekt
          </Link>
        </div>

        {/* Prosjektkort */}
        {projects.length === 0 ? (
          <p className="text-gray-500 text-center py-16">
            Ingen prosjekter er registrert ennå.
          </p>
        ) : (
          <div className="mt-6 space-y-8">
            {projects.map((project) => {
              const imageUrl = project.coverImage?.asset?.url
              return (
                <Link
                  key={project._id}
                  href={`/${organization_slug}/projects/${project._id}`}
                  className="block overflow-hidden rounded-2xl bg-[#DBD6C2] shadow-lg ring-1 ring-black/5 hover:ring-2 hover:ring-[#E69138] transition-all"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    {/* Venstre side */}
                    <div className="p-6 md:col-span-3 text-left">
                      <h2 className="text-4xl font-semibold tracking-wide text-black">
                        {project.title.toUpperCase()}
                      </h2>
                      <div className="mt-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${STATUS_COLORS[project.status ?? 'draft']}`}>
                          {STATUS_LABELS[project.status ?? 'draft']}
                        </span>
                      </div>
                    </div>

                    {/* Høyre side – bilde */}
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
                          <span className="text-gray-500 text-sm">Ingen bilde</span>
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
