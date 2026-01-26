'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { client } from '@/lib/sanity/client';

type Organization = {
    _id: string;
    name: string;
    slug: { current: string };
};

type Props = {
    organizations?: Organization[];
    showButton?: boolean;
};

export default function OrganizationSelect({ organizations: initialOrgs, showButton = true }: Props) {
    const router = useRouter();
    const [selectedSlug, setSelectedSlug] = useState('');
    const [organizations, setOrganizations] = useState<Organization[]>(initialOrgs || []);

    useEffect(() => {
        if (!initialOrgs) {
            client.fetch<Organization[]>(`*[_type == "organization" && active == true] | order(name asc) {
                _id,
                name,
                slug
            }`).then(setOrganizations);
        }
    }, [initialOrgs]);

    const handleNavigate = () => {
        if (selectedSlug) {
            router.push(`/${selectedSlug}`);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const slug = e.target.value;
        setSelectedSlug(slug);
        if (!showButton && slug) {
            router.push(`/${slug}`);
        }
    };

    return (
        <>
            <div className="relative">
                <select
                    className="text-lg w-64 px-5 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                    value={selectedSlug}
                    onChange={handleChange}
                >
                    <option value="">Velg område</option>
                    {organizations.map((org) => (
                        <option key={org._id} value={org.slug.current}>
                            {org.name}
                        </option>
                    ))}
                </select>
            </div>
            {showButton && (
                <button
                    onClick={handleNavigate}
                    disabled={!selectedSlug}
                    className="w-64 px-5 py-3 rounded-lg bg-[#E69138] text-black text-xl font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 mt-10 hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Gå videre
                </button>
            )}
        </>
    );
}
