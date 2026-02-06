import "./GuideStep3.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import Printer from "../../assets/ikoner/Printer.png";
import PrinterSteg2 from "../../assets/Bilder/PrinterSteg2.png"
import GuidePil from "../../assets/ikoner/GuidePil.png"
import Steg1Display from "../../assets/Bilder/Steg1Display.png"
import Steg2Display from "../../assets/Bilder/Steg2Display.png"
import Steg3Display from "../../assets/Bilder/Steg3Display.png"
import Steg4Display from "../../assets/Bilder/Steg4Display.png"
import Steg41Display from "../../assets/Bilder/Steg41Display.png"

function GuideStep3() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      <Header title="ORIGINAL PRUSA MK4S" showSelectInstitution={false} />

      <section className="flex-1">
        <div className="w-full px-4 py-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[420px_1fr]">

            {/* VENSTRE */}
            <aside className="flex flex-col items-start self-start top-6 z-10">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-24 w-1 bg-[#488B90]" />
                <img
                  src={Printer}
                  alt="3D-printer"
                  className="h-24 w-24 object-contain opacity-80"
                />
              </div>

              {/* NAVIGASJON SÅNN DEN SKAL SE UT NÅR MAN TRYKKER MED FLERE STEG UNDER */}
              <nav className="w-full">


                <div className="mt-6 space-y-6">
                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                    1. Lag modellen
                  </button>

                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                    4. Forbered printen
                  </button>

                  <div className="flex flex-col ">
                  <button className="w-full bg-[#214C50] px-8 py-6 text-semibold text-left font-semibold text-lg text-white mb-2 ">
                    3. Print
                  </button>

                  <button className="w-full bg-[#214C50] hover:bg-[#122B2D] px-8 py-6 text-left text-lg text-white pl-12 ">
                    3.1 Desinfisering
                  </button>

                   <button className="w-full bg-[#214C50] hover:bg-[#122B2D] px-8 py-6 text-left font-semibold text-lg text-white pl-12 ">
                    3.2 Filamentrull
                  </button>

                  <button className="w-full bg-[#214C50] hover:bg-[#122B2D] px-8 py-6 text-left text-lg text-white pl-12">
                    3.3 Minnepenn
                  </button>
                </div>
                
                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white">
                    4. Etterbehandling
                  </button>

                </div>

              </nav>
            </aside>

            {/* HØYRE tenker at i tilegg til tekstlig innhold og bilder, at det kan være mulig å linke til videor som f.eks fra youtube? eller legge inn video?*/}
            <div className="w-full pr-15">
              <section className="w-full max-w-7xl mr-auto min-h-[420px] rounded-2xl bg-white p-12 shadow-lg text-left flex flex-col">

                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold">Steg 3. Print</h2>
                  <span className="h-1 w-full bg-[#488B90]" />
                </div>

               <div className="mt-10 flex flex-col items-center text-center">

                {/* Printer MIDT */}
                <img
                    src={PrinterSteg2}
                    alt="Printer"
                    className="w-[320px] mb-8"
                />

                {/* Tittel VENSTRE */}
                <h3 className="self-start text-left text-lg font-bold text-[#E67E22] mb-4 ml-10 mt-10">
                    1. Filamentrull
                </h3>

                {/* Knapper MIDT */}
                <div className="flex gap-4 mb-8 self-start ml-10 ">
                    <button className="bg-[#EBA65F] hover:bg-[#C28B53] px-15 py-3 rounded-lg font-semibold transition text-white">
                    Laste inn filament
                    </button>

                    <button className="border-2 border-[#EBA65F] text-[#EBA65F] hover:bg-[#FFF3E6] px-15 py-3 rounded-lg font-semibold transition">
                    Ta ut filament
                    </button>
                </div>

                {/* Tekst VENSTRE */}
                <div className="self-start text-left space-y-3 text-base ml-10">

                    <div className="flex items-start gap-3">
                    <img src={GuidePil} alt="" className="w-4 mt-1" />
                    <p>Heng på valgt filamentrull</p>
                    </div>

                    <div className="flex items-start gap-3">
                    <img src={GuidePil} alt="" className="w-4 mt-1" />
                    <p>Klipp av enden på filamentet slik at den blir spiss, om det trengs</p>
                    </div>

                    <div className="flex items-start gap-3">
                    <img src={GuidePil} alt="" className="w-4 mt-1" />
                    <p>Velg <span className="font-semibold tracking-wide">FILAMENT</span> på displayet:</p>
                    </div>

                    <div className="flex items-start gap-3 mb-10">
                    <img src={Steg1Display} alt="" className="w-auto mt-1" />
                    </div>

                    <div className="flex items-start gap-3">
                    <img src={GuidePil} alt="" className="w-4 mt-1" />
                    <p> Så <span className="font-semibold tracking-wide">LOAD FILAMENT</span>:</p>
                    </div>

                    <div className="flex items-start gap-3 mb-10">
                    <img src={Steg2Display} alt="" className="w-auto mt-1" />
                    </div>

                    <div className="flex items-start gap-3">
                    <img src={GuidePil} alt="" className="w-4 mt-1" />
                    <p> Så velg materialet:</p>
                    </div>

                    <div className="flex items-start gap-3">
                    <img src={Steg3Display} alt="" className="w-auto mt-1 mb-10" />
                    </div>

                    <div className="flex items-start gap-3">
                    <img src={GuidePil} alt="" className="w-4 mt-1" />
                    <p>Trykk <span className="font-semibold tracking-wide">CONTINUE</span> mens du presser filamentet ned i sporet:</p>
                    </div>

                    <div className="flex items-start gap-3 mb-10">
                    <img src={Steg4Display} alt="" className="w-auto mt-1" />
                    </div>

                    <div className="flex items-start gap-3 mb-10">
                    <img src={Steg41Display} alt="" className="w-auto mt-1" />
                    </div>

                    <div className="flex items-start gap-3">
                    <img src={GuidePil} alt="" className="w-4 mt-1" />
                    <p>Hvis fargen som kommer ut er riktig: trykk <span className="font-semibold tracking-wide">YES</span></p>
                    </div>

                    <div className="flex items-start gap-3 mb-10">
                    <img src={GuidePil} alt="" className="w-4 mt-1" />
                    <p>Hvis fargen som kommer ut er feil: trykk <span className="font-semibold tracking-wide">NO</span></p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                    <img src={GuidePil} alt="" className="w-4 mt-1" />
                    <p>Fjern så filamentrester fra platen og der filamentet kommer ut</p>
                    </div>

                    <div className="flex items-start gap-3 mb-10">
                    <img src={GuidePil} alt="" className="w-4 mt-1" />
                    <p className="text-red-600"> <span className="font-semibold tracking-wide">VIKTIG</span>Filamentet er varmt, bruk en tang</p>
                    </div>



                </div>

                </div>

            
                {/* Sticky knappær i bunn */}
                <div className="mt-auto flex items-end justify-between">
                  <button className="rounded-xl bg-[#EBA65F] px-10 py-3 font-semibold text-black shadow hover:bg-[#C28B53] transition">
                    Forrige
                  </button>

                  <button className="rounded-xl bg-[#EBA65F] px-10 py-3 font-semibold text-black shadow hover:bg-[#C28B53] transition">
                    Neste
                  </button>
                </div>

              </section>
            </div>

          </div>
        </div>
      </section>
    </MainWrapper>
  );
}

export default GuideStep3;
