import React from "react";
import TilbakeIkon from '../assets/ikoner/Tilbakepil.png'

function Tilbake({ children, onClick }) {
  return (
    <button
    onClick={onClick}
      className="flex flex-col items-center justify-center w-18 h-18 rounded-full bg-[#E69138] shadow-md hover:bg-[#FF9E38] transition mt-5">
        <img src={TilbakeIkon} alt="Tilbake" className="w-7 h-7 pt-1"/>
        <span className="text-white text-sm font-semibold pt-1">Tilbake</span>
      <div className="leading-tight">{children}</div>
    </button>
  );
}

export default Tilbake

