import React from "react";
import Printer from "../assets/ikoner/Printer.png"


function VersionTech() {
  return (


  <div className="flex flex-col w-90 h- rounded-xl border border-[#488B90] bg-white shadow-sm">

  <div className="h-50  rounded-t-xl bg-[#488B90] flex items-center justify-center">
    <img className="pb-2 pt-2 w-25 h-45" src={Printer} alt="Bilde av Prusa MK4S"></img>
  </div>

  <div className="text-left p-7">
  <h3 className="font-semibold pb-5">Original Prusa MK4S</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>

    <div className="mt-4 align-items-end gap-20 flex-col flex">
     <button className="flex-0 bg-[#214C50] rounded-2xl px-5 py-3 mb-4 text-lg text-white font-semibold shadow-md hover:bg-[#488B90]">Velg</button>
    </div>
</div>

  );
}

export default VersionTech;