"use client";

import { useState } from "react";

export default function SortablePage() {
  const [items, setItems] = useState(["One", "Two", "Three", "Four", "Five", "Six"]);
  const [draggedIdx, setDraggedIdx] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedIdx(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === index) return;
    
    const newItems = [...items];
    const draggedItem = newItems.splice(draggedIdx, 1)[0];
    newItems.splice(index, 0, draggedItem);
    
    setDraggedIdx(index);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggedIdx(null);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Sortable</h1>
        <p className="mt-2 text-gray-400">Practice interacting with drag-and-drop sortable lists.</p>
      </div>

      <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl space-y-4">
        <h2 className="text-lg font-medium text-gray-300">List</h2>
        <div className="flex flex-col space-y-1">
          {items.map((item, index) => (
            <div
              key={item}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={`p-4 border border-gray-700 bg-gray-950 rounded cursor-move text-gray-300 hover:bg-gray-800 transition-colors ${
                draggedIdx === index ? "opacity-50" : "opacity-100"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
