import { useState } from 'react'
import './Teknologier.css'
import CardButton from '../../components/Cardbutton'
import PrinterIkon from '../../assets/ikoner/3Dprinter.png'
import CNCfreserIkon from '../../assets/ikoner/CNCfreser.png'
import ElektronikkIkon from '../../assets/ikoner/Elektronikk.png'
import LaserkutterIkon from '../../assets/ikoner/Laserkutter.png'
import LoddeIkon from '../../assets/ikoner/Lodding.png'
import PodcastIkon from '../../assets/ikoner/Podcast.png'
import Tilbake from '../../components/Tilbake'

function Teknologier() {
  return (
    <div className="min-h-screen text-black flex flex-col bg-[#FFFCF8]">
      {/* HEADER */}
      <div className="bg-[#FFE8C2]">
        <div className="px-4 sm:px-10 pt-3 pb-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/*logo + tilbakeknapp */}
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#E69138] mt-2">
              SmartMaking
            </h1>
            <div className="text-base sm:text-lg text-black font-semibold">
              Høgskolen i Østfold: Halden
            </div>
            <div className="mt-2 flex justify-center sm:justify-start">
              <Tilbake />
            </div>
          </div>
        </div>
         {/*overskriften */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center pb-10">
            TEKNOLOGIER
          </h2>
      </div>

      {/* Innholdsknappene */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-10 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
          <CardButton>
            <img src={PrinterIkon} alt="3D printer ikon" className="w-24 h-24 mx-auto mb-5 mt-5" />
            <span className="block mb-6 text-center">3D-PRINTING</span>
          </CardButton>

          <CardButton>
            <img src={LaserkutterIkon} alt="Laserkutter ikon" className="w-24 h-24 mx-auto mb-5 mt-5" />
            <span className="block mb-6 text-center">LASERKUTTING</span>
          </CardButton>

          <CardButton>
            <img src={CNCfreserIkon} alt="CNC freser ikon" className="w-24 h-24 mx-auto mb-5 mt-5" />
            <span className="block mb-6 text-center">CNC-FRESING</span>
          </CardButton>

          <CardButton>
            <img src={ElektronikkIkon} alt="Elektronikk ikon" className="w-24 h-24 mx-auto mb-5 mt-5" />
            <span className="block mb-6 text-center">ELEKTRONIKK</span>
          </CardButton>

          <CardButton>
            <img src={LoddeIkon} alt="Lodding ikon" className="w-24 h-24 mx-auto mb-5 mt-5" />
            <span className="block mb-6 text-center">LODDING</span>
          </CardButton>

          <CardButton>
            <img src={PodcastIkon} alt="Podcast ikon" className="w-24 h-24 mx-auto mb-5 mt-5" />
            <span className="block mb-6 text-center">PODCAST</span>
          </CardButton>
        </div>
      </section>

      {/* Chatbotknappen */}
      <button
        className=" fixed bottom-4 right-4 rounded-2xl bg-[#9DDAEA] px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-lg font-bold shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:bg-[#AAE8F9]
          transition hover:shadow-[0_10px_26px_rgba(0,0,0,0.20)]"
      >Chatbot
      </button>
    </div>
  )
}

export default Teknologier
