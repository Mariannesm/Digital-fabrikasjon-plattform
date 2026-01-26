import { client } from "@/lib/sanity/client";
import MainWrapper from "@/components/templates/MainWrapper";
import OrganizationSelect from "@/components/ui/OrganizationSelect";

type Organization = {
  _id: string;
  name: string;
  slug: { current: string };
};

async function getOrganizations(): Promise<Organization[]> {
  return client.fetch(`*[_type == "organization" && active == true] | order(name asc) {
    _id,
    name,
    slug
  }`);
}

export default async function Home() {
  const organizations = await getOrganizations();

  return (
    <MainWrapper classNames="items-center justify-center bg-[#FFE8C2]">
      <h1 className="text-9xl font-extrabold text-[#E69138] mb-20">
        SmartMaking
      </h1>
      <OrganizationSelect organizations={organizations} />
    </MainWrapper>
  );
}
