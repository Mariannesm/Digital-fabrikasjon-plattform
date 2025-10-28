import { useState } from 'react'
import './startside.css'
import CardButton from '../../components/Cardbutton'

function StartSide() {
  return (
    <>
    <div className="min-h-screen bg-[#f5e1c3] text-black flex flex-col pt-0">
      {/* Header */}
      <header className="mb-6 sm:mb-10 w-screen ml-[calc(50%-50vw)] pl-6 sm:pl-10 text-left">
        <h1 className="text-4xl sm:text-1xl font-extrabold tracking-tight text-[#E69138]">
          SmartMaking
        </h1>
        <select className="mt-3 inline-flex items-center gap-2 text-lg rounded-md px-1  
        hover:bg-black/5 transition focus:outline-none focus:ring-2 focus:ring-orange-400 font-semibold text-[#663500]">
        <option>Høgskolen i Østfold</option>
        <option>OsloMet</option>
      </select>
      </header>
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 place-content-center place-items-center mx-auto w-fit  mt-10 sm:mt-16">
        <CardButton>
          <span className="block">BRUK</span>
          <span className="block">TEKNOLOGIENE</span>
        </CardButton>

        <CardButton>
          <span className="block">LÆR OM</span>
          <span className="block">BÆREKRAFTIG</span>
          <span className="block">BRUK</span>
        </CardButton>

        <CardButton>
          <span className="block">HUSK</span>
          <span className="block">SIKKERHET!</span>
        </CardButton>

        <CardButton>
          <span className="block">PROSJEKTER</span>
        </CardButton>
      </section>

      {/* Chatbot-knapp */}
      <button
        className="fixed bottom-6 right-6 rounded-2xl bg-[#c9ddf4] px-5 py-3 text-sm font-medium
                   shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_26px_rgba(0,0,0,0.18)]
                   transition"
      >Chat
      </button>
    </div>
    </>
  )
}

export default StartSide;
