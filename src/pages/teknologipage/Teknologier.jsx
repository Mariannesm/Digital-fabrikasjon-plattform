import { useState } from 'react'
import './Teknologier.css'
import CardButton from '../../components/Cardbutton'

function Startside() {
  return (
    <div className="min-h-screen bg-[#f5e1c3] text-black flex flex-col bg-white">
      <div className="px-6 sm:px-10 pt-3 pb-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#E69138]">
          SmartMaking
        </h1>
        <div className="text-sm sm:text-base text-black/80">Høgskolen i Østfold: Halden</div>
      </div>

      <div className="w-full bg-[#f3dfbf] shadow-sm">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-14 sm:h-16 px-6 sm:px-10">
          {/* Tilbakepila */}
          <button
            type="button"
            className="justify-self-start w-8 h-8 rounded-full flex items-center justify-center text-lg"
          > Tilbake ikon
          </button>

          <h2 className="justify-self-center text-xl sm:text-2xl font-semibold tracking-wide">
            TEKNOLOGIER
          </h2>
        </div>
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 sm:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-40 gap-y-20">
          <CardButton><span>3D-PRINTING</span></CardButton>
          <CardButton><span>LASERKUTTING</span></CardButton>
          <CardButton><span>CNC-FRESING</span></CardButton>
          <CardButton><span>ELEKTRONIKK</span></CardButton>
          <CardButton><span>LODDING</span></CardButton>
          <CardButton><span>PODCAST</span></CardButton>
        </div>
      </section>
    </div>
  );
}

export default Startside