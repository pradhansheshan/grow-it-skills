"use client";

import { useState } from "react";

export default function RadioButtonPage() {
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Radio Button</h1>
        <p className="mt-2 text-gray-400">Practice interacting with radio buttons. Notice some might be disabled.</p>
      </div>

      <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl space-y-4">
        <p className="text-lg font-medium text-gray-200 mb-4">Do you like Web Testing?</p>
        
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-6">
          {/* Yes Radio */}
          <label className="flex items-center space-x-3 cursor-pointer">
            <input 
              type="radio" 
              name="web-testing" 
              value="Yes"
              checked={selectedRadio === "Yes"}
              onChange={handleRadioChange}
              className="w-4 h-4 text-blue-500 bg-gray-950 border-gray-700 focus:ring-blue-500/50 focus:ring-offset-gray-900"
            />
            <span className="text-gray-300">Yes</span>
          </label>

          {/* Impressive Radio */}
          <label className="flex items-center space-x-3 cursor-pointer">
            <input 
              type="radio" 
              name="web-testing" 
              value="Impressive"
              checked={selectedRadio === "Impressive"}
              onChange={handleRadioChange}
              className="w-4 h-4 text-blue-500 bg-gray-950 border-gray-700 focus:ring-blue-500/50 focus:ring-offset-gray-900"
            />
            <span className="text-gray-300">Impressive</span>
          </label>

          {/* No Radio (Disabled) */}
          <label className="flex items-center space-x-3 cursor-not-allowed opacity-50">
            <input 
              type="radio" 
              name="web-testing" 
              value="No"
              disabled
              className="w-4 h-4 text-gray-500 bg-gray-800 border-gray-700 cursor-not-allowed"
            />
            <span className="text-gray-500">No</span>
          </label>
        </div>
      </div>

      {/* Results Output */}
      {selectedRadio && (
        <div className="mt-8 p-6 bg-gray-900 border border-emerald-900/50 rounded-xl">
          <p className="text-gray-300">
            You have selected <span className="text-emerald-400 font-semibold">{selectedRadio}</span>
          </p>
        </div>
      )}
    </div>
  );
}
