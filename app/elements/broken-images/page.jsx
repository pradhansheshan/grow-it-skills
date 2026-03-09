"use client";

import Link from "next/link";
import Image from "next/image";

export default function BrokenImagesPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Broken Images</h1>
        <p className="mt-2 text-gray-400">Practice identifying perfectly loaded elements vs. unresolved/broken elements.</p>
      </div>

      <div className="space-y-8">
        {/* Valid Image Section */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl space-y-4">
          <p className="text-lg font-medium text-white mb-2">Valid Image</p>
          <div className="border border-gray-800 bg-gray-950 p-2 inline-block rounded">
            {/* Using a reliable placeholder for valid image */}
            <img 
              src="https://placehold.co/300x100/1e40af/ffffff?text=Valid+Image" 
              alt="Valid representation" 
              className="rounded"
            />
          </div>
        </div>

        {/* Broken Image Section */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl space-y-4">
          <p className="text-lg font-medium text-white mb-2">Broken Image</p>
          <div className="border border-gray-800 bg-gray-950 p-2 inline-block rounded w-[300px] h-[100px] flex items-center justify-center overflow-hidden">
            {/* Purposely giving it a bad url to trigger browser default broken icon */}
            <img 
              src="/this-image-path-does-not-exist.jpg" 
              alt="Broken representation" 
            />
          </div>
        </div>
        
        {/* Links Section */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl space-y-4">
          <p className="text-lg font-medium text-white mb-2">Valid Link</p>
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-400 font-medium underline-offset-4 hover:underline block"
          >
            Click Here for Valid Link
          </a>

          <div className="w-full h-px bg-gray-800 my-4"></div>

          <p className="text-lg font-medium text-white mb-2">Broken Link</p>
          <a
            href="http://the-internet.herokuapp.com/status_codes/500"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-400 font-medium underline-offset-4 hover:underline block"
          >
            Click Here for Broken Link
          </a>
        </div>
      </div>
    </div>
  );
}
