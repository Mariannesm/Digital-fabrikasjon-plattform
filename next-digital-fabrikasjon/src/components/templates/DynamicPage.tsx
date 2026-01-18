import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPageData } from '@/lib/getPageData'; // Din funksjon for å hente data

export default async function DynamicPage({ params }: { params: { slug: string[] } }) {
  const fullSlug = params.slug ? params.slug.join('/') : 'hjem'; // Slå sammen slug-array til f.eks. "om-oss/team"
  
  const pageData = await getPageData(fullSlug); // Hent data basert på slug
  
  if (!pageData) {
    notFound(); // Vis 404 hvis siden ikke finnes
  }

  return (
    <div>
      <h1>{pageData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData.content }} /> {/* Eller bruk Markdown-renderer */}
      
      {/* Lenker til andre sider */}
      <ul>
        {pageData.links.map((link: string) => (
          <li key={link}>
            <Link href={link}>Gå til {link}</Link>
          </li>
        ))}
      </ul>
      
      {/* Eksempel på lenke til underside */}
      <Link href={`/${fullSlug}/ny-underside`}>Legg til underside (dynamisk)</Link>
    </div>
  );
}

// Generer statiske paths (valgfritt for SSG)
export async function generateStaticParams() {
  const allPages = await getAllPages(); // Hent alle slugs fra DB
  return allPages.map((page) => ({ slug: page.slug.split('/') }));
}