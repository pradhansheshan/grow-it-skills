"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar({ isOpen, onClose }) {
  const [openCategories, setOpenCategories] = useState({ Elements: true });

  const toggleCategory = (categoryName) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const categories = [
    {
      name: "Elements",
      subcategories: [
        { name: "Text Box", path: "/elements/text-box" },
        { name: "Check Box", path: "/elements/check-box" },
        { name: "Radio Button", path: "/elements/radio-button" },
        { name: "Web Tables", path: "/elements/web-tables" },
        { name: "Buttons", path: "/elements/buttons" },
        { name: "Links", path: "/elements/links" },
        { name: "Broken Images", path: "/elements/broken-images" },
        { name: "Dynamic Properties", path: "/elements/dynamic-properties" },
        { name: "Upload and Download", path: "/elements/upload-and-download" },
      ]
    },
    {
      name: "Alerts, Frame & Windows",
      subcategories: [
        { name: "Browser Windows", path: "/alerts-windows/browser-windows" },
        { name: "Alerts", path: "/alerts-windows/alerts" },
        { name: "Frames", path: "/alerts-windows/frames" },
        { name: "Nested Frames", path: "/alerts-windows/nested-frames" },
        { name: "Modal Dialogs", path: "/alerts-windows/modal-dialogs" }
      ]
    },
    {
      name: "Widgets",
      subcategories: [
        { name: "Accordion", path: "/widgets/accordion" },
        { name: "Auto Complete", path: "/widgets/auto-complete" },
        { name: "Date Picker", path: "/widgets/date-picker" },
        { name: "Slider", path: "/widgets/slider" },
        { name: "Progress Bar", path: "/widgets/progress-bar" },
        { name: "Tabs", path: "/widgets/tabs" },
        { name: "Tool Tips", path: "/widgets/tool-tips" },
        { name: "Menu", path: "/widgets/menu" },
        { name: "Select Menu", path: "/widgets/select-menu" }
      ]
    },
    {
      name: "Interactions",
      subcategories: [
        { name: "Sortable", path: "/interactions/sortable" },
        { name: "Selectable", path: "/interactions/selectable" },
        { name: "Resizable", path: "/interactions/resizable" },
        { name: "Droppable", path: "/interactions/droppable" },
        { name: "Draggable", path: "/interactions/draggable" }
      ]
    }
  ];

  const sidebarContent = (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-100">Categories</h2>
        {/* Close button — mobile only */}
        <button
          onClick={onClose}
          className="md:hidden p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          aria-label="Close menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <ul className="space-y-1">
        {categories.map((category) => (
          <li key={category.name} className="py-1">
            <button
              onClick={() => toggleCategory(category.name)}
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors text-left"
            >
              {category.name}
              <svg
                className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-300 ${
                  openCategories[category.name] ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                openCategories[category.name]
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <ul className="mt-1 ml-4 pl-3 border-l border-gray-800 space-y-1 pb-1">
                  {category.subcategories.map((sub) => (
                    <li key={sub.name}>
                      <Link
                        href={sub.path}
                        onClick={onClose}
                        className="block px-3 py-1.5 rounded-md text-sm text-gray-500 hover:bg-gray-800/50 hover:text-gray-200 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <>
      {/* Desktop sidebar — always visible */}
      <aside className="w-64 flex-shrink-0 border-r border-gray-800 bg-gray-950/50 min-h-[calc(100vh-4rem)] p-4 hidden md:block">
        {sidebarContent}
      </aside>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-gray-950 border-r border-gray-800 p-4 overflow-y-auto
          transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
