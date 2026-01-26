import React from 'react';

function MainWrapper({ children, classNames = '' }) {
  return (
    <>
      <main className={`min-h-screen text-black flex flex-col ${classNames}`}>
        {children}
      </main>
    </>
  );
}

export default MainWrapper;
