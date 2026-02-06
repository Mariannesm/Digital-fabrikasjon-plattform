import "./SelectedTechnology.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import VersionTech from "../../components/VersionTech";

function SelectedTechnology() {

  const printers = [
    { title: "Original Prusa MK4S", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Original Prusa MINI", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit." },

  ]

  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="3D-PRINTIG" showSelectInstitution={false} />


      {/* Erstattes med API-kall 
      title
      icon {
        src
        alt
      }
      path
      */}

      <h2 className="font-bold text-xl mt-5">Velg printeren du skal bruke</h2>

     <div className="mt-6 flex flex-wrap justify-center gap-6 lg:gap-10 px-4">
    {printers.map((card) => (
    <VersionTech key={card.title} data={card} />))}
    </div>


    </MainWrapper>
  );
}

export default SelectedTechnology;
