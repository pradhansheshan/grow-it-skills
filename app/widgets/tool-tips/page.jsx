"use client";

import { useState } from "react";

export default function ToolTipsPage() {
  const [btnTooltip, setBtnTooltip] = useState(false);
  const [inpTooltip, setInpTooltip] = useState(false);
  const [txtTooltip, setTxtTooltip] = useState(false);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Tool Tips</h1>
        <p className="mt-2 text-gray-400">Practice hovering over elements to trigger dynamically generated tooltips.</p>
      </div>

      <div className="p-12 bg-gray-900 border border-gray-800 rounded-xl space-y-12 text-center">
        
        {/* Button Tooltip */}
        <div className="relative inline-block">
          <button
            onMouseEnter={() => setBtnTooltip(true)}
            onMouseLeave={() => setBtnTooltip(false)}
            onFocus={() => setBtnTooltip(true)}
            onBlur={() => setBtnTooltip(false)}
            id="toolTipButton"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            Hover me to see
          </button>
          
          {btnTooltip && (
            <div 
              role="tooltip" 
              className="absolute z-10 w-max px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm -top-12 left-1/2 -translate-x-1/2 animate-in fade-in zoom-in duration-200"
            >
              You hovered over the Button
              <div className="absolute w-2 h-2 bg-gray-700 bottom-[-4px] left-1/2 -translate-x-1/2 rotate-45 border-r border-b border-transparent"></div>
            </div>
          )}
        </div>

        {/* Input Tooltip */}
        <div className="relative w-64 mx-auto">
          <input
            type="text"
            placeholder="Hover me to see"
            onMouseEnter={() => setInpTooltip(true)}
            onMouseLeave={() => setInpTooltip(false)}
            onFocus={() => setInpTooltip(true)}
            onBlur={() => setInpTooltip(false)}
            id="toolTipTextField"
            className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
          />
          
          {inpTooltip && (
            <div 
              role="tooltip" 
              className="absolute z-10 w-max px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm -bottom-12 left-1/2 -translate-x-1/2 animate-in fade-in zoom-in duration-200"
            >
              You hovered over the text field
              <div className="absolute w-2 h-2 bg-gray-700 top-[-4px] left-1/2 -translate-x-1/2 rotate-45 border-l border-t border-transparent"></div>
            </div>
          )}
        </div>

        {/* Text Tooltip */}
        <div className="pt-8 text-gray-300">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical{" "}
          <span 
            className="relative font-bold text-blue-500 cursor-pointer"
            onMouseEnter={() => setTxtTooltip(true)}
            onMouseLeave={() => setTxtTooltip(false)}
          >
            Latin literature
            {txtTooltip && (
              <div 
                role="tooltip" 
                className="absolute z-10 w-max px-3 py-2 text-sm font-normal text-white bg-gray-700 rounded-lg shadow-sm -top-10 left-1/2 -translate-x-1/2 animate-in fade-in zoom-in duration-200"
              >
                You hovered over the text
                <div className="absolute w-2 h-2 bg-gray-700 bottom-[-4px] left-1/2 -translate-x-1/2 rotate-45 border-r border-b border-transparent"></div>
              </div>
            )}
          </span>{" "}
          from 45 BC, making it over 2000 years old.
        </div>
      </div>
    </div>
  );
}
