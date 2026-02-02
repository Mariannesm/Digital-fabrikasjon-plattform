import "./FilamentPage.css";
import Header from "../../components/Header";
import MainWrapper from "../../components/MainWrapper";
import Printer from "../../assets/ikoner/Printer.png";

function FilamentPage() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      {/* HEADER */}
      <Header title="FILAMENT VED DITT OMRÅDE" showSelectInstitution={false} />

      {/* Innhold */}
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

        {/* Choice */}
        <section className="mt-6 ml-15 text-left">
          <h3 className="mb-2 text-lg font-bold">Valg av filament</h3>
          <p className="m-0 font-normal">
            Når du skal velge filament og printer er det viktig å tenke på hva det skal brukes til.
          </p>
        </section>

        {/* Cards */}
        <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* PLA */}
          <article className="overflow-hidden rounded-lg border border-[#B7D3D3] bg-white shadow-none">
            <div className="h-[72px] bg-[#2F7D80]" />
            <div className="px-4 pb-4 pt-3 text-left">
              <h4 className="mb-2 text-[14px] font-bold text-[#2F7D80]">PLA</h4>

              <div className="mb-3 space-y-1 text-[11px] leading-5 text-neutral-900">
                <div>
                  <span className="font-bold">Nozzle (°C):</span> 200-220
                </div>
                <div>
                  <span className="font-bold">Bed (°C):</span> 0-60
                </div>
              </div>

              <div className="mt-2 text-[11px] text-neutral-900">
                <div className="mb-1 font-bold">Fordeler:</div>
                <ul className="list-disc space-y-0.5 pl-5">
                  <li>Billig</li>
                  <li>Lett å printe</li>
                  <li>Lite lukt</li>
                </ul>
              </div>

              <div className="mt-3 text-[11px] text-neutral-900">
                <div className="mb-1 font-bold">Ulemper:</div>
                <ul className="list-disc space-y-0.5 pl-5">
                  <li>Mindre varmebestandig</li>
                  <li>Mindre slitesterk</li>
                </ul>
              </div>

              <div className="mt-3 text-[11px] text-neutral-900">
                <div className="mb-1 font-bold">Anbefalt bruk:</div>
                <ul className="list-disc space-y-0.5 pl-5">
                  <li>Prototyping</li>
                  <li>Funksjonelle deler</li>
                </ul>
              </div>
            </div>
          </article>

          {/* PETG */}
          <article className="overflow-hidden rounded-lg border border-[#B7D3D3] bg-white shadow-none">
            <div className="h-[72px] bg-[#2F7D80]" />
            <div className="px-4 pb-4 pt-3 text-left">
              <h4 className="mb-2 text-[14px] font-bold text-[#2F7D80]">PETG</h4>

              <div className="mb-3 space-y-1 text-[11px] leading-5 text-neutral-900">
                <div>
                  <span className="font-bold">Nozzle (°C):</span> 220-250
                </div>
                <div>
                  <span className="font-bold">Bed (°C):</span> 70-80
                </div>
              </div>

              <div className="mt-2 text-[11px] text-neutral-900">
                <div className="mb-1 font-bold">Fordeler:</div>
                <ul className="list-disc space-y-0.5 pl-5">
                  <li>Lett å printe</li>
                  <li>Bedre enn PLA</li>
                  <li>Tåler mer værbelastning enn PLA</li>
                </ul>
              </div>

              <div className="mt-3 text-[11px] text-neutral-900">
                <div className="mb-1 font-bold">Ulemper:</div>
                <ul className="list-disc space-y-0.5 pl-5">
                  <li>Stringing (tråd-aktig rester etter printing)</li>
                  <li>Vanskelig å få av enkelte byggebrettformer</li>
                </ul>
              </div>

              <div className="mt-3 text-[11px] text-neutral-900">
                <div className="mb-1 font-bold">Anbefalt bruk:</div>
                <ul className="list-disc space-y-0.5 pl-5">
                  <li>Mekaniske deler</li>
                  <li>Deler som tåler understøt</li>
                </ul>
              </div>
            </div>
          </article>

          {/* ABS */}
          <article className="overflow-hidden rounded-lg border border-[#B7D3D3] bg-white shadow-none">
            <div className="h-[72px] bg-[#2F7D80]" />
            <div className="px-4 pb-4 pt-3 text-left">
              <h4 className="mb-2 text-[14px] font-bold text-[#2F7D80]">ABS</h4>

              <div className="mb-3 space-y-1 text-[11px] leading-5 text-neutral-900">
                <div>
                  <span className="font-bold">Nozzle (°C):</span> 220-250
                </div>
                <div>
                  <span className="font-bold">Bed (°C):</span> 90-100
                </div>
              </div>

              <div className="mt-2 text-[11px] text-neutral-900">
                <div className="mb-1 font-bold">Fordeler:</div>
                <ul className="list-disc space-y-0.5 pl-5">
                  <li>Sterkere og mer varmebestandig enn PLA og PETG</li>
                  <li>Kan etterbehandles til å oppnå en glatt overflate</li>
                </ul>
              </div>

              <div className="mt-3 text-[11px] text-neutral-900">
                <div className="mb-1 font-bold">Ulemper:</div>
                <ul className="list-disc space-y-0.5 pl-5">
                  <li>Oppvarmet byggeplate</li>
                  <li>Gasser (ventilering)</li>
                  <li>Må være i et lukket og varmt kammer</li>
                </ul>
              </div>

              <div className="mt-3 text-[11px] text-neutral-900">
                <div className="mb-1 font-bold">Anbefalt bruk:</div>
                <ul className="list-disc space-y-0.5 pl-5">
                  <li>Funksjonelle deler som må være varmebestandige</li>
                  <li>Deler som skal tåle høy mekanisk stress</li>
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
