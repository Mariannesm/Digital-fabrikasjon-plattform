import "./SelectedTechnology.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import VersionTech from "../../components/VersionTech";

function SelectedTechnology() {

  const printers = [
    { title: "Original Prusa MK4S", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Original Prusa MK2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit." },

  ]

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

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 place-items-center items-stretch">
        {printers.map((card) => {
          return <VersionTech data={card} />
        })}
      </div>


    </MainWrapper>
  );
}

export default SelectedTechnology;
