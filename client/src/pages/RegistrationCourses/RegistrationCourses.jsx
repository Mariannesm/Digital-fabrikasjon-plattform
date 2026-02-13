import "./RegistrationCourses.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import Printer from "../../assets/ikoner/Printer.png";

function RegistrationCourses() {
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
                {/* Skal kunne endre tittel */}
                <h2 className="font-bold text-2xl">Vårsemester 2026</h2>
              </div>

              {/*  */}
              <nav className="w-full space-y-6">
                <button className="w-full bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                  MakerSpace Monday
                </button>

                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                  3D-modellering
                </button>

                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                  3D-printing
                </button>

                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                  Laserkutting
                </button>
                
                 <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                  Vinylkutting
                </button>

                 <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                  T-skjortetrykking
                </button>

                 <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                  Kopptrykking
                </button>

                 <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                  Lodding
                </button>
              </nav>
            </aside>

            {/* Høyre seksjon */}
            <div className="w-full pr-15">
              <section className="w-full max-w-7xl mr-auto ml-4 rounded-2xl bg-white p-12 shadow-lg">
                
                <div className="flex flex-col gap-2 text-left">
             {/* Tittel endres til hvilket kurs du trykker på*/}
                  <h2 className="font-bold text-2xl">MakerSpace Monday</h2>
                  <span className="h-1 w-full bg-[#488B90]" />
                </div>

                <div className="mt-6 text-left text-base font-semibold text-black">
                  <p className="mb-6">I dette kurset går vi gjennom bla bla bla </p>
                  <ul>
                    <li className="mb-5">Dato: 05.02.2025</li>
                    <li className="mb-5">Klokken: 16:30 til 18:30</li>
                  </ul>
                </div>

                 {/* Kan legge til lenke selv på knappen til nettskjema påmeldingskjema og den er ulik fra kurs til kurs*/}
                <div className="mt-12 flex justify-center">
                  <button onClick={() => window.open("https://nettskjema.no/", "_blank", "noopener,noreferrer")} className="rounded-md bg-[#214C50] px-8 py-3 text-white shadow hover:bg-[#122B2D]">
                    Meld deg på her gjennom Nettskjema
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

export default RegistrationCourses;
