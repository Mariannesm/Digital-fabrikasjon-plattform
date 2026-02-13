import './Projects.css'
import CardButton from '../../components/Cardbutton'
import MainWrapper from '../../components/MainWrapper';
import Header from '../../components/Header'
import { useNavigate } from "react-router-dom";

function Projects() {
  let navigate = useNavigate()
  return (
    
    <MainWrapper classNames={"pt-0 bg-[#FFFCF8]"}>
      {/* Header */}
      <Header title='PROSJEKTER' showSelectInstitution={true}></Header>
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 place-content-center place-items-center mx-auto w-fit  mt-10 sm:mt-16">

        <CardButton>
          <span className="block">VEILEDNING TIL</span>
          <span className="block">NYTT PROSJEKT</span>
        </CardButton>


        <CardButton>
          <span className="block">SE EKSISTERNDE</span>
          <span className="block">PROSJEKTER</span>
        </CardButton>

        <CardButton onClick={() => navigate('/register')}>
          <span className="block">REGISTRER DITT</span>
          <span className="block">PROSJEKT</span>
        </CardButton>

        <CardButton onClick={() => navigate('/login')}>
          <span className="block">OPPDATER DITT</span>
          <span className="block">PROSJEKT</span>
        </CardButton>
        
      </section>

      
    </MainWrapper>
  )
}

export default Projects;