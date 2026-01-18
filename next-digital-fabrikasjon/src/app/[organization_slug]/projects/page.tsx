'use client';
import './Projects.css'
import CardButton from '@/components/ui/Cardbutton';
import MainWrapper from '@/components/templates/MainWrapper';
import Header from '@/components/ui/Header';
import { useRouter, useParams } from "next/navigation";

export default function ProjectPage() {
    let navigate = useRouter()
    return (
        <MainWrapper classNames={"pt-0 bg-[#FFFCF8]"}>
            {/* Header */}
            <Header title='PROSJEKTER' showSelectInstitution={true}></Header>
            <section
                className="grid grid-cols-1 md:grid-cols-3 gap-x-16  gap-y-16 place-items-center mx-auto w-fit mt-10 sm:mt-16">
                <CardButton onClick={() => navigate.push('/register')}>
                    <span className="block">REGISTRER ET</span>
                    <span className="block">PROSJEKT</span>
                </CardButton>

                <CardButton onClick={() => navigate.push('/login')}>
                    <span className="block">LOGG INN PÅ DITT</span>
                    <span className="block">PROSJEKT</span>
                </CardButton>

                <CardButton onClick={() => navigate.push('/all')}>
                    <span className="block">EKSISTERENDE</span>
                    <span className="block">PROSJEKTER</span>
                </CardButton>
            </section>
        </MainWrapper>
    )
}