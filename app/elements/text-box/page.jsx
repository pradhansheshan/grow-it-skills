"use client";

import { useState } from "react";

export default function TextBoxPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    currentAddress: "",
    permanentAddress: ""
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.currentAddress.trim()) {
      newErrors.currentAddress = "Current Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when the user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
    } else {
      setSubmittedData(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Text Box</h1>
        <p className="mt-2 text-gray-400">Practice filling out a form with different text inputs.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 border border-gray-800 p-6 rounded-xl">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-2.5 bg-gray-950 border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 transition-colors ${
              errors.fullName 
                ? "border-red-500 focus:ring-red-500/50" 
                : "border-gray-800 focus:border-blue-500 focus:ring-blue-500/50"
            }`}
          />
          {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className={`w-full px-4 py-2.5 bg-gray-950 border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 transition-colors ${
              errors.email 
                ? "border-red-500 focus:ring-red-500/50" 
                : "border-gray-800 focus:border-blue-500 focus:ring-blue-500/50"
            }`}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Current Address */}
        <div className="space-y-2">
          <label htmlFor="currentAddress" className="block text-sm font-medium text-gray-300">
            Current Address
          </label>
          <textarea
            id="currentAddress"
            name="currentAddress"
            rows={3}
            value={formData.currentAddress}
            onChange={handleChange}
            placeholder="Current Address"
            className={`w-full px-4 py-2.5 bg-gray-950 border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 transition-colors resize-none ${
              errors.currentAddress 
                ? "border-red-500 focus:ring-red-500/50" 
                : "border-gray-800 focus:border-blue-500 focus:ring-blue-500/50"
            }`}
          />
          {errors.currentAddress && <p className="text-sm text-red-500">{errors.currentAddress}</p>}
        </div>

        {/* Permanent Address */}
        <div className="space-y-2">
          <label htmlFor="permanentAddress" className="block text-sm font-medium text-gray-300">
            Permanent Address
          </label>
          <textarea
            id="permanentAddress"
            name="permanentAddress"
            rows={3}
            value={formData.permanentAddress}
            onChange={handleChange}
            placeholder="Permanent Address"
            className="w-full px-4 py-2.5 bg-gray-950 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-colors resize-none"
          />
          {/* Not making this one required just to show validation variation */}
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Output Result */}
      {submittedData && (
        <div className="mt-8 p-6 bg-gray-900 border border-emerald-900/50 rounded-xl space-y-3">
          <h3 className="text-emerald-400 font-medium mb-4">Form Successfully Submitted!</h3>
          <p className="text-sm text-gray-300">
            <span className="text-gray-500 font-mono mr-2">Name:</span> 
            {submittedData.fullName}
          </p>
          <p className="text-sm text-gray-300">
            <span className="text-gray-500 font-mono mr-2">Email:</span> 
            {submittedData.email}
          </p>
          <p className="text-sm text-gray-300">
            <span className="text-gray-500 font-mono mr-2">Current Address:</span> 
            {submittedData.currentAddress}
          </p>
          {submittedData.permanentAddress && (
            <p className="text-sm text-gray-300">
              <span className="text-gray-500 font-mono mr-2">Permanent Address:</span> 
              {submittedData.permanentAddress}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
