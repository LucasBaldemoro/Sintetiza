import React, { useState } from "react";

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

// Main App Component
function App() {
  // State for source text and summary
  const [sourceText, setSourceText] = useState(
    "Our upcoming marketing campaign aims to increase brand awareness and drive sales for our new line of eco-friendly home products. The campaign will run across multiple channels, including social media, influencer partnerships, and targeted online advertisements. The goal is to highlight the unique features and benefits of our products while also emphasizing our commitment to sustainability. We will leverage popular hashtags and partner with influencers in the eco-living space who have a strong following among our target demographic."
  );
  const [summary, setSummary] = useState(
    "Marketing Campaign Overview: Increase brand awareness and drive sales for new eco-friendly home products. Multi-channel approach including social media content creation, influencer partnerships, and targeted online ads. Social media focus on engaging content and leveraging popular hashtags. Influencer partnerships with eco-living creators for sponsored posts and reviews. Online advertising through targeted ads on Google, Facebook, and Instagram, with retargeting strategies. Campaign performance monitoring and data-driven optimizations."
  );

  // Handle text input change
  const handleSourceChange = (e) => {
    setSourceText(e.target.value);
  };

  // Simulate generating a summary (for demo purposes)
  const generateSummary = () => {
    const words = sourceText.split(" ");
    const shortenedWords = words.slice(0, Math.min(words.length, 150)).join(" ");
    setSummary(shortenedWords + "...");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/32x32"  alt="Logo" className="w-8 h-8 rounded-full" />
          <span className="text-lg font-semibold">Sintetiza</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-white text-gray-600 rounded-md hover:bg-gray-200">
            Customize
          </button>
          <button className="px-4 py-2 bg-white text-gray-600 rounded-md hover:bg-gray-200">
            EN
          </button>
          <button className="px-4 py-2 bg-white text-gray-600 rounded-md hover:bg-gray-200">
            <ArrowUpIcon />
          </button>
        </div>
      </header>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Source Text Area */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-2">Entrada Texto</h2>
          <textarea
            value={sourceText}
            onChange={handleSourceChange}
            placeholder="Paste your text here or choose a document"
            className="w-full h-64 border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:border-blue-500"
          ></textarea>
          <p className="text-xs text-gray-500 mt-2">2 minutes ago</p>
        </div>

        {/* Summary Card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
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

      {/* Generate Summary Button */}
      <div className="mt-8 flex justify-end">
        <button
          onClick={generateSummary}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Generate Summary
        </button>
      </div>
    </div>
  );
}

export default App;