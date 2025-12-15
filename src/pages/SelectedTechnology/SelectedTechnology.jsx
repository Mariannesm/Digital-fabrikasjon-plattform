import "./SelectedTechnology.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import VersionTech from "../../components/VersionTech";



function SelectedTechnology() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="3D-PRINTING" showSelectInstitution={false} />
  

      {/* Erstattes med API-kall 
      title
      icon {
        src
        alt
      }
      path
      */}

      <h2 className="font-bold text-xl">Velg printeren du skal bruke</h2>


      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 place-items-center">
<VersionTech></VersionTech>
      </div>

      
    </MainWrapper>
  );
}

export default SelectedTechnology;
