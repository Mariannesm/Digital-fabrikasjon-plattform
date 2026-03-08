import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getProjectById } from '@/lib/sanity/queries/project'
import MainWrapper from '@/components/templates/MainWrapper'
import Header from '@/components/ui/Header'
import BackButton from '@/components/ui/BackButton'

interface Props {
  params: Promise<{ organization_slug: string; id: string }>
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

export default async function ProjectDetailPage({ params }: Props) {
  const { organization_slug, id } = await params

  const project = await getProjectById(id)
  if (!project) notFound()

  const imageUrl = project.coverImage?.asset?.url

  return (
    <MainWrapper classNames="pt-0 bg-[#FFFCF8]">
      <Header title={project.title.toUpperCase()} />

      <div className="mx-auto w-full max-w-5xl px-4 pb-12 pt-6">
        <div className="flex items-center justify-between mb-6">
          <BackButton>Tilbake til prosjekter</BackButton>
          <Link
            href={`/${organization_slug}/projects/${id}/edit`}
            className="bg-[#E69138] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#d47e20] transition-colors"
          >
            Rediger prosjekt
          </Link>
        </div>

        {/* Status badge */}
        <div className="mb-6">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${STATUS_COLORS[project.status ?? 'draft']}`}>
            {STATUS_LABELS[project.status ?? 'draft']}
          </span>
        </div>

        {/* Bilde */}
        {imageUrl && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-md">
            <Image
              src={imageUrl}
              alt={project.coverImage?.alt ?? project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
        )}

        {!imageUrl && !project.content && (
          <p className="text-gray-500 text-center py-12">
            Dette prosjektet har ikke lagt til innhold ennå.
          </p>
        )}
      </div>
    </MainWrapper>
  )
}
