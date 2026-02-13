import "./GuideStep1.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import StartButton from "../../components/StartButton";
import PrinterIkon from "../../assets/ikoner/3Dprinter.png";
import Printer from "../../assets/ikoner/Printer.png";
import UnderKatPil from "../../assets/ikoner/UnderKatPil.png";

function GuideStep1() {
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

              {/* NAVIGASJON SÅNN DEN SKAL SE UT NÅR MAN TRYKKER MED FLERE STEG UNDER. DEN SOM ER VALGT SKAL HA SEMIBOLD TEKST*/}
              <nav className="w-full">

                <div className="flex flex-col ">
                  <button className="w-full bg-[#488B90] px-8 py-6 text-left text-lg text-white mb-2 shadow-lg">
                    Introduksjon og sikkerhet
                  </button>

                  <button className="w-full bg-[#214C50] px-8 py-6 text-left text-lg text-white mb-2 shadow-lg font-semibold">
                    1. 3D-modell
                  </button>

              {/* På underkategorier skal ">" ikonet være  */}
                  <button className="w-full bg-[#214C50] hover:bg-[#122B2D] px-8 py-6 text-left text-lg text-white pl-12 flex items-center gap-3">
                    <img src={UnderKatPil} alt="Under kategori ikon" className="w-2 h-3"></img>
                    <span>Finn modell</span>
                  </button>

                  <button className="w-full bg-[#214C50] hover:bg-[#122B2D] px-8 py-6 text-left text-lg text-white pl-12 shadow-lg flex items-center gap-3">
                    <img src={UnderKatPil} alt="Under kategori ikon" className="w-2 h-3"></img>
                    <span>Lag modell</span>
                  </button>
                </div>

                <div className="mt-6 space-y-6">
                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg">
                    2. Forbered printen (Slicing) 
                  </button>

                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg">
                    3. Klargjøring av printeren
                  </button>

                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg">
                    4. Kjøre printeren
                  </button>

                   <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg">
                    5. Oppfølging av printen
                  </button>

                  <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg">
                    6. Ferdig print
                  </button>

                   <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-lg">
                    7. Etterbehandling
                  </button>
                </div>

              </nav>
            </aside>

            {/* HØYRE tenker at i tilegg til tekstlig innhold og bilder, at det kan være mulig å linke til videor som f.eks fra youtube? eller legge inn video?*/}
            <div className="w-full pr-15">
              <section className="w-full max-w-7xl mr-auto min-h-[420px] rounded-2xl bg-white p-12 shadow-lg text-left flex flex-col">

                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold">Steg 1. 3D-modell</h2>
                  <span className="h-1 w-full bg-[#488B90]" />
                </div>

                <div className="mt-6 text-base font-semibold text-black">
                  <p>
                    I det første steget skal du enten finne en eksisterende modell
                    eller 3D-modellere din egen.
                  </p>
                </div>

                <div className=" font-normal mt-3">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempora magni placeat nihil at ad sit error tempore, 
                    delectus esse pariatur sunt, neque similique ex veritatis explicabo provident a laboriosam.</p>
                </div>

                {/*OBS OBS Muligheter til å linke til relevante kurs i  modulen*/}
                
                 <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#C2D8DA] px-4 py-3 max-w-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center">
                  <img src={PrinterIkon} alt="3D printer ikon" />
                </div>
                <h3 className="text-lg font-semibold tracking-wide text-[#214C50]">
                  KURS OM 3D MODELLERING
                </h3>
              </div>
              <StartButton>Gå til</StartButton>
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

export default GuideStep1;
