"use client";

import { useState, useEffect } from "react";

export default function CheckBoxPage() {
  const [expanded, setExpanded] = useState({ home: true });
  
  // State for checkboxes
  const [checked, setChecked] = useState({
    home: false,
    desktop: false,
    documents: false,
    downloads: false,
  });

  const toggleExpand = (folder) => {
    setExpanded(prev => ({ ...prev, [folder]: !prev[folder] }));
  };

  // Logic to handle parent/child checkbox interactions
  const handleCheck = (item) => {
    if (item === "home") {
      const newValue = !checked.home;
      setChecked({
        home: newValue,
        desktop: newValue,
        documents: newValue,
        downloads: newValue
      });
    } else {
      setChecked(prev => {
        const next = { ...prev, [item]: !prev[item] };
        // Check if all children are true
        const allChildrenChecked = next.desktop && next.documents && next.downloads;
        next.home = allChildrenChecked;
        return next;
      });
    }
  };

  // Get active items for the result display
  const getSelectedItems = () => {
    const items = [];
    if (checked.home) items.push("home");
    if (checked.desktop) items.push("desktop");
    if (checked.documents) items.push("documents");
    if (checked.downloads) items.push("downloads");
    return items;
  };

  const selectedItems = getSelectedItems();

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Check Box</h1>
        <p className="mt-2 text-gray-400">Practice interacting with a unified checkbox tree.</p>
      </div>

      <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl space-y-4">
        {/* Tree Structure */}
        <ul className="text-gray-300 select-none">
          {/* Home Folder */}
          <li>
            <div className="flex items-center space-x-2 py-1">
              <button 
                onClick={() => toggleExpand('home')} 
                className="w-5 h-5 flex items-center justify-center text-gray-500 hover:text-white"
              >
                {expanded.home ? "▼" : "▶"}
              </button>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={checked.home}
                  onChange={() => handleCheck('home')}
                  className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500/50 focus:ring-offset-gray-900"
                />
                <span className="flex items-center space-x-2">
                  <span className="text-blue-400">📁</span>
                  <span>Home</span>
                </span>
              </label>
            </div>

            {/* Sub Folders */}
            {expanded.home && (
              <ul className="ml-8 space-y-1 mt-1 border-l border-gray-800 pl-4">
                <li>
                  <label className="flex items-center space-x-2 cursor-pointer py-1">
                    <input 
                      type="checkbox" 
                      checked={checked.desktop}
                      onChange={() => handleCheck('desktop')}
                      className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500/50 focus:ring-offset-gray-900"
                    />
                    <span className="flex items-center space-x-2">
                      <span className="text-blue-400">📂</span>
                      <span>Desktop</span>
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2 cursor-pointer py-1">
                    <input 
                      type="checkbox" 
                      checked={checked.documents}
                      onChange={() => handleCheck('documents')}
                      className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500/50 focus:ring-offset-gray-900"
                    />
                    <span className="flex items-center space-x-2">
                      <span className="text-blue-400">📂</span>
                      <span>Documents</span>
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2 cursor-pointer py-1">
                    <input 
                      type="checkbox" 
                      checked={checked.downloads}
                      onChange={() => handleCheck('downloads')}
                      className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500/50 focus:ring-offset-gray-900"
                    />
                    <span className="flex items-center space-x-2">
                      <span className="text-blue-400">📂</span>
                      <span>Downloads</span>
                    </span>
                  </label>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Results Output */}
      {selectedItems.length > 0 && (
        <div className="mt-8 p-6 bg-gray-900 border border-emerald-900/50 rounded-xl space-y-2">
          <p className="text-gray-300">You have selected:</p>
          <div className="text-emerald-400 font-medium">
            {selectedItems.map((item, id) => (
              <span key={item}>
                {item}{id < selectedItems.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
