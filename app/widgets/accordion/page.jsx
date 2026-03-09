"use client";

import { useState } from "react";

export default function AccordionPage() {
  const [openSection, setOpenSection] = useState(1);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 1,
      title: "Section 1",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      id: 2,
      title: "Section 2",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
      id: 3,
      title: "Section 3",
      content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Accordion</h1>
        <p className="mt-2 text-gray-400">Practice interacting with collapsible content panels.</p>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden divide-y divide-gray-800">
        {sections.map((section) => (
          <div key={section.id} className="group">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:bg-gray-800/50 hover:bg-gray-800/30 transition-colors"
            >
              <span className="font-semibold text-gray-200">{section.title}</span>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openSection === section.id ? "rotate-180" : ""
                }`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                openSection === section.id 
                  ? "grid-rows-[1fr] opacity-100" 
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-2 text-gray-400 leading-relaxed">
                  <p>{section.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
