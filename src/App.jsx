import bunnyBody from './assets/bunny_body.png';
import { useState } from "react";
import { categories } from './data/clothingCategory';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("outfit");
  const [selectedOutfit, setSelectedOutfit] = useState(null);
  const [selectedHat, setSelectedHat] = useState(null);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const selectedCategoryData = categories.find(cat => cat.key === selectedCategory);
  const options = selectedCategoryData ? selectedCategoryData.options : [];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-green-100 font-sans p-4">
      {/* HEADER */}
      <header className="flex justify-center mt-1">
        <div className="flex items-center gap-2 bg-green-400 px-3 py-1 rounded-lg shadow">
          <img
            src="/bunny_icon.png"
            alt="Bunny Icon"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-base font-semibold text-gray-800">Build and Dress</h1>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex flex-wrap justify-center items-center gap-8 flex-1 mt-8">
        {/* BUNNY CONTAINER */}
        <div className="relative w-[213px] h-[340px] bg-white rounded-xl shadow-md p-4 overflow-hidden">
          <img
            src={bunnyBody}
            alt="Bunny Body"
            className="absolute top-1/2 left-1/2 max-w-full max-h-full transform -translate-x-1/2 -translate-y-1/2 object-contain"
          />
          {selectedOutfit && (
            <img src={selectedOutfit.image} alt={selectedOutfit.id} className="absolute top-1/2 left-1/2 max-w-full max-h-full transform -translate-x-1/2 -translate-y-1/2 object-contain" />
          )}
          {selectedHat && (
            <img src={selectedHat.image} alt={selectedHat.id} className="absolute top-1/2 left-1/2 max-w-full max-h-full transform -translate-x-1/2 -translate-y-1/2 object-contain" />
          )}
          {selectedAccessory && (
            <img src={selectedAccessory.image} alt={selectedAccessory.id} className="absolute top-1/2 left-1/2 max-w-full max-h-full transform -translate-x-1/2 -translate-y-1/2 object-contain" />
          )}
        </div>

        {/* CLOTHING OPTIONS */}
        <div className="flex flex-col items-center w-full max-w-md min-w-[200px] h-[340px] bg-white rounded-xl shadow-md p-4">
          {/* Category buttons */}
          <div className="flex justify-around w-full mb-4">
            {categories.map(({ key, emoji }) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                aria-label={key}
                className={`text-2xl cursor-pointer px-2 py-1 rounded-full transition ${
                  selectedCategory === key
                    ? "font-bold text-blue-700 bg-blue-100"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>

          {/* Clothing option buttons */}
          <div className="flex justify-center flex-wrap items-center w-full h-[250px] overflow-y-auto">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  if (selectedCategory === "outfit") setSelectedOutfit(option);
                  if (selectedCategory === "hats") setSelectedHat(option);
                  if (selectedCategory === "accessories") setSelectedAccessory(option);
                }}
                className="w-20 h-20 p-1 border border-green-200 rounded-lg bg-white m-1 flex justify-center items-center hover:shadow"
              >
                <img src={option.image} alt={option.id} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-700 mt-6">
        Build and Dress © 2025 - UTN FRRe
      </footer>
    </div>
  );
}
