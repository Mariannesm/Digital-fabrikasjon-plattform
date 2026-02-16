import "./DigitalCourses.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import StartButton from "../../components/StartButton";
import PrinterIkon from "../../assets/ikoner/3Dprinter.png";

function DigitalCourses() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="KURS" showSelectInstitution={false} />

      <div className="mx-auto w-full max-w-6xl px-10 py-14">
        {/* Digitale kurs */}
        <p className="grid grid-cols-1 text-center text-lg font-medium text-black mb-3 text-left">
       Her kan du gjennomføre ulike digitale kurs, i tillegg til å melde deg opp til fysiske kurs. 
       Et av de digitale kursene er obligatoriske, mens de andre er anbefalt å fullføre før bruk av teknologiene.</p>
       <br/>
       <p className="grid grid-cols-1 text-center text-lg font-medium text-black mb-15 text-left">Anbefalt opplæring: gjennomfør det digitale kurset før et fysisk kurs.</p>

        <div className="grid grid-cols-1 gap-30 md:grid-cols-2">
          {/* VENSTRE */}
          <div>
            <h2 className="text-xl font-bold">
              Digitale obligatoriske kurs:
            </h2>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#C2D8DA] px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center">
                  <img src={PrinterIkon} alt="3D printer ikon" />
                </div>

                <h3 className="text-lg font-bold tracking-wide text-[#214C50]">
                  SIKKERHET
                </h3>
              </div>

              <StartButton>Start</StartButton>
            </div>
          </div>

          {/* HØYRE */}
          <div>
            <h2 className="text-xl font-bold">
              Digitale kurs for ditt område:
            </h2>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#C2D8DA] px-6 py-5 ">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center">
                  <img src={PrinterIkon} alt="3D printer ikon" />
                </div>

                <h3 className="text-lg font-bold tracking-wide text-[#214C50]">
                  3D-MODELLERING
                </h3>
              </div>

              <StartButton>Start</StartButton>
            </div>
          </div>
        </div>

        {/* Fysiske kurs */}
        <div className="mt-10 grid grid-cols-1 gap-30 md:grid-cols-2">
          <div>
            <h2 className="text-xl  font-bold">
              Fysiske kurs for ditt område:
            </h2>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#C2D8DA] px-6 py-5">
              <h3 className="text-lg font-bold tracking-wide text-[#214C50]">
                OPPMELDING TIL KURS
              </h3>

              <StartButton>Gå</StartButton>
            </div>
          </div>

          {/* Tom høyre kolonne på desktop kanskje gjør dette på en bedre måte??*/}
          <div className="hidden md:block" />
        </div>
      </div>
    </MainWrapper>
  );
}

export default DigitalCourses;
