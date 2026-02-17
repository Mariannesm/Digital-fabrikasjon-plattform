import BackIcon from "../assets/ikoner/Tilbakepil.png";
import { useNavigate } from "react-router-dom";

function BackButton({ children }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleGoBack}
      className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-[#E69138] shadow-lg hover:bg-[#FF9E38] transition mt-5
      focus:outline-none focus:ring-2 focus:ring-[#488B90]"
    >
      <img src={BackIcon} alt="back" className="w-7 h-7 pt-1" />
      <span className="text-white text-sm font-semibold pt-1">Tilbake</span>
      <div className="leading-tight">{children}</div>
    </button>
  );
}

export default BackButton;
