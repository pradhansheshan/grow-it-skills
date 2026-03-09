"use client";

import { useState, useRef, useEffect } from "react";

export default function AutoCompletePage() {
  const [multipleInp, setMultipleInp] = useState("");
  const [multipleSelected, setMultipleSelected] = useState(["Blue"]);
  
  const [singleInp, setSingleInp] = useState("");
  const [singleSelected, setSingleSelected] = useState("");
  
  const colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Black", "White", "Magenta", "Indigo", "Aqua", "Orange"];

  const multipleFiltered = colors.filter(c => 
    c.toLowerCase().includes(multipleInp.toLowerCase()) && !multipleSelected.includes(c)
  );

  const singleFiltered = colors.filter(c => 
    c.toLowerCase().includes(singleInp.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Auto Complete</h1>
        <p className="mt-2 text-gray-400">Practice interacting with multi-select and single-select autocomplete inputs.</p>
      </div>

      <div className="space-y-8">
        {/* Multi Select */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl space-y-4">
          <label className="block text-sm font-medium text-gray-300">Type multiple color names</label>
          <div className="relative">
            <div className="min-h-[42px] px-3 py-1.5 flex flex-wrap gap-2 items-center bg-gray-950 border border-gray-800 rounded-lg focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/50">
              {multipleSelected.map(color => (
                <div key={color} className="flex items-center gap-1 bg-gray-800 text-gray-200 px-2 py-0.5 rounded text-sm">
                  <span>{color}</span>
                  <button 
                    onClick={() => setMultipleSelected(prev => prev.filter(c => c !== color))}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <input 
                type="text" 
                value={multipleInp}
                onChange={(e) => setMultipleInp(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white min-w-[100px]"
                id="autoCompleteMultipleInput"
              />
            </div>
            
            {multipleInp && multipleFiltered.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-gray-950 border border-gray-800 rounded-lg shadow-xl z-10 max-h-48 overflow-y-auto">
                {multipleFiltered.map(color => (
                  <button
                    key={color}
                    onClick={() => {
                      setMultipleSelected(prev => [...prev, color]);
                      setMultipleInp("");
                    }}
                    className="w-full text-left px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white flex items-center transition-colors"
                  >
                    {color}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Single Select */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl space-y-4">
          <label className="block text-sm font-medium text-gray-300">Type single color name</label>
          <div className="relative">
            <div className="flex items-center bg-gray-950 border border-gray-800 rounded-lg focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/50">
              <input 
                type="text" 
                value={singleInp}
                onChange={(e) => {
                  setSingleInp(e.target.value);
                  setSingleSelected("");
                }}
                placeholder={singleSelected || ""}
                className="w-full px-4 py-2 bg-transparent border-none outline-none text-white"
                id="autoCompleteSingleInput"
              />
            </div>
            
            {singleInp && !singleSelected && singleFiltered.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-gray-950 border border-gray-800 rounded-lg shadow-xl z-10 max-h-48 overflow-y-auto">
                {singleFiltered.map(color => (
                  <button
                    key={color}
                    onClick={() => {
                      setSingleSelected(color);
                      setSingleInp(color);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white flex items-center transition-colors"
                  >
                    {color}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
