'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useContext } from 'react';
import BackButton from './BackButton';
import OrganizationSelect from './OrganizationSelect';
import { ROOT_PAGES, isInstitutionSelectable } from '@/lib/constants/routes';
import { OrganizationContext } from '@/providers/OrganizationProvider';

interface HeaderProps {
    title?: string;
}

export default function Header({ title = '' }: HeaderProps) {
    const pathname: string | null = usePathname();
    const router = useRouter();
    const showBackButton = pathname ? !ROOT_PAGES.includes(pathname) : false;
    const orgCtx = useContext(OrganizationContext);

    return (
        <header className="mb-6 sm:mb-10 w-screen ml-[calc(50%-50vw)] pl-6 sm:pl-10 text-left bg-[#FFE8C2] grid grid-cols-3 grid-rows-4 gap-0 pb-5">
            {/* Venstre kolonne: Logo, org-navn/select og tilbakeknapp */}
            <div className="col-span-1 row-span-4">
                <h1 onClick={() => router.push('/')} className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#E69138] mt-8 cursor-pointer select-none">SmartMaking</h1>

                {/* Vis org-select på forsiden, org-navn på alle andre sider */}
                {isInstitutionSelectable(pathname) ? (
                    <OrganizationSelect showButton={false} />
                ) : orgCtx ? (
                    <p className="mt-1 text-sm font-semibold text-[#214C50]">
                        {orgCtx.organization.name}
                    </p>
                ) : null}

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
