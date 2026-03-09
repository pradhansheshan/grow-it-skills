"use client";

import { useState } from "react";

export default function DraggablePage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    e.target.setPointerCapture(e.pointerId);
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y
    });
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    e.target.releasePointerCapture(e.pointerId);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Draggable</h1>
        <p className="mt-2 text-gray-400">Practice freely dragging an element across an area.</p>
      </div>

      <div className="relative p-6 bg-gray-900 border border-gray-800 rounded-xl h-[500px] overflow-hidden">
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          className={`absolute flex flex-col items-center justify-center w-36 h-36 border-2 border-gray-700 bg-gray-950 rounded-lg shadow-xl cursor-grab active:cursor-grabbing text-gray-300 select-none transition-shadow ${
            isDragging ? "shadow-blue-900/20 border-blue-500/50" : ""
          }`}
        >
          <span className="font-semibold text-lg pb-1">Drag Me</span>
          <span className="text-xs text-gray-500 font-mono">
            X: {Math.round(position.x)}, Y: {Math.round(position.y)}
          </span>
        </div>
      </div>
    </div>
  );
}
