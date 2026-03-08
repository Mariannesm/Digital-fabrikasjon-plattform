'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/providers/LanguageProvider";

export default function BackButton({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <button
      onClick={() => router.back()}
      className="flex flex-col items-center justify-center w-18 h-18 rounded-full bg-[#E69138] shadow-md hover:bg-[#FF9E38] transition mt-5"
    >
      <Image
        src="/icons/back-button.png"
        alt={t('common.back')}
        width={28}
        height={28}
        className="pt-1"
      />
      <span className="text-white text-sm font-semibold pt-1">{t('common.back')}</span>
      {children && <div className="leading-tight">{children}</div>}
    </button>
  );
}
