import "./TechnologyPage.css";
import { useNavigate } from "react-router-dom";
import CardButton from "../../components/Cardbutton";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import PrinterIkon from "../../assets/ikoner/3Dprinter.png";
import CNCfreserIkon from "../../assets/ikoner/CNCfreser.png";
import ElektronikkIkon from "../../assets/ikoner/Elektronikk.png";
import LaserkutterIkon from "../../assets/ikoner/Laserkutter.png";
import Chatbot from "../../components/ChatBot";
import Vinylkutter from "../../assets/ikoner/VinylKutter.png";
import AirBrushing from "../../assets/ikoner/AirBrushing.png";
import StorPrinter from "../../assets/Bilder/StorPrinter.png"

function TechnologyPage() {
    let navigate = useNavigate()
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="LÆR Å BRUK TEKNOLOGIENE" showSelectInstitution={false} />

      {/* Innholdsknappene */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-10 py-8 sm:py-10">

      {/* Erstattes med API-kall 
      title
      icon {
        src
        alt
      }
      path
      */}

      <h2 className="mb-15 text-2xl">Teknologier ved ditt valgte område</h2>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-50 gap-y-15 justify-items-center">
          <CardButton onClick={() => navigate('/select')} >
            <img
              src={PrinterIkon}
              alt="" aria-hidden="true"
              className="w-24 h-24 mx-auto mb-5 mt-5"
            />
            <span className="block mb-6 text-center">3D-PRINTING</span>
          </CardButton>

          <CardButton>
            <img
              src={LaserkutterIkon}
              alt="" aria-hidden="true"
              className="w-24 h-24 mx-auto mb-5 mt-5"
            />
            <span className="block mb-6 text-center">LASERKUTTING</span>
          </CardButton>

          <CardButton>
            <img
              src={CNCfreserIkon}
              alt="" aria-hidden="true"
              className="w-24 h-24 mx-auto mb-5 mt-5"
            />
            <span className="block mb-6 text-center">CNC-FRESING</span>
          </CardButton>

          <CardButton>
            <img
              src={ElektronikkIkon}
              alt="" aria-hidden="true"
              className="w-24 h-24 mx-auto mb-5 mt-5"
            />
            <span className="block mb-6 text-center">ELEKTRONIKK</span>
          </CardButton>

          <CardButton>
            <img
              src={Vinylkutter}
              alt="" aria-hidden="true"
              className="w-24 h-24 mx-auto mb-5 mt-5"
            />
            <span className="block mb-6 text-center">TRYKK & PROFILERING</span>
          </CardButton>

          
           <CardButton>
            <img
              src={AirBrushing}
              alt="" aria-hidden="true"
              className="w-24 h-24 mx-auto mb-5 mt-5"
            />
            <span className="block mb-6 text-center">AIRBRUSHING</span>
          </CardButton>

           <CardButton>
            <img
              src={StorPrinter}
              alt="" aria-hidden="true"
              className="w-24 h-24 mx-auto mb-5 mt-5"
            />
            <span className="block mb-6 text-center">PLAKAT PRINTING</span>
          </CardButton>


        </div>
      </section>

      <Chatbot>
        Chatbot
      </Chatbot>
      
    </MainWrapper>
  );
}

export default TechnologyPage;
