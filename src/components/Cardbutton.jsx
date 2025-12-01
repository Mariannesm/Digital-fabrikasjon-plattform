import React from "react";

function CardButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-[300px] h-[180px] sm:w-[360px] sm:h-[210px]
                 rounded-[28px] bg-[#e3a15e]
                 shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                 hover:shadow-[0_16px_36px_rgba(0,0,0,0.22)]
                 transition-transform duration-200 hover:-translate-y-0.5
                 grid place-items-center text-center
                 uppercase tracking-wide text-xl sm:text-2xl font-bold
                 hover:bg-[#FF9E38] text-black"
    >
      <div className="leading-tight">{children}</div>
    </button>
  );
}

export default CardButton;
