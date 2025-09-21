import { useState } from 'react'
import './landingpage.css'
import { Route, Routes } from "react-router-dom";

function LandingPage() {
  return (
    <>
    <section className="flex flex-wrap justify-center w-200 h-100 m-auto">
    <div className="w-1/2 px-2 mb-4">
        <button className="bg-[#E69138] text-black p-4 rounded w-full h-full font-mono text-[25px] rounded-2xl drop-shadow-lg">Bruk teknologiene</button>
    </div>
    <div className="w-1/2 px-2 mb-4">
        <button className="bg-[#E69138] text-black p-4 rounded w-full h-full font-mono text-[25px] rounded-2xl drop-shadow-lg">Lær om bærekraftig bruk</button>
    </div>
    <div className="w-1/2 px-2 mb-4">
        <button className="bg-[#E69138] text-black p-4 rounded w-full h-full font-mono text-[25px] rounded-2xl drop-shadow-lg">Husk sikkerhet!</button>
    </div>
    <div className="w-1/2 px-2 mb-4">
        <button className="bg-[#E69138] text-black p-4 rounded w-full h-full font-mono text-[25px] rounded-2xl drop-shadow-lg">Prosjekter</button>
    </div>
    </section>
    </>
  )
}

export default LandingPage
