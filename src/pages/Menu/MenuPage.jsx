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
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 place-content-center place-items-center mx-auto w-fit  mt-10 sm:mt-16">
        <CardButton onClick={() => navigate('/technology')}>
          <span className="block">BRUK</span>
          <span className="block">TEKNOLOGIENE</span>
        </CardButton>

        <CardButton>
          <span className="block">KOM I GANG MED</span>
          <span className="block">ET PROSJEKT</span>
        </CardButton>

        <CardButton>
          <span className="block">DIGITALE KURS</span>
        </CardButton>

        <CardButton>
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
