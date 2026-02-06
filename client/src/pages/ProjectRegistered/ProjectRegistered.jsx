import './ProjectRegistered.css'
import MainWrapper from '../../components/MainWrapper';
import Header from '../../components/Header'
import { useNavigate } from "react-router-dom"
import StartButton from '../../components/StartButton'

function ProjectRegistered() {
  const navigate = useNavigate()

  return (
    <MainWrapper classNames={"pt-0 bg-[#FFFCF8] min-h-screen flex flex-col"}>
      
      {/* Header */}
      <Header 
        title='REGISTRER ET PROSJEKT' 
        showSelectInstitution={true} 
      />

      <div className="flex flex-1 flex-col items-center justify-center text-center px-4">

        <p className='text-black font-bold text-lg mb-10'>
          Prosjektet ditt er registrert!
        </p>

        <div className="flex flex-col gap-8 w-full max-w-xs ">
          <StartButton onClick={() => navigate('/login')}>
            Logg inn på prosjektet
          </StartButton>

          <StartButton onClick={() => navigate('/projects')}>
            Gå tilbake til prosjektsiden
          </StartButton>
        </div>

      </div>

    </MainWrapper>
  )
}

export default ProjectRegistered;
