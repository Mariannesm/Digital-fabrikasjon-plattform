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
      {/* Header og tittel-seksjon */}
    <div className="bg-[#F3DDB9] pb-4"> 
  
    {/* Header raden */} 
    <div className="px-6 sm:px-10 pt-3 pb-1 flex flex-col sm:flex-row sm:items-start sm:justify-between"> 
      
    {/* Logo, tekst og tilbakeknapp */} 
    <div> 
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#E69138]"> SmartMaking </h1> 
      <div className="text-sm sm:text-base text-black/80"> Høgskolen i Østfold: Halden </div> 
      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E69138] text-[#663500] shadow-md hover:bg-[#d8812c] transition mt-5"
      > ← </button> 
  </div> 
    </div> 
  
  {/* Overskriften */} 
  <div className="flex items-center justify-center py-6"> 
    <h2 className="text-5xl font-medium text-center text-[#663500]"> TEKNOLOGIER </h2> 
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