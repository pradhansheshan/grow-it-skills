"use client";

import { useState } from "react";

export default function SliderPage() {
  const [sliderValue, setSliderValue] = useState(25);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Slider</h1>
        <p className="mt-2 text-gray-400">Practice interacting with range sliders and verifying their exact values.</p>
      </div>

      <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl space-y-8">
        
        <div className="flex items-center gap-6">
          <input
            id="testSlider"
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400"
          />
          <div className="w-16 h-10 flex items-center justify-center bg-gray-950 border border-gray-700 rounded-lg">
            <span id="sliderValue" className="text-white font-mono font-medium">{sliderValue}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
