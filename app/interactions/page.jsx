import Link from "next/link";

const subcategories = [
  { name: "Sortable", path: "/interactions/sortable", description: "Reorder list or grid items via drag and drop." },
  { name: "Selectable", path: "/interactions/selectable", description: "Click or drag to select multiple items." },
  { name: "Resizable", path: "/interactions/resizable", description: "Resize elements by dragging their handles." },
  { name: "Droppable", path: "/interactions/droppable", description: "Drag elements and drop them into target zones." },
  { name: "Draggable", path: "/interactions/draggable", description: "Freely drag elements around the viewport." },
];

export default function InteractionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Interactions</h1>
        <p className="text-gray-400">Select a subcategory below to practice drag-and-drop and other interactions.</p>
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
