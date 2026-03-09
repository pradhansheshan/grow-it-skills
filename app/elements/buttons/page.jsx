"use client";

import { useState } from "react";

export default function ButtonsPage() {
  const [messages, setMessages] = useState({
    doubleClick: "",
    rightClick: "",
    dynamicClick: ""
  });

  const handleDoubleClick = () => {
    setMessages(prev => ({ ...prev, doubleClick: "You have done a double click" }));
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setMessages(prev => ({ ...prev, rightClick: "You have done a right click" }));
  };

  const handleDynamicClick = () => {
    setMessages(prev => ({ ...prev, dynamicClick: "You have done a dynamic click" }));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Buttons</h1>
        <p className="mt-2 text-gray-400">Practice interacting with different types of mouse clicks.</p>
      </div>

      <div className="flex flex-col space-y-6 bg-gray-900 border border-gray-800 p-6 rounded-xl">
        {/* Double Click */}
        <div>
          <button
            onDoubleClick={handleDoubleClick}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            Double Click Me
          </button>
        </div>

        {/* Right Click */}
        <div>
          <button
            onContextMenu={handleRightClick}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            Right Click Me
          </button>
        </div>

        {/* Dynamic Click */}
        <div>
          <button
            onClick={handleDynamicClick}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            Click Me
          </button>
        </div>
      </div>

      {/* Results */}
      {(messages.doubleClick || messages.rightClick || messages.dynamicClick) && (
        <div className="mt-8 p-6 bg-gray-900 border border-emerald-900/50 rounded-xl space-y-2">
          {messages.doubleClick && <p id="doubleClickMessage" className="text-emerald-400">{messages.doubleClick}</p>}
          {messages.rightClick && <p id="rightClickMessage" className="text-emerald-400">{messages.rightClick}</p>}
          {messages.dynamicClick && <p id="dynamicClickMessage" className="text-emerald-400">{messages.dynamicClick}</p>}
        </div>
      )}
    </div>
  );
}
