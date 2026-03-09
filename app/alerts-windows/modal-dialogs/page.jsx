"use client";

import { useState } from "react";

export default function ModalDialogsPage() {
  const [smallModalOpen, setSmallModalOpen] = useState(false);
  const [largeModalOpen, setLargeModalOpen] = useState(false);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Modal Dialogs</h1>
        <p className="mt-2 text-gray-400">Practice interacting with custom application level modal components.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 p-6 bg-gray-900 border border-gray-800 rounded-xl items-center justify-center">
        <button
          id="showSmallModal"
          onClick={() => setSmallModalOpen(true)}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 w-full sm:w-auto text-white font-medium rounded-lg transition-colors"
        >
          Small modal
        </button>

        <button
          id="showLargeModal"
          onClick={() => setLargeModalOpen(true)}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 w-full sm:w-auto text-white font-medium rounded-lg transition-colors"
        >
          Large modal
        </button>
      </div>

      {/* Small Modal Overlay */}
      {smallModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-gray-900 border border-gray-800 w-full max-w-sm rounded-xl shadow-2xl p-6 relative animate-in fade-in zoom-in duration-200">
            <h3 className="text-xl font-bold text-white mb-4">Small Modal</h3>
            <p className="text-gray-400 text-sm mb-6">
              This is a small modal. It has very little content inside.
            </p>
            <div className="flex justify-end">
              <button 
                id="closeSmallModal"
                onClick={() => setSmallModalOpen(false)}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
            {/* Absolute close button (like 'x' in corner) */}
            <button 
               onClick={() => setSmallModalOpen(false)}
               className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Large Modal Overlay */}
      {largeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-gray-900 border border-gray-800 w-full max-w-3xl rounded-xl shadow-2xl p-6 relative animate-in fade-in zoom-in duration-200">
            <h3 className="text-2xl font-bold text-white mb-4">Large Modal</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="flex justify-end">
              <button 
                id="closeLargeModal"
                onClick={() => setLargeModalOpen(false)}
                className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
             <button 
               onClick={() => setLargeModalOpen(false)}
               className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
