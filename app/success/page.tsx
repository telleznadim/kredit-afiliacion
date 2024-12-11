'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


function SuccessPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const router = useRouter();
  const referralId = Math.floor(100000 + Math.random() * 900000);

  useEffect(() => {
    if (!name) {
      router.push('/'); // Redirect to home page
    }
  }, [name, router]);

  if (!name) {
    return null; // Optionally render nothing until the redirect happens
  }


  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-tr from-green-500 to-teal-700">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Hola {name}, Bienvenido.</h1>
        <p className="text-lg text-gray-700">
          Ya eres parte de la red de Referidos Summat.
        </p>
         <p className="mt-4 text-lg text-gray-700">
          Comienza a generar ingresos adicionales, tu número de referidos es: <span className="font-bold">{referralId}</span>.
        </p>

        <p className="mt-4 text-lg text-gray-700">
          ¡Recuerda ingresarlo en cada solicitud ingresada!
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="mt-6 px-6 py-3 text-white bg-teal-800 rounded-lg hover:bg-green-400 transition"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;
