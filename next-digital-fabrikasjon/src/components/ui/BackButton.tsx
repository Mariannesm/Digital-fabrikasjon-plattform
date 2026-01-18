'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BackButton({ children }: { children?: React.ReactNode }) {
  const router = useRouter();

  const handleOnClick = () => {
    router.back();
  };

  return (
    <button
      onClick={handleOnClick}
      className="flex flex-col items-center justify-center w-18 h-18 rounded-full bg-[#E69138] shadow-md hover:bg-[#FF9E38] transition mt-5"
    >
      <Image
        src="/icons/back-button.png"
        alt="Tilbake"
        width={28}
        height={28}
        className="pt-1"
      />

      <span className="text-white text-sm font-semibold pt-1">Tilbake</span>
      {children && <div className="leading-tight">{children}</div>}
    </button>
  );
}