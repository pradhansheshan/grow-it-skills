import Link from "next/link";

const subcategories = [
  { name: "Text Box", path: "/elements/text-box", description: "Practice filling and validating form text inputs." },
  { name: "Check Box", path: "/elements/check-box", description: "Interact with checkboxes and tree-structured selections." },
  { name: "Radio Button", path: "/elements/radio-button", description: "Select options using radio button groups." },
  { name: "Web Tables", path: "/elements/web-tables", description: "Work with dynamic data tables including CRUD operations." },
  { name: "Buttons", path: "/elements/buttons", description: "Explore different button types and interactions." },
  { name: "Links", path: "/elements/links", description: "Test various link behaviors and API responses." },
  { name: "Broken Images", path: "/elements/broken-images", description: "Detect and handle broken image scenarios." },
  { name: "Dynamic Properties", path: "/elements/dynamic-properties", description: "Handle elements with dynamic IDs and delayed visibility." },
  { name: "Upload and Download", path: "/elements/upload-and-download", description: "Practice file upload and download interactions." },
];

export default function ElementsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Elements</h1>
        <p className="text-gray-400">Select a subcategory below to start practicing element interactions.</p>
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
