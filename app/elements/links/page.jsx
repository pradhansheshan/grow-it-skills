"use client";

import { useState } from "react";
import Link from "next/link";

export default function LinksPage() {
  const [apiResponse, setApiResponse] = useState("");

  const handleApiLink = (e, status, text) => {
    e.preventDefault();
    setApiResponse(`Link has responded with staus ${status} and status text ${text}`);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Links</h1>
        <p className="mt-2 text-gray-400">Practice interacting with different types of links and routing behaviors.</p>
      </div>

      {/* Standard Links */}
      <div className="space-y-4 bg-gray-900 border border-gray-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-2">Following links will open new tab</h3>
        <div className="space-y-2">
          <Link
            href="/"
            target="_blank"
            className="text-blue-500 hover:text-blue-400 font-medium underline-offset-4 hover:underline block"
          >
            Home
          </Link>
          <Link
            id="dynamicLink"
            href="/"
            target="_blank"
            className="text-blue-500 hover:text-blue-400 font-medium underline-offset-4 hover:underline block"
          >
            Homeo (Dynamic Link)
          </Link>
        </div>
      </div>

      {/* API Links */}
      <div className="space-y-4 bg-gray-900 border border-gray-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-2">Following links will send an api call</h3>
        <div className="grid grid-cols-2 gap-4">
          <a href="#" onClick={(e) => handleApiLink(e, 201, "Created")} className="text-blue-500 hover:text-blue-400 font-medium">Created</a>
          <a href="#" onClick={(e) => handleApiLink(e, 204, "No Content")} className="text-blue-500 hover:text-blue-400 font-medium">No Content</a>
          <a href="#" onClick={(e) => handleApiLink(e, 301, "Moved Permanently")} className="text-blue-500 hover:text-blue-400 font-medium">Moved</a>
          <a href="#" onClick={(e) => handleApiLink(e, 400, "Bad Request")} className="text-blue-500 hover:text-blue-400 font-medium">Bad Request</a>
          <a href="#" onClick={(e) => handleApiLink(e, 401, "Unauthorized")} className="text-blue-500 hover:text-blue-400 font-medium">Unauthorized</a>
          <a href="#" onClick={(e) => handleApiLink(e, 403, "Forbidden")} className="text-blue-500 hover:text-blue-400 font-medium">Forbidden</a>
          <a href="#" onClick={(e) => handleApiLink(e, 404, "Not Found")} className="text-blue-500 hover:text-blue-400 font-medium">Not Found</a>
        </div>

        {apiResponse && (
          <div className="mt-4 p-4 border border-blue-900 bg-blue-950/30 rounded-lg">
            <p className="text-blue-400 font-medium">{apiResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
}
