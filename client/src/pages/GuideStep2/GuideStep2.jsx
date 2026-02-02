import "./GuideStep2.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import Printer from "../../assets/ikoner/Printer.png";
import Trinn2Prusa from "../../assets/bilder/Trinn2Prusa.png";
import Trinn3Prusa from "../../assets/bilder/Trinn3Prusa.png";
import Trinn4Prusa from "../../assets/bilder/Trinn4Prusa.png";
import Trinn5Prusa from "../../assets/bilder/Trinn5Prusa.png";
import Filament from "../../assets/bilder/Filament.png";

function GuideStep2() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="ORIGINAL PRUSA MK4S" showSelectInstitution={false} />

      <section className="flex-1">
        {/* Samme wrapper som GuidePage */}
        <div className="w-full px-4 py-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[420px_1fr]">
            {/* Venstre kolonne */}
            <aside className="flex flex-col items-start self-start sticky top-6 z-10">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-24 w-1 bg-[#488B90]" />
                <img
                  src={Printer}
                  alt="3D-printer"
                  className="h-24 w-24 object-contain opacity-80"
                />
              </div>

              <nav className="w-full space-y-6">
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  1. Lag modellen
                </button>
                <button className="w-full bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  2. Forbered printen
                </button>
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  3. Print
                </button>
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  4. Etterbehandling
                </button>
              </nav>
            </aside>

            {/* Høyre seksjon */}
            <div className="w-full">
              <section className="w-full max-w-7xl mr-auto rounded-2xl bg-white p-12 shadow-lg text-left">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold">2. Forbered printeren</h2>
                  <span className="h-1 w-full bg-[#488B90]" />
                </div>

                {/* Intro */}
                <div className="mt-6 text-base font-semibold text-black">
                  <p>For å klargjøre modellen for printing følg disse stegene:</p>
                </div>

                {/* STEG */}
                <div className="mt-8 space-y-10 text-sm font-medium text-slate-800">
                  {/* 1 */}
                  <div className="flex items-start gap-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E69138] font-bold text-white">
                      1
                    </div>
                    <div className="text-base font-normal">
                      <p>Last STL-filen inn i PrusaSlicer</p>
                      <p>
                        Sørg for at modellen er midtstilt og ligger flatt på
                        platen
                      </p>
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="flex items-start gap-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#E69138] font-bold text-[#E69138]">
                      2
                    </div>
                    <div className="text-base font-normal">
                      <p>Velg print setting</p>
                      <p className="mb-3 text-red-600">
                        Tommelfinger: 0.2 mm fungerer for det meste!
                      </p>
                      <img
                        src={Trinn2Prusa}
                        className="w-full rounded-lg border-2 border-[#E69138]"
                        alt="Print settings"
                      />
                    </div>
                  </div>

                  {/* 3 */}
                  <div className="flex items-start gap-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E69138] font-bold text-white">
                      3
                    </div>
                    <div className="w-full space-y-3">
                      <p className="text-base font-normal">Velg filament</p>
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                        <img
                          src={Trinn3Prusa}
                          className="rounded-lg border-2 border-[#E69138]"
                          alt="Velg filament"
                        />
                        <div className="rounded-lg border-2 border-[#E69138] bg-[#EBECEB] p-3 text-xs lg:w-[220px] lg:shrink-0">
                          <p className="text-base font-semibold">Tilgjengelig:</p>
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>• Generic PETG</li>
                            <li>• Generic PLA</li>
                            <li>• Prusament PETG</li>
                            <li>• Prusament PLA</li>
                            <li>• Prusament Woodfill</li>
                          </ul>
                        </div>
                      </div>

                      {/*Den usikker på filament skal være litt kortere*/}
                      <div className="mt-10 flex items-center justify-between rounded-3xl bg-[#C2D8DA] px-4 py-3">
                        <div className="flex items-center gap-3">
                          <img src={Filament} className="h-13 w-13" alt="" />
                          <span className="font-bold text-[#214C50]">
                            Usikker på filament?
                          </span>
                        </div>
                        <button className="rounded-xl bg-[#214C50] hover:bg-[#122B2D] px-4 py-2 text-sm text-white shadow">
                          Les mer
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 4 */}
                  <div className="flex items-start gap-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#E69138] font-bold text-[#E69138]">
                      4
                    </div>
                    <div className="w-full space-y-3">
                      <p className="text-base font-normal">Velg printer</p>
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                        <img
                          src={Trinn4Prusa}
                          className="rounded-lg border-2 border-[#E69138]"
                          alt="Velg printer"
                        />
                        <div className="rounded-lg border-2 border-[#E69138] bg-[#EBECEB] p-3 text-xs lg:w-[220px] lg:shrink-0">
                          <p className="text-base font-semibold">Tilgjengelig:</p>
                          <ul className="mt-2 space-y-1 text-sm">
                            <li>• Original Prusa MK4S</li>
                            <li>• Original Prusa MINI+</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 5 */}
                  <div className="flex items-start gap-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E69138] font-bold text-white">
                      5
                    </div>
                    <div className="w-full">
                      <p className="text-base font-normal">Velg supports…</p>
                      <p className="text-base font-normal">Sett infill</p>
                      <p className="text-red-600 text-base font-normal">
                        Tommelfinger: 15% – 20% er mer enn nok!
                      </p>
                      <img
                        src={Trinn5Prusa}
                        className="rounded-lg border-2 border-[#E69138]"
                        alt="Supports og infill"
                      />
                    </div>
                  </div>

                  {/* 6 */}
                  <div className="flex items-start gap-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#E69138] font-bold text-[#E69138]">
                      6
                    </div>
                    <p className="text-base font-normal">
                      Velg “Slice now” → Export G-code → Lagre som .bgcode
                    </p>
                  </div>

                  {/* 7 */}
                  <div className="flex items-start gap-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E69138] font-bold text-white">
                      7
                    </div>
                    <p className="text-base font-normal">
                      Lagre filen på minnepennen til printeren
                    </p>
                  </div>
                </div>

                {/* Navigasjon */}
                <div className="mt-16 flex items-center justify-between">
                  <button className="rounded-xl bg-[#EBA65F] px-10 py-3 font-semibold shadow hover:bg-[#C28B53]">
                    Forrige
                  </button>
                  <button className="rounded-xl bg-[#EBA65F] px-10 py-3 font-semibold shadow hover:bg-[#C28B53]">
                    Neste
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </MainWrapper>
  );
}

export default GuideStep2;
