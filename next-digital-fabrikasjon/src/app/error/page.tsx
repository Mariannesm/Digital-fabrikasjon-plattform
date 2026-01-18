'use client';

import Header from '@/components/ui/Header';
import MainWrapper from '@/components/templates/MainWrapper';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <MainWrapper>
        <div className="flex min-h-screen flex-col bg-gray-50 px-4 text-center">
          <h1 className="mb-4 text-6xl font-bold text-red-600">Oi noe gikk galt!</h1>
          <p className="mb-8 text-xl text-gray-700">
            Det oppsto en uventet feil. Prøv å laste siden på nytt.
          </p>
          <button
            onClick={reset}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
          >
            Prøv igjen
          </button>
          <p className="mt-8 text-sm text-gray-500">
            Feilmelding: {error?.message}
          </p>
        </div>
      </MainWrapper>
    </>
  );
}