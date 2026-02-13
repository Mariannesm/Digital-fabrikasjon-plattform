import './RegisterProject.css'
import MainWrapper from '../../components/MainWrapper'
import Header from '../../components/Header'
import { useNavigate } from "react-router-dom"
import StartButton from '../../components/StartButton'
import { useState } from "react"
import OpenEye from  '../../assets/ikoner/OpenEye.png';
import ClosedEye from  '../../assets/ikoner/ClosedEye.png';

function RegisterProject() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")

  return (
    <MainWrapper classNames={"pt-0 bg-[#FFFCF8]"}>
      <Header 
        title="REGISTRER ET PROSJEKT"
        showSelectInstitution={true}/>

      <div className="flex justify-center mt-16 px-4">
        <form className="grid gap-y-5 max-w-[520px] w-full">
          <div>
            {/*Kan du få til at teksten går på en linje? SE FIGMA*/}
            <p className='mb-10 text-lg font-normal'>Her skal du registrere ditt prosjekt ved å fylle inn informasjon i feltene under:</p>
            <label className="block text-xl mb-1">
              Prosjektnavn:
            </label>
            <input
              type="text"
              className="bg-gray-200 rounded px-3 py-2 w-full"
              placeholder="Birdhouse"
            />
          </div>

           <div>
            <label className="block text-xl mb-1">
              Velg område/instutuisjon:
            </label>
            <select className="bg-gray-200 rounded px-3 py-2 w-full">
            <option value="Hiof Halden">Høgskolen i Østfold: Halden</option>
            <option value="Hiof Fredrikstad">Høgskolen i Østfold: Fredrikstad</option>
            <option value="OsloMet">OsloMet</option>
          </select>
          </div>

           {/* mulighet på om de ønsker at den skal være public på siden eller ikke, så admin ser hvem som har lyst til at den skal lastes opp*/}
          <p className='text-lg mb-1'>Ønsker du at prosjektet ditt skal være tilgjengelig for andre?</p>
          <div className="flex justify-center gap-6 mb-3 mt-3">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="visibility"
              className="h-4 w-4"
            />
            <span className="text-xl font-medium text-black leading-none">
              Privat
            </span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="visibility"
              className="h-4 w-4"
            />
            <span className="text-xl font-medium text-black leading-none">
              Offentlig
            </span>
          </label>
        </div>

          <div>
            <label className="block text-xl mb-1">
              Navn på medlemmer:
            </label>
            <textarea
              className="bg-gray-200 rounded px-3 py-2 w-full min-h-[90px]"
              placeholder="Ola Nordmann, Kari Nordmann"
            />
          </div>

          {/* Passord */}
          <div>
            <label className="block text-xl mb-1">
              Lag et passord:
            </label>

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Minst 8 tegn"
                className="bg-gray-200 rounded px-3 py-2 w-full pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="button" onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center"
                aria-label={showPassword ? "Skjul passord" : "Vis passord"}>
                 <img
                    src={showPassword ? ClosedEye : OpenEye}
                    alt={showPassword ? "Skjul passord" : "Vis passord"}
                    className="w-5 h-5"/>
              </button>
            </div>

            <p className="text-left mt-2">
              Passordet må bestå av åtte eller flere tegn, med minst én liten og én stor bokstav.
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <StartButton onClick={() => navigate('/RegisteredProject')} >
              Registrer prosjektet
            </StartButton>
          </div>

        </form>
      </div>
    </MainWrapper>
  )
}

export default RegisterProject
