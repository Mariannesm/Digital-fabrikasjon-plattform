import "./RegisterQuiz.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";


function RegisterQuiz() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="KURS OM BÆREKRAFTIG BRUK" showSelectInstitution={false} />

      <section className="flex-1">
        {/* Samme wrapper som GuidePage */}
        <div className="w-full px-4 py-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[420px_1fr]">
            {/* Venstre kolonne  MELLE OPP TIL FYSISK KURS PÅ STANDEN?? */}
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
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  4. Etterbehandling
                </button>
              </nav>
            </aside>

            {/* Høyre seksjon */}
            <div className="w-full pr-15">
              <section className="w-full max-w-7xl mr-auto rounded-2xl bg-white p-12 shadow-lg text-left">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold">Registering</h2>
                  <span className="h-1 w-full bg-[#488B90]" />
                </div>

                {/* Register email*/}
                <div className="mt-10 max-w-xl">
                <p className="text-black text-base lg:whitespace-nowrap">
                    For å kunne vite at du har fullført kurset er det viktig at du registrerer din skolemail
                </p>

                <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className="text-black text-lg font-semibold whitespace-nowrap">
                    Skolemail:
                    </label>

                    <input
                    type="email"
                    className="w-full rounded-md bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-[#488B90]"
                    />
                </div>
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

export default RegisterQuiz;
