"use client";

export default function BrowserWindowsPage() {
  const openNewTab = () => {
    window.open("/sample", "_blank");
  };

  const openNewWindow = () => {
    window.open("/sample", "_blank", "width=500,height=500,left=200,top=200");
  };

  const openWindowWithMessage = () => {
    const newWindow = window.open("", "_blank", "width=400,height=400,left=300,top=300");
    if (newWindow) {
      newWindow.document.write(
        `<div style="font-family: sans-serif; padding: 20px;">
          <h3 style="font-size: 24px; font-weight: bold;">Window Message</h3>
          <p>Knowledge increases by sharing but not by saving.</p>
        </div>`
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Browser Windows</h1>
        <p className="mt-2 text-gray-400">Practice switching between tabs and browser window instances.</p>
      </div>

      <div className="space-y-6">
        {/* New Tab */}
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-between">
          <span className="text-gray-200">Opens a new tab with sample content</span>
          <button
            id="tabButton"
            onClick={openNewTab}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            New Tab
          </button>
        </div>

        {/* New Window */}
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-between">
          <span className="text-gray-200">Opens a new separate browser window</span>
          <button
            id="windowButton"
            onClick={openNewWindow}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            New Window
          </button>
        </div>

        {/* New Window with Message */}
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-between">
          <span className="text-gray-200">Opens a new window containing a message block</span>
          <button
            id="messageWindowButton"
            onClick={openWindowWithMessage}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            New Window Message
          </button>
        </div>
      </div>
    </div>
  );
}
