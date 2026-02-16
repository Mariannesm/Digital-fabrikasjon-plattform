import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import "./ExistingProject.css";
import Skisse from "../../assets/Bilder/Skisse.png"

function ExistingProject() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      <Header title="SE EKSISTERENDE PROSJEKTER" showSelectInstitution={false} />

      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-6">
        {/* Intro */}
        <p className="mx-auto font-normal text-lg text-left mb-10">
          Her finner du alle eksisterende prosjekter, som er publisert i plattformen.
          Du kan gjøre filtrering etter det du er ute etter å lese om.
        </p>

        {/*  Kan flirterer på flere av gangen SE FIGMA!!! */}
        <div className="flex flex-wrap gap-7 mb-10">

            <select className="rounded-md bg-gray-200 px-8 py-2 text-m font-medium text-black shadow-sm ring-1 ring-black/5 hover:bg-[#C7C7C7]">
                  <option>Filtrer område/institusjon:</option>
                  <option>Høgskolen i Østfold: Halden</option>
                  <option>Høgskolen i Østfold: Fredrikstad</option>
                  <option>OsloMet</option>
                </select>

                <select className="rounded-md bg-gray-200 px-8 py-2 text-m font-medium text-black shadow-sm ring-1 ring-black/5 hover:bg-[#C7C7C7]">
                  <option>Filtrer kategori:</option>
                  <option>Utendørs</option>
                  <option>Bærekraft</option>
                  <option>Husholdning</option>
                  <option>Gadget</option>
                  <option>Leker og spill</option>
                  <option>Interiør</option>
                  <option>Annet</option>
                </select>

                <select className="rounded-md bg-gray-200 px-8 py-2 text-m font-medium text-black shadow-sm ring-1 ring-black/5 hover:bg-[#C7C7C7]">
                  <option>Filtrer teknologi:</option>
                  <option>3D-printer</option>
                  <option>Laserkutter</option>
                  <option>Vinylkutter</option>
                  <option>Airbrushing</option>
                </select>

                  <input
                  type="date"
                  className="rounded-md bg-gray-200 px-8 py-2 text-m font-medium text-black shadow-sm ring-1 ring-black/5 hover:bg-[#C7C7C7]"/>
        </div>

        {/* Prosjekt kort */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-[#DBD6C2] shadow-lg ring-1 ring-black/5">
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* venstre side av kortet */}
            <div className="p-6 md:col-span-3 text-left">
              <h2 className="text-4xl font-semibold tracking-wide text-black">
                BIRDHOUSE
              </h2>

              <div className="mt-4 space-y-1 text-m text-black">
                <p>
                  <span className="font-semibold">Av:</span> Marianne, Jonas og
                  Jennifer
                </p>
                <p>
                  <span className="font-semibold">Høgskolen i Østfold:</span>{" "}
                  Halden
                </p>

                <div className="mt-3 space-y-1">
                  <p>
                    <span className="font-semibold">Kategori:</span> Undersøk
                  </p>
                  <p>
                    <span className="font-semibold">Teknologi:</span> 3D-printing,
                    laserkutting
                  </p>
                  <p>
                    <span className="font-semibold">Tidsrom:</span> Vår 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Høyre side av kortet hvor bildet skal være */}
            <div className="relative md:col-span-2">
              <div className="h-56 w-full md:h-full">
                {/* Bytt ut denne med <img ... /> når du har bildet */}

                <img src={Skisse} alt="Bilde av skisse"></img>
                <div className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}

export default ExistingProject;
