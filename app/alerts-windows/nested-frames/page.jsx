"use client";

export default function NestedFramesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 h-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Nested Frames</h1>
        <p className="mt-2 text-gray-400">Practice switching context through multiple layers of nested iframes.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white">Main Frame Layer</h3>
        <p className="text-sm text-gray-500 mb-4">The container below contains a parent iframe, which in turn contains a child iframe.</p>
        
        <div className="p-1 border-2 border-gray-800 rounded-xl bg-gray-950">
          <iframe 
            id="parentIframe"
            src="/alerts-windows/nested-frames/parent" 
            className="w-full h-96 rounded-lg bg-white"
            title="Parent Frame"
          />
        </div>
      </div>
    </div>
  );
}
