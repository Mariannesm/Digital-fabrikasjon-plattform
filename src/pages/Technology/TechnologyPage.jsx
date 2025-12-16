import "./TechnologyPage.css";
import { useNavigate } from "react-router-dom";
import CardButton from "../../components/Cardbutton";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import PrinterIkon from "../../assets/ikoner/3Dprinter.png";
import CNCfreserIkon from "../../assets/ikoner/CNCfreser.png";
import ElektronikkIkon from "../../assets/ikoner/Elektronikk.png";
import LaserkutterIkon from "../../assets/ikoner/Laserkutter.png";
import LoddeIkon from "../../assets/ikoner/Lodding.png";
import Chatbot from "../../components/ChatBot";
import Vinylkutter from "../../assets/ikoner/VinylKutter.png";

function TechnologyPage() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="TEKNOLOGIER" showSelectInstitution={false} />

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

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-50 gap-y-15 justify-items-center">
          <CardButton onClick={() => navigate('/select')} >
            <img
              src={PrinterIkon}
              alt="3D printer ikon"
              className="w-24 h-24 mx-auto mb-5 mt-5"
            />
            <span className="block mb-6 text-center">3D-PRINTING</span>
          </CardButton>

          <CardButton>
            <img
              src={LaserkutterIkon}
              alt="Laserkutter ikon"
              className="w-24 h-24 mx-auto mb-5 mt-5"
            />
            <span className="block mb-6 text-center">LASERKUTTING</span>
          </CardButton>

          <CardButton>
            <img
              src={CNCfreserIkon}
              alt="CNC freser ikon"
              className="w-24 h-24 mx-auto mb-5 mt-5"
            />
            <span className="block mb-6 text-center">CNC-FRESING</span>
          </CardButton>

          <CardButton>
            <img
              src={ElektronikkIkon}
              alt="Elektronikk ikon"
              className="w-24 h-24 mx-auto mb-5 mt-5"
            />
            <span className="block mb-6 text-center">ELEKTRONIKK</span>
          </CardButton>

          <CardButton>
            <img
              src={LoddeIkon}
              alt="Lodding ikon"
              className="w-24 h-24 mx-auto mb-5 mt-5"
            />
            <span className="block mb-6 text-center">LODDING</span>
          </CardButton>

          <CardButton>
            <img
              src={Vinylkutter}
              alt="Podcast ikon"
              className="w-24 h-24 mx-auto mb-5 mt-5"
            />
            <span className="block mb-6 text-center">VINYLKUTTING</span>
          </CardButton>

           <CardButton>
            <img
              src={Vinylkutter}
              alt="Podcast ikon"
              className="w-24 h-24 mx-auto mb-5 mt-5"
            />
            <span className="block mb-6 text-center">T-SKJORTE PRINT</span>
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
