import './MenuPage.css'
import CardButton from '../../components/Cardbutton'
import MainWrapper from '../../components/MainWrapper';
import Header from '../../components/Header'
import { useNavigate } from "react-router-dom";

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
          <span className="block">LÆR OM</span>
          <span className="block">BÆREKRAFTIG</span>
          <span className="block">BRUK</span>
        </CardButton>

        <CardButton>
          <span className="block">HUSK</span>
          <span className="block">SIKKERHET!</span>
        </CardButton>

        <CardButton>
          <span className="block">PROSJEKTER</span>
        </CardButton>
      </section>

      {/* Chatbot-knapp */}
      <button
        className="fixed bottom-6 right-6 rounded-2xl bg-[#9DDAEA] px-5 py-3 text-lg font-bold
                   shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:bg-[#AAE8F9] transition hover:shadow-[0_10px_26px_rgba(0,0,0,0.20)]
                   transition"
      > Chatbot
      </button>
    </MainWrapper>
  )
}

export default MenuPage;
