import { PropsWithChildren } from 'react';

interface ChatBotProps extends PropsWithChildren {
  onClick?: () => void;
}

export default function Chatbot({ children, onClick }: ChatBotProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 rounded-2xl bg-[#214C50] px-5 py-3 text-lg font-bold text-white
                   shadow-shadow-md hover:bg-[#488B90]"
    >
      <div className="leading-tight">{children}</div>
    </button>
  );
}
