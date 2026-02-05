import "./RegistrationCourses.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";


function RegistrationCourses() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="FILAMENT VED DITT OMRÅDE" showSelectInstitution={false} />

    </MainWrapper>
  );
}

export default RegistrationCourses;
