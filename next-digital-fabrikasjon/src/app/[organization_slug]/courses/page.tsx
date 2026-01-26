import Image from 'next/image'
import Header from '@/components/ui/Header'
import MainWrapper from '@/components/templates/MainWrapper'
import { Button } from '@/components/ui/Button'

export default function DigitalCoursesPage() {
  return (
    <MainWrapper classNames="bg-[#FFFCF8]">
      <Header title="DIGITALE KURS" showSelectInstitution={false} />

      {/* Erstattes med API-kall
      title
      icon {
        src
        alt
      }
      path
      */}

      <div className="mx-auto w-full max-w-6xl px-10 py-14">
        {/* Overskrifter */}
        <div className="grid grid-cols-2 gap-12 text-2xl">
          <h2 className="font-semibold">Informerende kurs:</h2>
          <h2 className="font-semibold">Kurs for ditt område:</h2>
        </div>

        {/* Kolonner */}
        <div className="mt-10 grid grid-cols-2 gap-30 items-start">
          {/* VENSTRE: Informerende kurs */}
          <div>
            {/* Boks 1 */}
            <div className="flex items-center justify-between rounded-2xl bg-[#C2D8DA] px-6 py-5">
              <div className="flex items-center gap-4">
                {/* Ikon */}
                <div className="flex h-12 w-12 items-center justify-center">
                  <Image
                    src="/icons/3Dprinter.png"
                    alt="3D printer ikon"
                    width={48}
                    height={48}
                  />
                </div>

                <h3 className="text-lg font-bold tracking-wide text-[#214C50]">
                  SIKKERHET
                </h3>
              </div>
              <Button type="button">Start</Button>
            </div>
          </div>

          {/* HØYRE: Kurs for ditt område */}
          <div className="flex items-center justify-between rounded-2xl bg-[#C2D8DA] px-6 py-5">
            <div className="flex items-center gap-4">
              {/* Ikon */}
              <div className="flex h-12 w-12 items-center justify-center">
                <Image
                  src="/icons/3Dprinter.png"
                  alt="3D printer ikon"
                  width={48}
                  height={48}
                />
              </div>

              <h3 className="text-lg font-bold tracking-wide text-[#214C50]">
                3D-MODELLERING
              </h3>
            </div>
            <Button type="button">Start</Button>
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}
