import { useState } from 'react'
import './startside.css'
import CardButton from '../../components/Cardbutton'

function LandingPage() {
  return (
    <>
    <div className="min-h-screen bg-[#f5e1c3] text-black flex flex-col p-6 sm:p-10">
      {/* Header */}
      <header className="mb-6 sm:mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#E69138]">
          SmartMaking
        </h1>
        <select className="group mt-1 inline-flex items-center gap-2 text-l sm text-black-700/90 rounded-md px-1 -ml-1 hover:bg-black/5 transition
        focus:outline-none focus:ring-2 focus:ring-orange-400 mt-10">
        <option>Høgskolen i Østfold</option>
        <option>OsloMet</option>
      </select>
      </header>
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 place-items-center w-full max-w-6xl"
      >
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
      >
        Chatbot
      </button>
    </div>
    </>
  )
}

export default LandingPage
