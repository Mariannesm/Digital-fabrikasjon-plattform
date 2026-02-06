import "./AboutUs.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import Kart from "../../assets/Bilder/Kart.png";

function AboutUs() {
let navigate = useNavigate()
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      <Header title="OM OMRÅDET DITT" showSelectInstitution={false} />

      <section className="flex-1">
        <div className="w-full px-4 py-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[420px_1fr]">

            {/* VENSTRE */}
            <aside className="flex flex-col items-start self-start top-6 z-10">

              <nav className="w-full space-y-6">
                <button className="w-full bg-[#214C50] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  Kart over området
                </button>
                <button onClick={() => navigate('/Staff')} 
                    className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  Ansatte
                </button>
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  Åpningstider
                </button>
              </nav>
            </aside>

            {/* HØYRE tenker at i tilegg til tekstlig innhold og bilder, at det kan være mulig å linke til videor som f.eks fra youtube? eller legge inn video?*/}
            <div className="w-full pr-15">
              <section className="w-full max-w-7xl mr-auto min-h-[420px] rounded-2xl bg-white p-12 shadow-lg text-left flex flex-col">

                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold">Kart over området</h2>
                  <span className="h-1 w-full bg-[#488B90]" />
                </div>

                <div className="mt-6 text-base font-semibold text-black mb-10">
                  <p>
                    Høgskolen i Østfold avdeling Halden har en MakerSpace og en FabLab med tilgang til ulike teknologier og utstyr.
                  </p>
                </div>

                 <img
                 src={Kart}
                 className="w-full rounded-lg border-2 border-[#E69138] mb-10"
                 alt="Print settings"
                 />

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

export default AboutUs;
