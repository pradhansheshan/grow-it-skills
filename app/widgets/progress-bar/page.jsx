"use client";

import { useState, useEffect } from "react";

export default function ProgressBarPage() {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 1;
        });
      }, 100);
    } else if (progress >= 100) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, progress]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setProgress(0);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Progress Bar</h1>
        <p className="mt-2 text-gray-400">Practice automating tests for element states that change over time.</p>
      </div>

      <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl space-y-8">
        
        {/* Progress Bar Container */}
        <div className="w-full h-6 bg-gray-950 rounded-full border border-gray-800 overflow-hidden relative">
          <div 
            id="progressBar"
            className={`h-full flex items-center justify-center text-xs font-bold text-white transition-all duration-100 ease-linear ${progress === 100 ? 'bg-emerald-500' : 'bg-blue-600'}`}
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {progress > 5 && `${progress}%`}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {progress < 100 ? (
            <button
              id="startStopButton"
              onClick={handleStartStop}
              className={`px-6 py-2.5 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 ${
                isRunning 
                  ? "bg-amber-600 hover:bg-amber-500 focus:ring-amber-500/50" 
                  : "bg-blue-600 hover:bg-blue-500 focus:ring-blue-500/50"
              }`}
            >
              {isRunning ? "Stop" : "Start"}
            </button>
          ) : (
            <button
              id="resetButton"
              onClick={handleReset}
              className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500/50"
            >
              Reset
            </button>
          )}
        </div>
      </div>
      
    </div>
  );
}
