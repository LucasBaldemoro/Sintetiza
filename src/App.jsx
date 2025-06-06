import React, { useState } from "react";
import  "./App.css"



// Custom SVG Icons
const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 6v12m6-6h-12" />
  </svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M8 9H5a2 2 0 00-2 2v7a2 2 0 002 2h11l-3-3m-3 9V7a2 2 0 012-2h7a2 2 0 012 2v11l-3-3z" />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19 9l-7 7-7-7" />
    <path d="M19 9H5V5h14z" />
  </svg>
);





function App() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);



  const summarizeWithZeroGPT = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.zerogpt.com/api/summarize',
        { text: inputText },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: '7770c3a7-c022-4d8d-b7b8-3af2a55ca7c6', // ⚠️ Sustituye con tu clave real
          },
        }
      );

      setSummary(response.data.summary); // ⚠️ Ajusta según el formato real de la respuesta
    } catch (error) {
      console.error('Error al resumir con ZeroGPT:', error);
      setSummary('Ocurrió un error al generar el resumen.');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8  contenedorAplicacion ">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <img src="log.png" alt="Logo" className="w-8 h-8 rounded-full" />
          <span className="text-lg font-semibold">Sintetiza</span>
        </div>
        <div className="flex items-center space-x-1">
          <button className="px-8 py-2  text-gray-600 rounded-md hover:bg-gray-200">
            <img src="customize.svg"></img>
            Personalizar
          </button>
          <button className="px-4 py-2  text-gray-600 rounded-md hover:bg-gray-200 modoOscuro">
            <img src="luna22.svg"></img>

          </button>

        </div>
      </header>

      {/* Content Section */}
      <div class="h-[700px] grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch p-4 ">
        {/* Source Text Area */}
        <div className="bg-white rounded-lg shadow-md p-4 bg-green IngresoTextoContenedor"  >
          <h2 className="text-lg font-semibold mb-2">Entrada Texto</h2>
          <textarea

            value={inputText}
            onChange={(e) => setInputText(e.target.value)}

            placeholder="Pegue su texto aquí o elija un documento"
            className="w-full h-150 border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:border-blue-500"




          ></textarea>
          <p className="text-xs text-gray-500 mt-2">2 minutes ago</p>
           <div className="mt-8 flex justify-end">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          onClick={summarizeWithZeroGPT}
          disabled={loading}

        >
          Genera Resumen
        </button>
      </div>
        </div>

        {/* Summary Card */}
        <div className="bg-white rounded-lg shadow-md p-4  IngresoTextoContenedor"  >
          <div className="flex justify-between items-center mb-4 ">
            <h2 className="text-lg font-semibold">Resumen Texto</h2>
            <div className="flex space-x-2">
              <button className="px-2 py-1 bg-white text-gray-600 rounded-md hover:bg-gray-200">
                <CopyIcon />
              </button>
              <button className="px-2 py-1 bg-white text-gray-600 rounded-md hover:bg-gray-200">
                <DownloadIcon />
              </button>
            </div>
          </div>
          <p className="text-sm leading-relaxed">{summary}</p>
          <p className="text-xs text-gray-500 mt-2">Just now</p>


          
        </div>
      </div>

     
    </div>
  );
}

export default App