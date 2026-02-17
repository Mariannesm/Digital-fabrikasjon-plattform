import React from "react";

function Chatbot({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 rounded-2xl bg-[#214C50] px-5 py-3 text-lg font-bold text-white
                   shadow-shadow-md hover:bg-[#488B90] focus:outline-none focus:ring-2 focus:ring-orange-400"
    >
      <div className="leading-tight">{children}</div>
    </button>
  );
}

export default Chatbot;