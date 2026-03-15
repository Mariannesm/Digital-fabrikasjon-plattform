'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useUser } from '@/providers/UserProvider'
import { isAdmin } from '@/lib/auth/roles'
import { signOut } from '@/lib/supabase/user'

export default function HeaderMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { user } = useUser()

  // Lukk ved klikk utenfor
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      {/* Burger-knapp */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Meny"
        aria-expanded={open}
        className="flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-md
          bg-white/60 hover:bg-white/90 shadow-sm transition"
      >
        <span className={`block w-5 h-0.5 bg-[#214C50] transition-transform duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
        <span className={`block w-5 h-0.5 bg-[#214C50] transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-[#214C50] transition-transform duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-12 z-50 w-52 rounded-xl bg-white shadow-lg border border-black/10 overflow-hidden">

          {/* Bruker */}
          <div className="py-2">
            {user && isAdmin(user.role) ? (
              <>
                <div className="px-4 py-2 text-xs text-gray-400 truncate">{user.email}</div>
                <Link
                  href="/admin"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm font-semibold text-[#214C50] hover:bg-[#C2D8DA] transition"
                >
                  Admin-panel
                </Link>
                <form action={signOut}>
                  <button
                    type="submit"
                    className="w-full text-left px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 transition"
                  >
                    Logg ut
                  </button>
                </form>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm font-semibold text-[#214C50] hover:bg-[#C2D8DA] transition"
              >
                Logg inn
              </Link>
            )}
          </div>

        </div>
      )}
    </div>
  )
}
