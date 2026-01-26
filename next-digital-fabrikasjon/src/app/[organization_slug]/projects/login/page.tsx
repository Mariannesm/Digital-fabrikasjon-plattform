'use client'

import { useState } from 'react'
import Image from 'next/image'
import MainWrapper from '@/components/templates/MainWrapper'
import Header from '@/components/ui/Header'
import { Button } from '@/components/ui/Button'

export default function ProjectLoginPage() {
  const [projectName, setProjectName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <MainWrapper classNames="pt-0 bg-[#FFFCF8]">
      <Header title="LOGG INN PÅ PROSJEKT" showSelectInstitution={true} />

      <div className="flex justify-center px-4 mt-10 sm:mt-16">
        <div className="w-full max-w-[420px] flex flex-col gap-4">
          {/* Prosjektnavn */}
          <input
            placeholder="Prosjektnavn"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="h-12 w-full rounded-md bg-[#EFEFEF] px-4 text-left"
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Passord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 w-full rounded-md bg-[#EFEFEF] px-4 pr-10 text-left"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center"
              aria-label={showPassword ? 'Skjul passord' : 'Vis passord'}
            >
              <Image
                src={showPassword ? '/icons/ClosedEye.png' : '/icons/OpenEye.png'}
                alt=""
                width={20}
                height={20}
              />
            </button>
          </div>

          <div className="flex justify-center mt-2">
            <Button type="button">Logg inn</Button>
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}
