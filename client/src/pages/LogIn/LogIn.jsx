import './LogIn.css'
import MainWrapper from '../../components/MainWrapper'
import Header from '../../components/Header'
import StartButton from '../../components/StartButton'
import { useState } from 'react'

import OpenEye from '../../assets/ikoner/OpenEye.png'
import ClosedEye from '../../assets/ikoner/ClosedEye.png'

function LogIn() {
  const [projectName, setProjectName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <MainWrapper classNames="pt-0 bg-[#FFFCF8]">
      <Header title="LOGG INN PÅ DITT PROSJEKT" showSelectInstitution={true} />

      <div className="flex justify-center px-4 mt-10 sm:mt-16">
        <div className="w-full max-w-[420px] flex flex-col gap-4">
            {/*Kan du få til at teksten går på en linje? SE FIGMA*/}
           <p className='mb-10 text-lg font-normal'>Logg inn på ditt prosjekt for å kunne oppdatere informasjon</p>
          {/* Prosjektnavn */}
          <label className="block text-black text-xl mb-1">Prosjektnavn:</label>
          <input
            placeholder="Prosjektnavn"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="h-12 w-full rounded-md bg-[#EFEFEF] px-4 text-left"
          />

          <label className="block text-black text-xl">Passord:</label>
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
                <img
                  src={showPassword ? ClosedEye : OpenEye}
                  alt=""
                  className="w-5 h-5"
                />
              </button>
            </div>

          <div className="flex justify-center mt-2">
            <StartButton>Logg inn</StartButton>
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}

export default LogIn
