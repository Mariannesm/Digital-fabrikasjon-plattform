import Link from 'next/link';
import MainWrapper from '@/components/templates/MainWrapper';
import Header from '@/components/ui/Header';
import CardButton from '@/components/ui/Cardbutton';
import { client } from '@/lib/sanity/client';

type Category = {
    _id: string;
    name: string;
    slug: { current: string };
    buttonText: string;
    order: number;
};

async function getCategories(): Promise<Category[]> {
    return client.fetch(`*[_type == "category"] | order(order asc) {
        _id,
        name,
        slug,
        buttonText,
        order
    }`);
}

type Props = {
    params: Promise<{ organization_slug: string }>;
};

export default async function MenuPage({ params }: Props) {
    const { organization_slug } = await params;
    const categories = await getCategories();

    return (
        <MainWrapper classNames="pt-0 bg-[#FFFCF8]">
            <Header />

            <section className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 place-content-center place-items-center mx-auto w-fit mt-10 sm:mt-16">
                {categories.map((category) => (
                    <Link key={category._id} href={`/${organization_slug}/${category.slug.current}`}>
                        <CardButton>
                            {category.buttonText}
                        </CardButton>
                    </Link>
                ))}

                <CardButton>
                    <span className="block">KOM I GANG MED</span>
                    <span className="block">ET PROSJEKT</span>
                </CardButton>
            </section>
        </MainWrapper>
    );
}
