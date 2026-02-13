import './MenuPage.css'
import CardButton from '../../components/Cardbutton'
import MainWrapper from '../../components/MainWrapper';
import Header from '../../components/Header'
import { useNavigate } from "react-router-dom";
import Chatbot from '../../components/ChatBot';

function MenuPage() {
  let navigate = useNavigate()
  return (
    
    <MainWrapper classNames={"pt-0 bg-[#FFFCF8]"}>
      {/* Header */}
      <Header showSelectInstitution={true}></Header>

       {/* STØRRE BOKSER HER SER PÅ HIGHFI FIGMA */}
      <section
        className=" grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 place-content-center place-items-center mx-auto w-fit mt-10 sm:mt-16 sm:scale-110 lg:scale-125">
        <CardButton onClick={() => navigate('/technology')}>
          <span className="block">LÆR Å BRUK</span>
          <span className="block">TEKNOLOGIENE</span>
        </CardButton>

        <CardButton onClick={() => navigate('/AboutUs')}>
          <span className="block">OM OMRÅDET</span>
        </CardButton>

        <CardButton onClick={() => navigate('/courses')}>
          <span className="block">DIGITALE OG</span>
          <span className="block">FYSISKE KURS</span>
        </CardButton>

        <CardButton onClick={() => navigate('/projects')}>
          <span className="block">PROSJEKTER</span>
        </CardButton>
      </section>

      <Chatbot>
        Chatbot
      </Chatbot>
      
    </MainWrapper>
  )
}

export default MenuPage;
