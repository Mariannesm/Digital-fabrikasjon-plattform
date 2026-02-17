import "./GuidePage.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import Printer from "../../assets/ikoner/Printer.png";
import StartButton from "../../components/StartButton";
import PrinterIkon from "../../assets/ikoner/3Dprinter.png";

function GuidePage() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="ORIGINAL PRUSA MK4S" showSelectInstitution={false} />

      <section className="flex-1">
        <div className="w-full px-4 py-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[420px_1fr]">


              {/* VENSTRE*/}
              <aside className="flex flex-col items-start self-start top-6 z-10">
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-24 w-1 bg-[#488B90]" />
                  <img
                    src={Printer}
                    alt="3D-printer"
                    className="h-24 w-24 object-contain opacity-80"
                  />
                </div>
                <nav className="w-full space-y-6">
                  <button className="w-full bg-[#214C50] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg">
                    Introduksjon og sikkerhet
                  </button>

                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg">
                    1. 3D-modell
                  </button>

                  <button className="w-full bg-[#488B90] px-8 py-6 text-left text-lg text-white shadow-md">
                    2. Forbered printen (Slicing)
                  </button>

                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg">
                    3. Klargjøring av printeren
                  </button>

                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg">
                    4. Kjøre printeren
                  </button>

                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg">
                    5. Oppfølging av printen
                  </button>

                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg">
                    6. Ferdig print
                  </button>

                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg">
                    7. Etterbehandling
                  </button>
                </nav>
              </aside>

              {/* HØYRE tenker at i tilegg til tekstlig innhold og bilder, at det kan være mulig å linke til videor som f.eks fra youtube? eller legge inn video?*/}
              <div className="w-full pr-15">
                <section className="w-full max-w-7xl mr-auto min-h-[420px] rounded-2xl bg-white p-12 shadow-lg text-left flex flex-col">

                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Introduksjon og sikkerhet</h2>
                    <span className="h-1 w-full bg-[#488B90]" />
                  </div>

                  <div className="mt-6 mb-6 font-normal text-base text-black">
                    <p>
                      Skkerhet er spesielt viktig ved bruk av forskjellige teknologier. Ved 3D-printig må du tenke på sikkerhetspunktene i figuren under.
                    </p>
                  </div>

                  <div className="rounded-lg border-2 border-[#E69138] bg-[#EBECEB] p-3 text-xs lg:w-[400px] lg:shrink-0">
                    <p className="text-base font-semibold ml-2">VIKTIGE SIKKERHETSPUNKER VED 3D-PRINTING:</p>
                    <ul className="mt-2 ml-2 space-y-1 text-sm">
                      <li>• Printeren blir for varm</li>
                      <li>• Smeltet plastikk er varmt</li>
                      <li>• .....</li>
                    </ul>
                  </div>

                  <div className=" font-normal mt-10">
                    <p>Lær mer om 3D-printing teknologien ved å gjennomføre det digitale kurset.</p>
                  </div>

                  {/*OBS OBS Muligheter til å linke til relevante kurs i  modulen*/}

                  <div className="flex items-center justify-between rounded-2xl bg-[#C2D8DA] px-4 py-3 max-w-xl mt-6 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center">
                        <img src={PrinterIkon} alt="3D printer ikon" />
                      </div>
                      <h3 className="text-lg font-semibold tracking-wide text-[#214C50]">
                        Ta kurset om 3D-printing
                      </h3>
                    </div>
                    <StartButton>Gå til</StartButton>
                  </div>

                  <div className=" font-normal text-base mb-6">
                    <p>3D-printing inkluderer flere essensielle steg. Her får du steg for steg guide for å lære å bruke 3D-printeren du har valgt. </p>
                  </div>



                  {/* Sticky knappær i bunn */}
                  <div className="mt-auto flex items-end justify-between">
                    <button className="rounded-xl bg-[#EBA65F] px-10 py-3 font-semibold text-black shadow hover:bg-[#C28B53] transition">
                      Forrige
                    </button>

                    <button className="rounded-xl bg-[#EBA65F] px-10 py-3 font-semibold text-black shadow hover:bg-[#C28B53] transition">
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

export default GuidePage;
