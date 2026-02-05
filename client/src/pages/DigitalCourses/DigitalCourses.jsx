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

      {/* Erstattes med API-kall 
      title
      icon {
        src
        alt
      }
      path
      */}

      <div className="mx-auto w-full max-w-6xl px-10 py-14">
        {/* Overskrifter (rad 1) */}
        <div className="grid grid-cols-2 gap-12 text-2xl">
          <h2 className="font-semibold">Informerende digitale kurs:</h2>
          <h2 className="font-semibold">Digitale kurs for ditt område:</h2>
        </div>

        {/* Kort (rad 2) - disse blir garantert på lik linje */}
        <div className="mt-6 grid grid-cols-2 gap-12 items-start">
          {/* VENSTRE: Informerende kurs */}
          <div className="flex items-center justify-between rounded-2xl bg-[#C2D8DA] px-6 py-5">
            <div className="flex items-center gap-4">
              {/* Ikon*/}
              <div className="flex h-12 w-12 items-center justify-center">
                <img src={PrinterIkon} alt="3D printer ikon"></img>
              </div>

              <h3 className="text-lg font-bold tracking-wide text-[#214C50]">
                SIKKERHET
              </h3>
            </div>
            <StartButton>Start</StartButton>
          </div>

          {/* HØYRE: Kurs for ditt område */}
          <div className="flex items-center justify-between rounded-2xl bg-[#C2D8DA] px-6 py-5">
            <div className="flex items-center gap-4">
              {/* Ikon*/}
              <div className="flex h-12 w-12 items-center justify-center">
                <img src={PrinterIkon} alt="3D printer ikon"></img>
              </div>

              <h3 className="text-lg font-bold tracking-wide text-[#214C50]">
                3D-MODELLERING
              </h3>
            </div>
            <StartButton>Start</StartButton>
          </div>
        </div>

        {/* Fysiske kurs (rad 3/4) */}
        <div className="mt-10 grid grid-cols-2 gap-12">
          <div>
            <h2 className="font-semibold text-2xl">Fysiske kurs for ditt område:</h2>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#C2D8DA] px-6 py-5">
              <h3 className="text-lg font-bold tracking-wide text-[#214C50]">
                OPPMELDING TIL KURS
              </h3>

              <StartButton>Gå</StartButton>
            </div>
          </div>

          {/* HØYRE kolonne tom med vilje for å beholde samme grid-oppsett */}
          <div />
        </div>
      </div>
    </MainWrapper>
  );
}

export default DigitalCourses;
