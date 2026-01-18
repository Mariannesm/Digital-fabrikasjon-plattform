import MainWrapper from "../../components/MainWrapper";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  let navigate = useNavigate();
  return (
    <MainWrapper classNames="items-center justify-center bg-[#FFE8C2]">
      <h1 className="text-9xl font-extrabold text-[#E69138] mb-20">
        SmartMaking
      </h1>
      <div className="relative">
        <select className="text-lg w-64 px-5 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400">
          <option>Velg område</option>
          <option>Høgskolen i Østfold</option>
          <option>OsloMet</option>
        </select>
      </div>
      <button
        onClick={() => navigate("/menu")}
        className="w-64 px-5 py-3 rounded-lg bg-[#E69138] text-black text-xl font-bold shadow-ml focus:outline-none focus:ring-2 focus:ring-orange-400 mt-10 hover:bg-orange-400"
      >
        Gå videre
      </button>
    </MainWrapper>
  );
}

export default LandingPage;
