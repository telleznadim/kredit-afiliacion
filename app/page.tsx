'use client'

import { useRouter } from 'next/navigation';


function IndexPage() {

  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/form-page'); // Navigate to the second page
  };


  return (
    <div className="bg-gradient-to-tr from-cyan-500 to-sky-900 relative h-screen w-screen">

      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
          <div className="space-y-8">
            <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
              Summat y has parte de la red de referidos del grupo {' '}
              <span className="text-palette-primary">
                Kredit.
              </span>
            </h1>
            <button onClick={handleButtonClick}
              className="px-6 py-3 text-white font-semibold bg-palette-primary border-2 border-white rounded-lg shadow-lg hover:bg-palette-secondary transition transform hover:scale-105">
              Ingresa Aquí
            </button>
          </div>
        
      </div>
    </div>
  )
}

export default IndexPage