"use client";

import { useState, useRef, useEffect } from "react";

export default function ResizablePage() {
  const boxRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 200, height: 200 });
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing || !boxRef.current) return;
      const rect = boxRef.current.getBoundingClientRect();
      const newWidth = Math.max(100, e.clientX - rect.left);
      const newHeight = Math.max(100, e.clientY - rect.top);
      setDimensions({ width: newWidth, height: newHeight });
    };

    const handleMouseUp = () => {
      if (isResizing) setIsResizing(false);
    };

    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Resizable</h1>
        <p className="mt-2 text-gray-400">Practice interacting with resizable containers.</p>
      </div>

      <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center min-h-[400px]">
        <div 
          ref={boxRef}
          style={{ width: dimensions.width, height: dimensions.height }}
          className="relative bg-gray-950 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 select-none overflow-hidden transition-none"
        >
          <div className="text-center p-4">
            <span className="block font-medium">Resizable Box</span>
            <span className="text-xs text-gray-500">
              {Math.round(dimensions.width)} x {Math.round(dimensions.height)}
            </span>
          </div>
          
          {/* Resize handle */}
          <div 
            className="absolute bottom-0 right-0 w-6 h-6 cursor-not-allowed sm:cursor-se-resize flex items-end justify-end p-1 hover:bg-gray-800/50 rounded-tl-lg"
            onMouseDown={(e) => {
              e.preventDefault();
              setIsResizing(true);
            }}
          >
            <svg viewBox="0 0 10 10" className="w-3 h-3 text-gray-500">
              <path d="M 0,10 L 10,0" stroke="currentColor" strokeWidth="1" />
              <path d="M 5,10 L 10,5" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
