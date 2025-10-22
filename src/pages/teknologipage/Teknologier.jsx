import { useState } from 'react'
import './Teknologier.css'
import CardButton from '../../components/Cardbutton'
import PrinterIkon from '../../assets/ikoner/3Dprinter.png';
import CNCfreserIkon from '../../assets/ikoner/CNCfreser.png'
import ElektronikkIkon from '../../assets/ikoner/Elektronikk.png'
import LaserkutterIkon from '../../assets/ikoner/Laserkutter.png'
import LoddeIkon from '../../assets/ikoner/Lodding.png'
import PodcastIkon from '../../assets/ikoner/Podcast.png'


function Teknolgier() {
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

          <h2 className="justify-self-center text-xl sm:text-2xl font-semibold tracking-wide text-[#663500]">
            TEKNOLOGIER
          </h2>
        </div>
      </div>

      <section className="mx-auto w-full max-w-6xl px-6 sm:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-60 gap-y-20" >
          <CardButton>
            <img src={PrinterIkon} alt="3D printer ikon" className="w-30 h-30 mx-auto mb-5 mt-5"/>
            <span className="block">3D-PRINTING</span>
        </CardButton>
        <CardButton>
            <img src={LaserkutterIkon} alt="3D printer ikon" className="w-30 h-30 mx-auto mb-5 mt-5"/>
            <span className="block">LASERKUTTING</span>
        </CardButton>
        <CardButton>
            <img src={CNCfreserIkon} alt="3D printer ikon" className="w-30 h-30 mx-auto mb-5 mt-5"/>
            <span className="block">CNC-FRESING</span>
        </CardButton>
        <CardButton>
            <img src={ElektronikkIkon} alt="3D printer ikon" className="w-30 h-30 mx-auto mb-5 mt-5"/>
            <span className="block">ELEKTRONIKK</span>
        </CardButton>
        <CardButton>
            <img src={LoddeIkon} alt="3D printer ikon" className="w-30 h-30 mx-auto mb-5 mt-5"/>
            <span className="block">LODDING</span>
        </CardButton>
        <CardButton>
            <img src={PodcastIkon} alt="3D printer ikon" className="w-28 h-30 mx-auto mb-5 mt-5"/>
            <span className="block">PODCAST</span>
        </CardButton>
        </div>
      </section>
    </div>
  );
}

export default Teknolgier;