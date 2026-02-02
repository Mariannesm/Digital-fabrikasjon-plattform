import "./GuideStep1.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import Printer from "../../assets/ikoner/Printer.png";

function GuideStep1() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      <Header title="ORIGINAL PRUSA MK4S" showSelectInstitution={false} />

      <section className="flex-1">
        <div className="w-full px-4 py-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[420px_1fr]">

            {/* VENSTRE */}
            <aside className="flex flex-col items-start self-start sticky top-6 z-10">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-24 w-1 bg-[#488B90]" />
                <img
                  src={Printer}
                  alt="3D-printer"
                  className="h-24 w-24 object-contain opacity-80"
                />
              </div>

              {/* NAVIGASJON SÅNN DEN SKAL SE UT NÅR MAN TRYKKER MED FLERE STEG UNDER */}
              <nav className="w-full">

                <div className="flex flex-col ">
                  <button className="w-full bg-[#214C50] px-8 py-6 text-left text-lg text-white mb-2 ">
                    1. Lag modellen
                  </button>

                  <button className="w-full bg-[#214C50] hover:bg-[#122B2D] px-8 py-6 text-left text-lg text-white pl-12 ">
                    1.1 Eksisterende modell
                  </button>

                  <button className="w-full bg-[#214C50] hover:bg-[#122B2D] px-8 py-6 text-left text-lg text-white pl-12">
                    1.2 3D-modellering
                  </button>
                </div>

                <div className="mt-6 space-y-6">
                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                    2. Forbered printen
                  </button>

                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                    3. Print
                  </button>

                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                    4. Etterbehandling
                  </button>
                </div>

              </nav>
            </aside>

            {/* HØYRE */}
            <div className="w-full">
              <section className="w-full max-w-7xl mr-auto min-h-[420px] rounded-2xl bg-white p-12 shadow-lg text-left flex flex-col">

                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold">Steg 1. Lag modellen</h2>
                  <span className="h-1 w-full bg-[#488B90]" />
                </div>

                <div className="mt-6 text-base font-semibold text-black">
                  <p>
                    I det første steget skal du enten finne en eksisterende modell
                    eller 3D-modellere din egen.
                  </p>
                </div>

                <div className=" font-normal mt-3">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempora magni placeat nihil at ad sit error tempore, 
                    delectus esse pariatur sunt, neque similique ex veritatis explicabo provident a laboriosam.</p>
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

export default GuideStep1;
