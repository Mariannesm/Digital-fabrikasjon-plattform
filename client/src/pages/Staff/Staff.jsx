import "./Staff.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import Fahad from "../../assets/Bilder/Fahad.png";
import Jennifer from "../../assets/Bilder/Jennifer.jpg";
import Marianne from "../../assets/Bilder/Marianne.png";


function Staff() {
  let navigate = useNavigate();

  const staff = [
    {
      name: "Fahad",
      role: "Ansvarlig",
      contact: "Fahad@hiof.no",
      image: Fahad
    },
    {
      name: "Jennifer",
      role: "Studentassistent",
      contact: "jennifer@hiof.no",
      image: Jennifer
    },
    {
      name: "Marianne",
      role: "Studentassistent",
      contact: "marianne@hiof.no",
      image: Marianne
    }
  ];

  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      <Header title="OM OMRÅDET DITT" showSelectInstitution={false} />

      <section className="flex-1">
        <div className="w-full px-4 py-12">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[420px_1fr]">
            {/* VENSTRE */}
            <aside className="flex flex-col items-start self-start top-6 z-10">
              <nav className="w-full space-y-6">
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  Kart over området
                </button>
                <button className="w-full bg-[#214C50] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  Ansatte
                </button>
                <button className="w-full bg-[#488B90] hover:bg-[#214C50] px-8 py-6 text-left text-lg text-white shadow-md">
                  Åpningstider
                </button>
              </nav>
            </aside>

            {/* HØYRE */}
            <div className="w-full pr-15">
              <section className="w-full max-w-7xl mr-auto min-h-[420px] rounded-2xl bg-white p-12 shadow-lg text-left flex flex-col">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold">Ansatte</h2>
                  <span className="h-1 w-full bg-[#488B90]" />
                </div>

                <div className="mt-6 mb-10 text-base font-normal text-black">
                  <p>MakerSpace og FabLab har flere ansatte.</p>
                </div>

                {/*ANSATT LISTE*/}
                <div className="flex flex-col gap-8">
                  {staff.map((person) => (
                    <div key={person.name} className="flex items-start gap-6">
                      {/* Bilde/placeholder (samme “grå boks” som på bilde 1) */}
                      {person.image ? (
                        <img
                          src={person.image}
                          alt={person.name}
                          className="h-24 w-24 object-cover bg-gray-200"
                        />
                      ) : (
                        <div className="h-24 w-24 bg-gray-200" />
                      )}

                      {/* Tekst */}
                      <div className="text-black">
                        <p className="leading-7">
                          <span className="font-semibold">Navn:</span> {person.name}
                        </p>
                        <p className="leading-7">
                          <span className="font-semibold">Rolle:</span> {person.role}
                        </p>
                        {person.contact && (
                          <p className="leading-7">
                            <span className="font-semibold">Kontaktinformasjon:</span>{" "}
                            {person.contact}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sticky knappær i bunn*/}
                <div className="mt-10 flex items-end justify-between ">
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

export default Staff;
