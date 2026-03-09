"use client";

import { useState } from "react";

export default function DroppablePage() {
  const [isDropped, setIsDropped] = useState(false);
  const [isOver, setIsOver] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", "draggable-item");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (!isDropped) {
        setIsOver(true);
    }
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsOver(false);
    const data = e.dataTransfer.getData("text/plain");
    if (data === "draggable-item") {
      setIsDropped(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Droppable</h1>
        <p className="mt-2 text-gray-400">Practice dragging elements into specific drop targets.</p>
      </div>

      <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[250px] items-center">
          
          <div className="flex justify-center">
            {!isDropped ? (
              <div 
                draggable
                onDragStart={handleDragStart}
                className="w-32 h-32 bg-blue-600/20 border-2 border-blue-500 rounded-lg flex items-center justify-center cursor-move text-blue-300 hover:bg-blue-600/30 transition-colors"
              >
                Drag me
              </div>
            ) : (
                <div className="w-32 h-32 flex items-center justify-center text-gray-600 border-2 border-dashed border-gray-800 rounded-lg">
                    Moved
                </div>
            )}
          </div>

          <div className="flex justify-center h-full">
            <div 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`w-full h-full min-h-[200px] border-2 border-dashed rounded-xl flex items-center justify-center transition-colors ${
                isDropped 
                  ? "bg-green-900/20 border-green-500 text-green-400" 
                  : isOver
                    ? "bg-blue-900/20 border-blue-400 text-blue-300"
                    : "bg-gray-950 border-gray-700 text-gray-500"
              }`}
            >
              {isDropped ? "Dropped!" : "Drop here"}
            </div>
          </div>
          
        </div>

        {isDropped && (
            <div className="flex justify-center">
                <button 
                    onClick={() => setIsDropped(false)}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                    Reset Demo
                </button>
            </div>
        )}
      </div>
    </div>
  );
}
