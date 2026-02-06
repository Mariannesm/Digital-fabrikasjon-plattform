import "./GuidePage.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import Printer from "../../assets/ikoner/Printer.png";

function GuidePage() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="ORIGINAL PRUSA MK4S" showSelectInstitution={false} />

      <section className="flex-1">
        <div className="w-full px-4 py-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[420px_1fr]">
            
            {/* Venstre kolonne */}
            <aside className="flex flex-col items-start self-start top-6 z-10">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-24 w-1 bg-[#488B90]" />
                 {/* Bilde av den valgte maskinen/teknologien*/}
                <img
                  src={Printer}
                  alt="3D-printer"
                  className="h-24 w-24 object-contain opacity-80"
                />
              </div>

                {/* skal kunne legge til flere steg*/}
              <nav className="w-full space-y-6">
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                  1. Lag modellen
                </button>

                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                  2. Forbered printen
                </button>

                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                  3. Print
                </button>

                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                  4. Etterbehandling
                </button>
              </nav>
            </aside>

            {/* Høyre seksjon */}
            <div className="w-full pr-15">
              <section className="w-full max-w-7xl mr-auto ml-4 rounded-2xl bg-white p-12 shadow-lg">
                
                <div className="flex flex-col gap-2 text-left">
                  <h2 className="font-bold text-2xl">Fire Steg</h2>
                  <span className="h-1 w-full bg-[#488B90]" />
                </div>

                <div className="mt-6 text-left text-base font-semibold text-black">
                  <p>3D-printing inkluderer fire essensielle steg.</p>

                  <ol className="mt-5 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-6">1.</span>
                      <p className="m-0 font-normal">
                        Først må man enten finne en modell eller designe en egen.
                      </p>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="w-6">2.</span>
                      <p className="m-0 font-normal">
                        Deretter skal modellen forberedes ved å tilpasse
                        innstillinger for å lage en utskriftsfil.
                      </p>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="w-6">3.</span>
                      <p className="m-0 font-normal">
                        Videre kan modellen 3D-printes lag for lag.
                      </p>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="w-6">4.</span>
                      <p className="m-0 font-normal">
                        3D-printen kan tilslutt etterbehandles om behov.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="mt-12 flex justify-center">
                  <button className="rounded-md bg-[#214C50] px-8 py-3 text-white shadow hover:bg-[#122B2D]">
                    Start 3D-printingen
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
