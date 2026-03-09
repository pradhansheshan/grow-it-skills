"use client";

export default function FramesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 h-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Frames</h1>
        <p className="mt-2 text-gray-400">Practice switching driver contexts between iframes to retrieve information.</p>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-white">Frame 1</h3>
          <div className="p-1 border-2 border-gray-800 rounded-xl bg-gray-950">
            <iframe 
              id="frame1"
              src="/sample" 
              className="w-full h-48 rounded-lg bg-white"
              title="First Frame"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium text-white">Frame 2</h3>
          <div className="p-1 border-2 border-gray-800 rounded-xl bg-gray-950">
            <iframe 
              id="frame2"
              src="/sample" 
              className="w-full h-32 rounded-lg bg-white"
              title="Second Frame"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
