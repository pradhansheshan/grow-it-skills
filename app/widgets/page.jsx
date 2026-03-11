import Link from "next/link";

const subcategories = [
  { name: "Accordion", path: "/widgets/accordion", description: "Expand and collapse accordion sections." },
  { name: "Auto Complete", path: "/widgets/auto-complete", description: "Test single and multi-value auto-complete inputs." },
  { name: "Date Picker", path: "/widgets/date-picker", description: "Select dates and times using date picker widgets." },
  { name: "Slider", path: "/widgets/slider", description: "Drag sliders to set numeric values." },
  { name: "Progress Bar", path: "/widgets/progress-bar", description: "Start, stop, and reset a progress bar." },
  { name: "Tabs", path: "/widgets/tabs", description: "Switch between tabbed content panels." },
  { name: "Tool Tips", path: "/widgets/tool-tips", description: "Hover over elements to reveal tooltips." },
  { name: "Menu", path: "/widgets/menu", description: "Navigate multi-level dropdown menus." },
  { name: "Select Menu", path: "/widgets/select-menu", description: "Use various types of select/dropdown menus." },
];

export default function WidgetsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Widgets</h1>
        <p className="text-gray-400">Select a subcategory below to start practicing with UI widgets.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subcategories.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="block p-5 rounded-lg border border-gray-700 bg-gray-900 hover:border-blue-500 hover:bg-gray-800 transition-colors group"
          >
            <h2 className="text-lg font-semibold text-white group-hover:text-blue-400 mb-1">{item.name}</h2>
            <p className="text-sm text-gray-400">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
