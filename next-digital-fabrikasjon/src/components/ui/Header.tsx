'use client';

import { usePathname, useRouter, useParams } from 'next/navigation';
import BackButton from './BackButton';
import { ROOT_PAGES } from '@/libs/constants/routes'

interface HeaderProps {
    title?: string;
    showSelectInstitution?: boolean;
}

export default function Header({
    title = '',
    showSelectInstitution = false,
}: HeaderProps) {
    const pathname: string | null = usePathname();
    const router = useRouter();
    const showBackButton = pathname ? !ROOT_PAGES.includes(pathname) : false;
    const params = useParams()
    const organizationSlug = params.organization_slug as string

    return (
        <header className="mb-6 sm:mb-10 w-screen ml-[calc(50%-50vw)] pl-6 sm:pl-10 text-left bg-[#FFE8C2] grid grid-cols-3 grid-rows-4 gap-0 pb-5">
            {/* Venstre kolonne: Logo, institusjon-select og tilbakeknapp */}
            <div className="col-span-1 row-span-4">
                <h1 onClick={() => router.push('/meny')} className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#E69138] mt-8 cursor-pointer select-none">SmartMaking</h1>

                <p>Current organization "{organizationSlug}"</p>

                <select
                    className="mt-3 inline-flex items-center gap-2 text-lg rounded-md px-3 py-1
                     hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-orange-400
                     font-semibold text-black bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed"
                    defaultValue="Høgskolen i Østfold"
                    disabled={!showSelectInstitution}
                >
                    <option>Høgskolen i Østfold</option>
                    <option>OsloMet</option>
                    {/* Legg til flere institusjoner her etter behov */}
                </select>

                {/* Vis tilbakeknapp kun hvis vi IKKE er på forsiden/meny */}
                {showBackButton && (
                    <div className="mt-4 flex justify-center sm:justify-start">
                        <BackButton />
                    </div>
                )}
            </div>

            {/* Midten: Stor tittel */}
            <div className="col-span-1 row-span-3 col-start-2 row-start-2 flex items-end justify-center">
                <h2 className="text-5xl sm:text-6xl font-semibold text-center leading-tight">
                    {title}
                </h2>
            </div>
        </header>
    );
}