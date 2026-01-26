import React from "react";

function StartButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-2xl bg-[#214C50] px-5 py-3 text-lg font-bold text-white shadow-md hover:bg-[#488B90]"
    >
      <span className="leading-tight">{children}</span>
    </button>
  );
}

export default StartButton;