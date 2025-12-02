import React from "react";

function Chatbot({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 rounded-2xl bg-[#214C50] px-5 py-3 text-lg font-bold text-white
                   shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:bg-[#488B90] transition hover:shadow-[0_10px_26px_rgba(0,0,0,0.20)]
                   transition"
    >
      <div className="leading-tight">{children}</div>
    </button>
  );
}

export default Chatbot;