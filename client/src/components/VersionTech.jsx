import React from "react";
import Printer from "../assets/ikoner/Printer.png"


function VersionTech({data}) {
  return (
    <div className="flex flex-col w-90  rounded-xl border border-[#488B90] bg-white shadow-sm overflow-hidden mt-20">

      <div className="h-50 bg-[#488B90] flex items-center justify-center">
        <img className="pb-2 pt-2 w-25 h-45" src={Printer} alt="Bilde av Prusa MK4S"></img>
      </div>

      <div className="text-left p-7">
        <h3 className="font-semibold pb-5">{data?.title}</h3>
        <p>{data?.description}</p>
      </div>

      <div className="mt-auto flex flex-col p-3">
        <button className="self-end bg-[#214C50] rounded-2xl px-5 py-3 mb-4 text-lg text-white font-semibold shadow-md hover:bg-[#488B90]">Velg</button>
      </div>
    </div>

  );
}

export default VersionTech;