import "./GuidePage.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import Printer from "../../assets/ikoner/Printer.png";



function GuidePage() {

  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="ORIGINAL PRUSA MK4S" showSelectInstitution={false} />


      {/* Erstattes med API-kall 
      title
      icon {
        src
        alt
      }
      path
      */}

   <section className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-8 py-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[240px_1fr]">
            {/* Venstre kolonne */}
            <aside className="flex flex-col items-start">

              {/* Ikon med linje - skal vise bilde av den valgte printeren/kutteren/ osv*/}
              <div className="mb-6 flex items-center gap-4">
                <span className="h-24 w-1 bg-teal-700" />
                <img
                  src={Printer}
                  alt="3D-printer"
                  className="h-24 w-24 object-contain opacity-80"
                />
              </div>

              {/* Hover fargen skal være den fargen som er på når de har selecta for eks steg 2. "på active" */}
              <nav className="w-full space-y-4">
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-5 py-4 text-left text-white shadow-sm">
                  1. Lag modellen
                </button>
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-5 py-4 text-left text-white shadow-sm">
                  2. Forbered printen
                </button>
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-5 py-4 text-left text-white shadow-sm">
                  3. Print
                </button>
                <button className="w-full bg-[#488B90] hover:bg-[#214C50]  px-5 py-4 text-left text-white shadow-sm">
                  4. Etterbehandling
                </button>
              </nav>
            </aside>

            {/* Høyre seksjon*/}
            <div className="w-full">
              <section className="w-full max-w-3xl rounded-2xl bg-white p-12 shadow-lg text-left">
               <div className="flex flex-col gap-2">
               <h2 className="text-lg font-semibold">Fire Steg</h2>
               <span className="h-1 w-full bg-teal-700" />
               </div>

                <div className="mt-6 text-base font-semibold text-black text-left">
                  <p>3D-printing inkluderer fire essensielle steg.</p>

                  <ol className="mt-5 space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-6">1.</span>
                      <p className="m-0">
                        Først må man enten finne en modell eller designe en egen.
                      </p>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="w-6">2.</span>
                      <p className="m-0">
                        Deretter skal modellen forberedes ved å tilpasse innstillinger for å lage en utskriftsfil.
                      </p>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="w-6">3.</span>
                      <p className="m-0">
                        Videre kan modellen 3D-printes lag for lag.
                      </p>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="w-6">4.</span>
                      <p className="m-0">
                        3D-printen kan tilslutt etterbehandles om behov.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="mt-12 flex justify-center">
                  <button className="rounded-md bg-[#214C50] hover:bg-[#122B2D] px-8 py-3 text-white shadow">
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
