import { PropsWithChildren } from 'react';

interface WrapperProps extends PropsWithChildren {
  classNames?: string;
}


export default function MainWrapper({ children, classNames = ''} : WrapperProps) {
  return (
    <>
      <main className={`min-h-screen text-black flex flex-col ${classNames}`}>
        {children}
      </main>
    </>
  );
}
