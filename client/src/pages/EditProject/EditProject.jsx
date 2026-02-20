import MainWrapper from '../../components/MainWrapper'
import Header from '../../components/Header'
import "./EditProject.css";
import { useNavigate } from "react-router-dom"
import StartButton from '../../components/StartButton'


function EditProject() {
  const navigate = useNavigate()

  return (
    <MainWrapper classNames={"pt-0 bg-[#FFFCF8]"}>
      <Header title="REDIGER PROSJEKT" showSelectInstitution={true} />

      <div className="flex justify-center px-4 pb-14 pt-8">
        <div className="w-full max-w-[980px]">

          {/* Infotekst */}
          <p className="mx-auto mb-6 font-normal text-lg text-left mb-15">
            Her skal du oppdatere informasjonen på prosjektet ditt ved å fylle inn informasjon og bilder i tekstboksene.
            Ved ferdig oppdatering trykk på lagre og logg ut.
          </p>

          {/* 2 kolonner */}
          <form className="grid grid-cols-1 gap-6 md:gap-x-10 md:gap-y-4 md:grid-cols-2">
            {/* VENSTRE */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xl text-black text-left mb-3">Prosjektnavn:</label>
                <input
                  type="text"
                  className="bg-gray-200 rounded px-3 py-2 w-full"
                  placeholder="Birdhouse"
                />
              </div>

              {/*OBS OBS SE FIGMA*/}
              
              <div>
                <label className="block text-xl text-black text-left mb-3">Prosjektbilde (Utviklet produkt):</label>
                <button
                  type="button"
                  className="bg-gray-200 rounded px-3 py-2 w-full text-left"
                > + Legg til bilde
                </button>
              </div>

              <div>
                <label className="block text-xl text-black text-left mb-3">Bakgrunnsfarge for prosjektet:</label>
                <select className="bg-gray-200 rounded px-3 py-2 w-full">
                  <option>Velg farge</option>
                  <option>Grå</option>
                  <option>Blå</option>
                  <option>Grønn</option>
                </select>
              </div>

              <div>
                <label className="block text-xl text-black text-left mb-3">Velg område/institusjon:</label>
                <select className="bg-gray-200 rounded px-3 py-2 w-full">
                  <option>Velg</option>
                  <option>Høgskolen i Østfold: Halden</option>
                  <option>Høgskolen i Østfold: Fredrikstad</option>
                  <option>OsloMet</option>
                </select>
              </div>

              <div>
                <label className="block text-xl text-black text-left mb-3">
                  Ønsker du at prosjektet ditt skal være tilgjengelig for andre?
                </label>

                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 text-lg">
                    <input type="radio" name="visibility" className="h-5 w-5" />
                    <span>Privat</span>
                  </label>

                  <label className="flex items-center gap-2 text-lg">
                    <input type="radio" name="visibility" className="h-4 w-4" />
                    <span>Offentlig</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xl text-black text-left mb-3">Navn på medlemmer:</label>
                <textarea
                  className="bg-gray-200 rounded px-3 py-2 w-full"
                  placeholder="Ola Nordmann, Kari Nordmann"
                />
              </div>

                {/* Kan velge flere teknologer + kan legge til flere teknologier*/}
              <div>
                <label className="block text-xl text-black text-left mb-3">Velg teknologi:</label>
                <select className="bg-gray-200 rounded px-3 py-2 w-full">
                  <option>3D-printer</option>
                  <option>Laserkutter</option>
                  <option>Vinylkutter</option>
                  <option>Airbrushing</option>
                </select>
              </div>

                {/* Kan velge flere kategorier + kan legge til flere kateogier*/}
              <div>
                <label className="block text-xl text-black text-left mb-3">Velg kategori:</label>
                <select className="bg-gray-200 rounded px-3 py-2 w-full">
                  <option>Utendørs</option>
                  <option>Bærekraft</option>
                  <option>Husholdning</option>
                  <option>Gadget</option>
                  <option>Leker og spill</option>
                  <option>Interiør</option>
                  <option>Annet</option>
                </select>
              </div>

              <div>
                <label className="block text-xl text-black text-left mb-3">Legg til dato for prosjektet:</label>
                <select className="bg-gray-200 rounded px-3 py-2 w-full">
                  <option>Vår 2026</option>
                  <option>Høst 2026</option>
                  <option>Vår 2027</option>
                  <option>Høst 2027</option>
                  <option>Vår 2028</option>
                  <option>Høst 2028</option>
                  <option>Vår 2029</option>
                  <option>Høst 2029</option>
                </select>
              </div>
            </div>

            {/* HØYRE */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xl text-black text-left mb-3">Legg til arbeidsfiler:</label>

                <div className="flex flex-wrap gap-2">
                  <button type="button" className="bg-gray-200 rounded px-3 py-2 w-full text-left">
                    + Legg til fil
                  </button>
                  <button type="button" className="bg-gray-200 rounded px-3 py-2 w-full text-left">
                    + Legg til fil
                  </button>
                </div>

                <button type="button" className="mt-2 rounded bg-gray-200 px-4 py-2">
                  + Ny rute
                </button>
              </div>

              <div>
                <label className="block text-xl text-black text-left mb-3">Beskrivelse av prosjektet:</label>
                <textarea
                  className="bg-gray-200 rounded px-3 py-2 w-full"
                  placeholder="(Hva, hvorfor, hvordan)"
                />
                <button type="button" className="mt-2 rounded bg-gray-200 px-4 py-2">
                  + Legg til bilde
                </button>
              </div>

              <div>
                <label className="block text-xl text-black text-left mb-3">Beskrivelse av arbeidsprosessen:</label>
                <textarea
                  className="bg-gray-200 rounded px-3 py-2 w-full"
                  placeholder="(Bruker av teknologi, utvikling)"
                />
                <button type="button" className="mt-2 rounded bg-gray-200 px-4 py-2">
                  + Legg til bilde
                </button>
              </div>

              <div>
                <label className="block text-xl text-black text-left mb-3">Beskrivelse av resultatet:</label>
                <textarea
                  className="bg-gray-200 rounded px-3 py-2 w-full"
                  placeholder="(Prototype, funn)"
                />
                <button type="button" className="mt-2 rounded bg-gray-200 px-4 py-2">
                  + Legg til bilde
                </button>
              </div>
            </div>

            {/* KNAPP NEDERST (midtstilt) EVT OM DET GÅR Å HA EN LAGRE KNAPP OG EN LOGG UT KNAPP*/}
            <div className="md:col-span-2 flex justify-center mt-6">
              <StartButton onClick={() => navigate('/RegisteredProject')}>
                Lagre og logg ut
              </StartButton>
            </div>
          </form>
        </div>
      </div>
    </MainWrapper>
  )
}

export default EditProject
