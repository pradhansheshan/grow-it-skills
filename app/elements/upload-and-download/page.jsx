"use client";

import { useState } from "react";

export default function UploadAndDownloadPage() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Simulate standard browser fakepath behavior for testing validations
      setUploadedFile(`C:\\fakepath\\${file.name}`);
    } else {
      setUploadedFile(null);
    }
  };

  const handleDownload = () => {
    // Generate a dummy text file to download on the fly
    const blob = new Blob(["This is a dummy file for testing download functionality."], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sampleFile.jpeg"; // Mocking a standard image download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Upload and Download</h1>
        <p className="mt-2 text-gray-400">Practice interacting with file selection and file download dialogues.</p>
      </div>

      <div className="space-y-8">
        {/* Download Section */}
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl space-y-4">
          <h3 className="text-lg font-medium text-white mb-2">Download File</h3>
          <p className="text-sm text-gray-400 mb-4">Click below to test downloading a file straight to your machine.</p>
          <button
            onClick={handleDownload}
            id="downloadButton"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            Download
          </button>
        </div>

        {/* Upload Section */}
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl space-y-4">
          <h3 className="text-lg font-medium text-white mb-2">Upload File</h3>
          <p className="text-sm text-gray-400 mb-4">Select a file to simulate testing upload inputs.</p>
          
          <div className="flex flex-col space-y-4">
            <input
              type="file"
              id="uploadFile"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-400
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-medium
                file:bg-blue-600 file:text-white
                hover:file:bg-blue-500
                file:cursor-pointer file:transition-colors focus:outline-none"
            />
            
            {/* Display selected file path */}
            {uploadedFile && (
              <div className="mt-4 p-4 border border-emerald-900 bg-emerald-950/30 rounded-lg">
                <p className="text-gray-300 text-sm">Validating Path:</p>
                <p className="text-emerald-400 font-mono text-sm mt-1" id="uploadedFilePath">
                  {uploadedFile}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
