'use client'

import { useRouter } from 'next/navigation';

function SecondPage() {
const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(event.currentTarget);
    const name = formData.get('nombre');

    // Navigate to the success page with the user's name
    router.push(`/success?name=${encodeURIComponent(name as string)}`);
    console.log("Form submitted");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-tr from-cyan-500 to-sky-900">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Ingresa la siguiente información:</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
              Nombre y Apellido
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          
          {/* Tipo de Documento */}
          <label htmlFor="tipoDocumento" className="block text-sm font-medium text-gray-700">
              Tipo de Documento
            </label>
            <select
                id="tipoDocumento"
                name="tipoDocumento"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                defaultValue=""
                required
                >
                <option value="" disabled>
                    Selecciona el tipo de documento
                </option>
                <option value="Cedula de Ciudadania">Cédula de Ciudadanía</option>
                <option value="Cedula de Extranjeria">Cédula de Extranjería</option>
            </select>
          
          {/* No de Documento */}
          <div>
            <label htmlFor="numeroDocumento" className="block text-sm font-medium text-gray-700">
              No de Documento
            </label>
            <input
              type="text"
              id="numeroDocumento"
              name="numeroDocumento"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ingresa el número de documento"
              required
            />
          </div>
          
          {/* Telefono */}
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
              Teléfono
            </label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ingresa tu teléfono"
              required
            />
          </div>
          
          {/* Ciudad */}
          <div>
            <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700">
              Ciudad
            </label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ingresa tu ciudad"
              required
            />
          </div>
          
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full mt-2 px-4 py-2 text-white bg-sky-900 rounded-lg shadow-lg hover:bg-sky-600 transition"
            >
              Enviar
            </button>

            {/* Cancel Button */}
            <button
              type="button"
              onClick={() => router.push('/')}
              className="w-full mt-2 px-4 py-2 text-gray-700 bg-gray-200 rounded-lg shadow-lg hover:bg-gray-300 transition"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SecondPage;
