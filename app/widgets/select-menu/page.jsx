"use client";

import { useState } from "react";

export default function SelectMenuPage() {
  const [selectOne, setSelectOne] = useState("");
  const [selectTwo, setSelectTwo] = useState("blue");
  const [selectMulti, setSelectMulti] = useState([]);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Select Menu</h1>
        <p className="mt-2 text-gray-400">Practice interacting with native and custom select dropdowns.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Standard Select */}
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl space-y-2">
          <label htmlFor="oldSelectMenu" className="block text-sm font-medium text-gray-300">Old Style Select Menu</label>
          <select 
            id="oldSelectMenu" 
            value={selectTwo}
            onChange={(e) => setSelectTwo(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-950 border border-gray-700 rounded-lg text-white appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50"
          >
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
            <option value="black">Black</option>
          </select>
        </div>

        {/* Value Select Group */}
        <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl space-y-2">
          <label htmlFor="cars" className="block text-sm font-medium text-gray-300">Select Value Group</label>
          <select 
            id="cars" 
            value={selectOne}
            onChange={(e) => setSelectOne(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-950 border border-gray-700 rounded-lg text-white appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50"
          >
            <optgroup label="Swedish Cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
            </optgroup>
            <optgroup label="German Cars">
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </optgroup>
          </select>
        </div>

        {/* Multi Select */}
        <div className="col-span-1 md:col-span-2 p-6 bg-gray-900 border border-gray-800 rounded-xl space-y-2">
          <label htmlFor="carsMulti" className="block text-sm font-medium text-gray-300">Standard Multi Select (Ctrl/Cmd + Click)</label>
          <select 
            id="carsMulti" 
            multiple
            size={4}
            value={selectMulti}
            onChange={(e) => {
              const options = [...e.target.selectedOptions];
              const values = options.map(option => option.value);
              setSelectMulti(values);
            }}
            className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50"
          >
            <option value="volvo" className="p-1.5 focus:bg-blue-600 focus:text-white">Volvo</option>
            <option value="saab" className="p-1.5 focus:bg-blue-600 focus:text-white">Saab</option>
            <option value="opel" className="p-1.5 focus:bg-blue-600 focus:text-white">Opel</option>
            <option value="audi" className="p-1.5 focus:bg-blue-600 focus:text-white">Audi</option>
          </select>
        </div>

      </div>
    </div>
  );
}
