import Link from "next/link";

const subcategories = [
  { name: "Browser Windows", path: "/alerts-windows/browser-windows", description: "Open and interact with new browser windows and tabs." },
  { name: "Alerts", path: "/alerts-windows/alerts", description: "Handle JavaScript alert, confirm, and prompt dialogs." },
  { name: "Frames", path: "/alerts-windows/frames", description: "Switch between iframes and interact with their content." },
  { name: "Nested Frames", path: "/alerts-windows/nested-frames", description: "Work with frames nested inside other frames." },
  { name: "Modal Dialogs", path: "/alerts-windows/modal-dialogs", description: "Interact with modal dialog overlays." },
];

export default function AlertsWindowsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Alerts, Frame &amp; Windows</h1>
        <p className="text-gray-400">Select a subcategory below to practice handling alerts, frames, and windows.</p>
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
