import "./GuideStep1.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import Printer from "../../assets/ikoner/Printer.png";

function GuideStep1() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="ORIGINAL PRUSA MK4S" showSelectInstitution={false} />

      <section className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-8 py-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[240px_1fr]">
            
            {/* Venstre seksjon */}
            <aside className="flex flex-col items-start">
              
              {/* Ikon med vertikal linje */}
              <div className="mb-6 flex items-center gap-4">
                <span className="h-24 w-1 bg-[#488B90]" />
                <img
                  src={Printer}
                  alt="3D-printer"
                  className="h-24 w-24 object-contain opacity-80"
                />
              </div>

             {/* Navigasjon */}
                <nav className="w-full">
            
                <div className="space-y-1">
                    <button className="w-full bg-[#214C50] px-5 py-4 text-left text-white shadow">
                    1. Lag modellen
                    </button>

                    <div className="space-y-0">
                    <button className="w-full bg-[#214C50] hover:bg-[#122B2D] px-5 py-4 text-left text-white shadow pl-10">
                        1.1 Eksisterende modell
                    </button>
                    <button className="w-full bg-[#214C50] hover:bg-[#122B2D] px-5 py-4 text-left text-white shadow pl-10">
                        1.2 3D-modellering
                    </button>
                    </div>
                </div>

                <div className="mt-4 space-y-4">
                    <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-5 py-4 text-left text-white shadow">
                    2. Forbered printen
                    </button>
                    <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-5 py-4 text-left text-white shadow">
                    3. Print
                    </button>
                    <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-5 py-4 text-left text-white shadow">
                    4. Etterbehandling
                    </button>
                </div>
                </nav>
            </aside>

            {/* Høyre seksjon */}
            <div className="w-full">
              <section className="relative w-full max-w-3xl min-h-[420px] rounded-2xl bg-white p-12 shadow-lg text-left flex flex-col">
                
                {/* Tittel */}
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold">
                    Steg 1. Lag modellen
                  </h2>
                  <span className="h-1 w-full bg-[#488B90]" />
                </div>

                {/* Innhold */}
                <div className="mt-6 text-base font-semibold text-black">
                  <p>
                    I det første steget skal du enten finne en eksisterende modell
                    eller 3D-modellere din egen.
                  </p>
                </div>

                {/* Knappene nederst*/}
                <div className="mt-auto flex items-end justify-between">
                  <button
                    className="
                     mt-20 rounded-xl bg-[#EBA65F] px-10 py-3 font-semibold text-black
                      shadow-[0_6px_14px_rgba(0,0,0,0.18)]
                      hover:bg-[#C28B53]
                      active:translate-y-[1px]
                      active:shadow-[0_4px_10px_rgba(0,0,0,0.18)]
                      transition"> 
                      Forrige
                  </button>

                  <button
                    className="
                     mt-20 rounded-xl bg-[#EBA65F] px-10 py-3 font-semibold text-black
                      shadow-[0_6px_14px_rgba(0,0,0,0.18)]
                      hover:bg-[#C28B53]
                      active:translate-y-[1px]
                      active:shadow-[0_4px_10px_rgba(0,0,0,0.18)]
                      transition">
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

export default GuideStep1;
