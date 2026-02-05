import "./FilamentPage.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";

function FilamentPage() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="FILAMENT VED DITT OMRÅDE" showSelectInstitution={false} />

      <div className="max-w-[980px] px-4 pb-16 pt-7 text-left">
        {/* Intro */}
        <section className="ml-15 text-left">
          <h2 className="mb-2 text-lg font-bold">Filament</h2>
          <p className="m-0 font-normal">
            Filament er...
            <br />
            Det finnes store mengder filament å velge mellom med ulike kvaliteter...
          </p>
          <p className="m-0 font-normal">Grader osv</p>
        </section>

        {/* Valg */}
        <section className="mt-6 ml-15 text-left">
          <h3 className="mb-2 text-lg font-bold">Valg av filament</h3>
          <p className="m-0 font-normal">
            Når du skal velge filament og printer er det viktig å tenke på hva det
            skal brukes til.
          </p>
        </section>

        {/* FILAMENT CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,minmax(350px,1fr))] gap-10 mt-20 ml-15">
          
          {/* PLA */}
          <article className="rounded-xl border border-[#488B90] bg-white shadow-sm overflow-hidden">
            <div className="h-60 bg-[#488B90]" />
            <div className="px-4 pb-4 pt-3 text-left">
              <h4 className="mb-2 text-lg font-bold text-[#2F7D80]">PLA</h4>

              <div className="mb-3 space-y-1">
                <div><span className="font-bold">Nozzle (°C):</span> 200-220</div>
                <div><span className="font-bold">Bed (°C):</span> 0-60</div>
              </div>

              <div className="mt-2">
                <div className="mb-1 font-bold">Fordeler:</div>
                <ul className="list-disc pl-5">
                  <li>Billig</li>
                  <li>Lett å printe</li>
                  <li>Lite lukt</li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="mb-1 font-bold">Ulemper:</div>
                <ul className="list-disc pl-5">
                  <li>Mindre varmebestandig</li>
                  <li>Mindre slitesterk</li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="mb-1 font-bold">Anbefalt bruk:</div>
                <ul className="list-disc pl-5">
                  <li>Prototyping</li>
                  <li>Funksjonelle deler</li>
                </ul>
              </div>
            </div>
          </article>

          {/* PETG */}
          <article className="rounded-xl border border-[#488B90] bg-white shadow-sm overflow-hidden">
            <div className="h-60 bg-[#488B90]" />
            <div className="px-4 pb-4 pt-3 text-left">
              <h4 className="mb-2 text-lg font-bold text-[#2F7D80]">PETG</h4>

              <div className="mb-3 space-y-1">
                <div><span className="font-bold">Nozzle (°C):</span> 220-250</div>
                <div><span className="font-bold">Bed (°C):</span> 70-90</div>
              </div>

              <div className="mt-2">
                <div className="mb-1 font-bold">Fordeler:</div>
                <ul className="list-disc pl-5">
                  <li>Mer slitesterk enn PLA</li>
                  <li>Tåler fukt</li>
                  <li>Lite lukt</li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="mb-1 font-bold">Ulemper:</div>
                <ul className="list-disc pl-5">
                  <li>Mer stringing</li>
                  <li>Litt vanskeligere å printe</li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="mb-1 font-bold">Anbefalt bruk:</div>
                <ul className="list-disc pl-5">
                  <li>Utendørs bruk</li>
                  <li>Mekaniske deler</li>
                </ul>
              </div>
            </div>
          </article>

          {/* ABS */}
            <article className="rounded-xl border border-[#488B90] bg-white shadow-sm overflow-hidden">
            <div className="h-60 bg-[#488B90]" />
            <div className="px-4 pb-4 pt-3 text-left">
              <h4 className="mb-2 text-lg font-bold text-[#2F7D80]">ABS</h4>

              <div className="mb-3 space-y-1">
                <div><span className="font-bold">Nozzle (°C):</span> 220-250</div>
                <div><span className="font-bold">Bed (°C):</span> 70-90</div>
              </div>

              <div className="mt-2">
                <div className="mb-1 font-bold">Fordeler:</div>
                <ul className="list-disc pl-5">
                  <li>Mer slitesterk enn PLA</li>
                  <li>Tåler fukt</li>
                  <li>Lite lukt</li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="mb-1 font-bold">Ulemper:</div>
                <ul className="list-disc pl-5">
                  <li>Mer stringing</li>
                  <li>Litt vanskeligere å printe</li>
                </ul>
              </div>

              <div className="mt-3">
                <div className="mb-1 font-bold">Anbefalt bruk:</div>
                <ul className="list-disc pl-5">
                  <li>Utendørs bruk</li>
                  <li>Mekaniske deler</li>
                </ul>
              </div>
            </div>
          </article>

        </section>
      </div>
    </MainWrapper>
  );
}

export default FilamentPage;
