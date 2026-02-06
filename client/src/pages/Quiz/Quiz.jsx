import "./Quiz.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";


function Quiz() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="KURS OM BÆREKRAFTIG BRUK" showSelectInstitution={false} />

      <section className="flex-1">
        {/* Samme wrapper som GuidePage */}
        <div className="w-full px-4 py-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[420px_1fr]">
            {/* Venstre kolonne */}
            <aside className="flex flex-col items-start self-start top-6 z-10">

              <nav className="w-full space-y-6">
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  1. Lag modellen
                </button>
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  2. Forbered printen
                </button>
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  3. Print
                </button>
                <button className="w-full bg-[#214C50] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  4. Etterbehandling
                </button>
              </nav>
            </aside>

            {/* Høyre seksjon */}
            <div className="w-full pr-15">
              <section className="w-full max-w-7xl mr-auto rounded-2xl bg-white p-12 shadow-lg text-left">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold">Quiz</h2>
                  <span className="h-1 w-full bg-[#488B90]" />
                </div>

                {/* QUIZ (kun UI) */}
                <div className="mt-12 ml-10">
                <div className="w-full max-w-4xl space-y-8">
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((nr) => (
                    <div key={nr} className="flex flex-col gap-4">
                        <p className="text-lg font-semibold text-black">
                        Spørsmål {nr}:
                        </p>

                        <div className="flex flex-wrap  gap-6">
                        <button
                            type="button"
                            className="rounded-lg bg-[#C2D8DA] px-15 py-3 text-base font-bold text-[#214C50] shadow-sm hover:bg-[#9FBBBE]"
                        >Alternativ 1
                        </button>

                        <button
                            type="button"
                            className="rounded-lg bg-[#C2D8DA] px-15 py-3 text-base font-bold text-[#214C50] shadow-sm hover:bg-[#9FBBBE]"
                        >Alternativ 2
                        </button>

                        <button
                            type="button"
                            className="rounded-lg bg-[#C2D8DA] px-15 py-3 text-base font-bold text-[#214C50] shadow-sm hover:bg-[##9FBBBE]"
                        >Alternativ 3
                        </button>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                 <div className="mt-12 flex justify-center">
                  <button className="rounded-md bg-[#214C50] px-8 py-3 text-white shadow hover:bg-[#122B2D]">
                    Sjekk svar
                  </button>
                </div>

                {/* Navigasjon */}
                <div className="mt-16 flex items-center justify-between">
                  <button className="rounded-xl bg-[#EBA65F] px-10 py-3 font-semibold shadow hover:bg-[#C28B53]">
                    Forrige
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

export default Quiz;
