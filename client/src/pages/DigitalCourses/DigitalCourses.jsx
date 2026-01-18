import "./DigitalCourses.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import StartButton from "../../components/StartButton";
import PrinterIkon from "../../assets/ikoner/3Dprinter.png";

function DigitalCourses() {

  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="DIGITALE KURS" showSelectInstitution={false} />


      {/* Erstattes med API-kall 
      title
      icon {
        src
        alt
      }
      path
      */}

    <div className="mx-auto w-full max-w-6xl px-10 py-14">
        {/* Overskrifter */}
        <div className="grid grid-cols-2 gap-12 text-2xl">
          <h2 className="font-semibold">Informerende kurs:</h2>
          <h2 className="font-semibold">Kurs for ditt område:</h2>
        </div>

     {/* Kolonner */}
        <div className="mt-10 grid grid-cols-2 gap-30 items-start">
          {/* VENSTRE: Informerende kurs */}
          <div>
            {/* Boks 1 */}
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
          </div>

          {/* HØYRE: Kurs for ditt område (tom foreløpig) */}
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
          <div />
        </div>
      </div>

    </MainWrapper>
  );
}

export default DigitalCourses;
