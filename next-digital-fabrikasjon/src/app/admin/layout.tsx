import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getCurrentUserWithRole } from '@/lib/supabase/server'
import { isAdmin, isSuperAdmin } from '@/lib/auth/roles'

// Sanity Studio kjøres separat (cd server && npm run dev → localhost:3333)
// eller bruk hosted studio: https://rnl5hcxh.sanity.studio/
const STUDIO_URL = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL ?? 'http://localhost:3333'

type Props = {
  children: React.ReactNode
}

export default async function AdminLayout({ children }: Props) {
  const user = await getCurrentUserWithRole()

  if (!user || !isAdmin(user.role)) {
    redirect('/login')
  }

  const superAdmin = isSuperAdmin(user.role)

  return (
    <div className="min-h-screen bg-[#FFFCF8] flex flex-col">
      {/* Top bar */}
      <header className="w-full bg-[#214C50] px-8 py-4 flex items-center justify-between flex-shrink-0">
        <Link href="/" className="text-2xl font-extrabold text-[#E69138]">
          SmartMaking
        </Link>
        <div className="flex items-center gap-6">
          <a
            href={STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#E69138] px-4 py-2 text-sm font-bold text-white hover:bg-[#d47e20] transition"
          >
            Page Builder ↗
          </a>
          <span className="text-sm text-white opacity-80">
            {user.email} · {user.role}
          </span>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <nav
          aria-label="Admin-navigasjon"
          className="w-60 flex-shrink-0 bg-[#C2D8DA] flex flex-col p-4 gap-1"
        >
          <p className="px-4 pt-2 pb-1 text-xs font-bold uppercase tracking-widest text-[#214C50] opacity-60">
            Innhold
          </p>
          <NavLink href="/admin">Dashboard</NavLink>
          <NavLink href="/admin/projects">Prosjekter</NavLink>
          <NavLink href="/admin/courses/completions">Kursgjennomføringer</NavLink>

          <p className="px-4 pt-4 pb-1 text-xs font-bold uppercase tracking-widest text-[#214C50] opacity-60">
            Administrasjon
          </p>
          {superAdmin && <NavLink href="/admin/organizations">Organisasjoner</NavLink>}
          <NavLink href="/admin/register">Ny admin</NavLink>

          <p className="px-4 pt-4 pb-1 text-xs font-bold uppercase tracking-widest text-[#214C50] opacity-60">
            Redaktør
          </p>
          <a
            href={STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-[#214C50] hover:bg-[#488B90] hover:text-white transition"
          >
            <span>Page Builder</span>
            <span className="text-xs opacity-60">↗</span>
          </a>
        </nav>

        <main id="main-content" className="flex-1 px-10 py-10 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-4 py-2 text-sm font-semibold text-[#214C50] hover:bg-[#488B90] hover:text-white transition"
    >
      {children}
    </Link>
  )
}
