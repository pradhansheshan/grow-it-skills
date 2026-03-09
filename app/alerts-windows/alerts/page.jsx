"use client";

import { useState } from "react";

export default function AlertsPage() {
  const [confirmResult, setConfirmResult] = useState("");
  const [promptResult, setPromptResult] = useState("");

  const triggerAlert = () => {
    alert("You clicked a button");
  };

  const triggerTimerAlert = () => {
    setTimeout(() => {
      alert("This alert appeared after 5 seconds");
    }, 5000);
  };

  const triggerConfirm = () => {
    const result = confirm("Do you confirm action?");
    if (result) {
      setConfirmResult("You selected Ok");
    } else {
      setConfirmResult("You selected Cancel");
    }
  };

  const triggerPrompt = () => {
    const result = prompt("Please enter your name");
    if (result !== null) {
      setPromptResult(`You entered ${result}`);
    } else {
      setPromptResult("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Alerts</h1>
        <p className="mt-2 text-gray-400">Practice handling JavaScript alerts, confirms, and prompts native to the browser.</p>
      </div>

      <div className="space-y-6">
        {/* Standard Alert */}
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-between">
          <span className="text-gray-200">Click Button to see alert</span>
          <button
            id="alertButton"
            onClick={triggerAlert}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            Click me
          </button>
        </div>

        {/* Timer Alert */}
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-between">
          <span className="text-gray-200">On button click, alert will appear after 5 seconds</span>
          <button
            id="timerAlertButton"
            onClick={triggerTimerAlert}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            Click me
          </button>
        </div>

        {/* Confirm Box */}
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-200">On button click, confirm box will appear</span>
            <button
              id="confirmButton"
              onClick={triggerConfirm}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              Click me
            </button>
          </div>
          {confirmResult && (
            <p className="text-emerald-400 text-sm mt-2">
              <span className="text-gray-400">Result: </span>
              <span id="confirmResult">{confirmResult}</span>
            </p>
          )}
        </div>

        {/* Prompt Box */}
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-200">On button click, prompt box will appear</span>
            <button
              id="promptButton"
              onClick={triggerPrompt}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              Click me
            </button>
          </div>
          {promptResult && (
            <p className="text-emerald-400 text-sm mt-2">
               <span className="text-gray-400">Result: </span>
               <span id="promptResult">{promptResult}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
