"use client";

import { useState } from "react";

export default function SelectablePage() {
  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros"
  ];

  const toggleSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Selectable</h1>
        <p className="mt-2 text-gray-400">Practice selecting individual or multiple items across a list.</p>
      </div>

      <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl space-y-4">
        <ul className="flex flex-col border border-gray-700 rounded-lg overflow-hidden">
          {items.map((item) => {
            const isSelected = selectedItems.includes(item);
            return (
              <li
                key={item}
                onClick={() => toggleSelect(item)}
                className={`p-4 cursor-pointer border-b border-gray-700 last:border-b-0 transition-colors ${
                  isSelected 
                    ? "bg-blue-600/20 text-blue-400" 
                    : "bg-gray-950 text-gray-300 hover:bg-gray-800"
                }`}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <p className="text-sm text-gray-400">
          Selected count: <span className="text-blue-400 font-bold">{selectedItems.length}</span>
        </p>
      </div>
    </div>
  );
}
