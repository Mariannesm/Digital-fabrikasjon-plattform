import "./RegisterQuiz.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import PrinterIkon from "../../assets/ikoner/3Dprinter.png";
import StartButton from "../../components/StartButton";


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
                   Hva er bærekraft?
                </button>
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  Bærekraftig bruk
                </button>
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  Resirkulering og gjenbruk
                </button>
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  Quiz
                </button>
                <button className="w-full bg-[#214C50] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg font-semibold">
                  Registrering
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
                <p className="text-black text-lg font-normal lg:whitespace-nowrap">
                    For at ansvarlige kan vite at du har fullført kurset er det viktig at du registrerer din skolemail
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

                <p className="mt-15 text-black text-lg font-normal lg:whitespace-nowrap">Ved feilskrevet mail, ta fysisk kontakt med de ansatte eller bruk kontaktinformasjonen som du finner på linken under.</p>

                <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#C2D8DA] px-4 py-3 max-w-xl">
                <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center">
                  <img src={PrinterIkon} alt="3D printer ikon" />
                </div>
                <h3 className="text-lg font-semibold tracking-wide text-[#214C50]">
                  Finn kontaktinformasjon her 
                </h3>
              </div>
              <StartButton>Gå</StartButton>
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
