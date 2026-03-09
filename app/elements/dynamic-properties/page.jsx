"use client";

import { useState, useEffect } from "react";

export default function DynamicPropertiesPage() {
  const [randomId, setRandomId] = useState("");
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    // Generate a random ID on mount
    setRandomId(Math.random().toString(36).substring(2, 10));

    // trigger state changes after 5 seconds
    const timer = setTimeout(() => {
      setTimerFinished(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Dynamic Properties</h1>
        <p className="mt-2 text-gray-400">Practice tests with elements that have delayed render constraints or dynamic IDs.</p>
      </div>

      <div className="space-y-6 bg-gray-900 border border-gray-800 p-6 rounded-xl">
        {/* Random ID element */}
        <div className="p-4 border border-gray-800 bg-gray-950 rounded-lg">
          <p className="text-gray-300">This text has random Id: <span className="text-blue-400 font-mono font-medium ml-2">{randomId}</span></p>
          <div id={randomId} className="hidden opacity-0" aria-hidden="true" />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white border-b border-gray-800 pb-2">Properties altering after 5 seconds...</h3>
          
          <div className="flex flex-col space-y-4">
            {/* Enable after 5 seconds */}
            <div>
              <button
                disabled={!timerFinished}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
              >
                Will enable 5 seconds
              </button>
            </div>

            {/* Color change after 5 seconds */}
            <div>
              <button
                className={`px-6 py-2.5 font-medium rounded-lg transition-colors ${
                  timerFinished 
                    ? "text-red-500 bg-gray-950 border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]" 
                    : "text-white bg-blue-600 border border-transparent"
                }`}
              >
                Color Change
              </button>
            </div>

            {/* Visible after 5 seconds */}
            <div className="h-[44px]"> {/* Fixed height wrapper so layout doesn't jump */}
              {timerFinished && (
                <button
                  id="visibleAfter"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
                >
                  Visible After 5 Seconds
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Help info */}
      {!timerFinished && (
        <div className="animate-pulse flex items-center justify-center p-4">
          <p className="text-gray-500 text-sm">Please wait 5 seconds for properties to update...</p>
        </div>
      )}
    </div>
  );
}
