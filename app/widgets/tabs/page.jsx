"use client";

import { useState } from "react";

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState("What");

  const tabsData = [
    {
      id: "What",
      label: "What",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      id: "Origin",
      label: "Origin",
      content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    },
    {
      id: "Use",
      label: "Use",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
    },
    {
      id: "More",
      label: "More",
      content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      disabled: true // A disabled tab strictly for testing
    }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Tabs</h1>
        <p className="mt-2 text-gray-400">Practice verifying context swapping connected to specific UI tab triggers.</p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        {/* Tab Headers */}
        <div className="flex border-b border-gray-800 bg-gray-950/50" role="tablist">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              disabled={tab.disabled}
              onClick={() => !tab.disabled && setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium transition-colors border-b-2 outline-none ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-500 bg-gray-800/20"
                  : tab.disabled 
                    ? "border-transparent text-gray-600 cursor-not-allowed" 
                    : "border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 text-gray-300 leading-relaxed min-h-[200px]">
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              role="tabpanel"
              id={`panel-${tab.id}`}
              className={activeTab === tab.id ? "block animate-in fade-in duration-300" : "hidden"}
            >
              <p>{tab.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
