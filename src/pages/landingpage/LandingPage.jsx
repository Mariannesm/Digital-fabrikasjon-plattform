import { useState } from 'react'
import './landingpage.css'
import { Route, Routes } from "react-router-dom";

function LandingPage() {
  return (
    <>
    <section className="w-200 h-150 flex flex-wrap -mx-2">
    <div className="w-1/2 px-2 mb-4">
        <button className="bg-[#E69138] text-black p-4 rounded w-full h-full ">Bruk teknologiene</button>
    </div>
    <div className="w-1/2 px-2 mb-4">
        <button className="bg-[#E69138] text-black p-4 rounded w-full h-full">Lær om bærekraftig bruk</button>
    </div>
    <div className="w-1/2 px-2 mb-4">
        <button className="bg-[#E69138] text-black p-4 rounded w-full h-full">Husk sikkerhet!</button>
    </div>
    <div className="w-1/2 px-2 mb-4">
        <button className="bg-[#E69138] text-black p-4 rounded w-full h-full">Prosjekter</button>
    </div>
    </section>
    </>
  )
}

export default LandingPage
