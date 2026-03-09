"use client";

export default function ParentFramePage() {
  return (
    <div className="h-screen w-full bg-blue-50 text-blue-900 p-8">
      <h2 id="parentFrameText" className="text-2xl font-bold mb-4">Parent frame</h2>
      <div className="p-2 bg-blue-200 border-2 border-blue-400 rounded-lg inline-block w-full max-w-lg h-64">
        <iframe 
          id="childIframe"
          src="/alerts-windows/nested-frames/child" 
          className="w-full h-full bg-white rounded"
          title="Child Frame"
        />
      </div>
    </div>
  );
}
