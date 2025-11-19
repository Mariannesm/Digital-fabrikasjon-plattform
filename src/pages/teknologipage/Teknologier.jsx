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
    <div className="min-h-screen text-black flex flex-col bg-[#FFFCF8]">
    <div className="bg-[#FFE8C2] pb-4"> 
  
    {/* Headerærn */} 
    <div className="px-6 sm:px-10 pt-3 pb-1 flex flex-col sm:flex-row sm:items-start sm:justify-between"> 
      
    {/*tekst og tilbakeknapp */} 
    <div> 
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#E69138]"> SmartMaking </h1> 
      <div className="text-sm sm:text-base text-black/80"> Høgskolen i Østfold: Halden </div> 
      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E69138] shadow-md hover:bg-[#d8812c] transition mt-5"
      > ← </button> 
  </div> 
    </div> 
  
  {/* Overskriften */} 
  <div className="flex items-center justify-center py-6"> 
    <h2 className="text-5xl font-medium text-center"> TEKNOLOGIER </h2> 
 </div> 
</div>
      <section className="mx-auto w-full max-w-6xl px-6 sm:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-60 gap-y-20 justify-items-center" >
          <CardButton>
            <img src={PrinterIkon} alt="3D printer ikon" className="w-30 h-30 mx-auto mb-5 mt-5"/>
            <span className="block mb-10">3D-PRINTING</span>
        </CardButton>
        <CardButton>
            <img src={LaserkutterIkon} alt="3D printer ikon" className="w-30 h-30 mx-auto mb-5 mt-5"/>
            <span className="block mb-10">LASERKUTTING</span>
        </CardButton>
        <CardButton>
            <img src={CNCfreserIkon} alt="3D printer ikon" className="w-30 h-30 mx-auto mb-5 mt-5"/>
            <span className="block mb-10">CNC-FRESING</span>
        </CardButton>
        <CardButton>
            <img src={ElektronikkIkon} alt="3D printer ikon" className="w-30 h-30 mx-auto mb-5 mt-5"/>
            <span className="block mb-10">ELEKTRONIKK</span>
        </CardButton>
        <CardButton>
            <img src={LoddeIkon} alt="3D printer ikon" className="w-30 h-30 mx-auto mb-5 mt-5"/>
            <span className="block mb-10">LODDING</span>
        </CardButton>
        <CardButton>
            <img src={PodcastIkon} alt="3D printer ikon" className="w-28 h-30 mx-auto mb-5 mt-5"/>
            <span className="block mb-10">PODCAST</span>
        </CardButton>
        </div>
      </section>
        <button
        className="fixed bottom-6 right-6 rounded-2xl bg-[#9DDAEA] px-5 py-3 text-lg font-bold
                   shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:bg-[#AAE8F9] transition hover:shadow-[0_10px_26px_rgba(0,0,0,0.20)]
                   transition"
        > Chatbot
        </button>

    </div>
  );
}

export default Teknolgier;