"use client";

import { useState } from "react";

export default function DatePickerPage() {
  const [date, setDate] = useState("");
  const [dateTime, setDateTime] = useState("");

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Date Picker</h1>
        <p className="mt-2 text-gray-400">Practice interacting with date and time selection inputs.</p>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl space-y-4">
          <label htmlFor="datePicker" className="block text-sm font-medium text-gray-300">Select Date</label>
          <input
            type="date"
            id="datePicker"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 bg-gray-950 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 [color-scheme:dark]"
          />
          {date && <p className="text-sm text-emerald-400 mt-2">Selected: {date}</p>}
        </div>

        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl space-y-4">
          <label htmlFor="dateTimePicker" className="block text-sm font-medium text-gray-300">Date And Time</label>
          <input
            type="datetime-local"
            id="dateTimePicker"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 bg-gray-950 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 [color-scheme:dark]"
          />
          {dateTime && <p className="text-sm text-emerald-400 mt-2">Selected: {dateTime.replace('T', ' ')}</p>}
        </div>
      </div>
    </div>
  );
}
