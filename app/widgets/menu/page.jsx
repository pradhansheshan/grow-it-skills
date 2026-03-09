"use client";

import { useState } from "react";

export default function MenuPage() {
  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);
  
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Menu</h1>
        <p className="mt-2 text-gray-400">Practice automating multi-layered dropdown menus via hover triggers.</p>
      </div>

      <div className="p-24 bg-gray-900 border border-gray-800 rounded-xl flex items-start justify-center min-h-[300px]">
        
        {/* Main Menu UI */}
        <ul className="flex bg-gray-950 border border-gray-700 w-full max-w-sm rounded-lg shadow-lg">
          <li className="flex-1 border-r border-gray-700">
            <a href="#" className="block px-6 py-3 text-center text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
              Main Item 1
            </a>
          </li>
          
          <li 
            className="flex-1 relative border-r border-gray-700 group"
            onMouseEnter={() => setActiveMenu1(true)}
            onMouseLeave={() => setActiveMenu1(false)}
          >
            <a href="#" className="block px-6 py-3 text-center text-gray-300 group-hover:text-white group-hover:bg-gray-800 transition-colors">
              Main Item 2
            </a>
            
            {/* SUB MENU 1 */}
            {activeMenu1 && (
              <ul className="absolute top-12 left-0 w-48 bg-gray-950 border border-gray-700 rounded-b-lg shadow-xl z-10 py-1">
                <li><a href="#" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800">Sub Item</a></li>
                <li><a href="#" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800">Sub Item</a></li>
                
                <li 
                  className="relative group/sub"
                  onMouseEnter={() => setActiveMenu2(true)}
                  onMouseLeave={() => setActiveMenu2(false)}
                >
                  <a href="#" className="flex justify-between items-center px-4 py-2 text-gray-400 group-hover/sub:text-white group-hover/sub:bg-gray-800">
                    <span>SUB SUB LIST</span>
                    <span className="text-xs">▶</span>
                  </a>

                  {/* SUB SUB MENU 2 */}
                  {activeMenu2 && (
                    <ul className="absolute -top-1 left-48 w-40 bg-gray-950 border border-gray-700 rounded-lg shadow-xl z-20 py-1">
                      <li><a href="#" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800">Sub Sub Item 1</a></li>
                      <li><a href="#" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800">Sub Sub Item 2</a></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="flex-1">
            <a href="#" className="block px-6 py-3 text-center text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
              Main Item 3
            </a>
          </li>
        </ul>

      </div>
    </div>
  );
}
