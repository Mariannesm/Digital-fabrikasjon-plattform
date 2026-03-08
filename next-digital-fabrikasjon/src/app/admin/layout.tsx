import { redirect } from 'next/navigation'
import { getCurrentUserWithRole } from '@/lib/supabase/server'
import { isAdmin, isSuperAdmin } from '@/lib/auth/roles'
import { AdminNav } from './AdminNav'

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
    <div className='min-h-screen bg-[#FFFCF8] flex flex-col'>
      <AdminNav
        superAdmin={superAdmin}
        studioUrl={STUDIO_URL}
        userEmail={user.email ?? ''}
        userRole={user.role ?? ''}
      />
      <div className='flex flex-1'>
        <div className='w-60 flex-shrink-0' />
        <main id='main-content' className='flex-1 px-10 py-10 overflow-auto'>
          {children}
        </main>
      </div>
    </div>
  )
}
