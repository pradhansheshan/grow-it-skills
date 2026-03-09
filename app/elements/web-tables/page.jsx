"use client";

import { useState } from "react";

export default function WebTablesPage() {
  const initialData = [
    { id: 1, firstName: "Cierra", lastName: "Vega", age: 39, email: "cierra@example.com", salary: 10000, department: "Insurance" },
    { id: 2, firstName: "Alden", lastName: "Cantrell", age: 45, email: "alden@example.com", salary: 12000, department: "Compliance" },
    { id: 3, firstName: "Kierra", lastName: "Gentry", age: 29, email: "kierra@example.com", salary: 2000, department: "Legal" },
  ];

  const [users, setUsers] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    salary: "",
    department: ""
  });

  // Handle Form Inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Handler Add/Edit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setUsers((prev) => prev.map(u => u.id === editingId ? { ...formData, id: editingId } : u));
    } else {
      setUsers((prev) => [...prev, { ...formData, id: Date.now() }]);
    }
    closeForm();
  };

  const openEditForm = (user) => {
    setFormData(user);
    setEditingId(user.id);
    setIsFormOpen(true);
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingId(null);
    setFormData({ firstName: "", lastName: "", email: "", age: "", salary: "", department: "" });
  };

  // Filter Logic
  const filteredUsers = users.filter((user) => 
    Object.values(user).some((val) => 
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Web Tables</h1>
        <p className="mt-2 text-gray-400">Practice interacting with dynamic data tables. Search, Add, Edit, and Delete records.</p>
      </div>

      <div className="space-y-4 pt-4">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          >
            Add New Record
          </button>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50"
            />
            <span className="absolute left-3 top-2.5 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </div>

        {/* Add/Edit Form */}
        {isFormOpen && (
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl relative">
            <button 
              onClick={closeForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-300"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold text-white mb-4">
              {editingId ? "Edit Record" : "Add New Record"}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300">First Name</label>
                <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded-lg text-white" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300">Last Name</label>
                <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded-lg text-white" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded-lg text-white" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300">Age</label>
                <input required type="number" name="age" value={formData.age} onChange={handleChange} className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded-lg text-white" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300">Salary</label>
                <input required type="number" name="salary" value={formData.salary} onChange={handleChange} className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded-lg text-white" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300">Department</label>
                <input required type="text" name="department" value={formData.department} onChange={handleChange} className="w-full px-3 py-2 bg-gray-950 border border-gray-800 rounded-lg text-white" />
              </div>
              <div className="sm:col-span-2 pt-2">
                <button type="submit" className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg">Submit</button>
              </div>
            </form>
          </div>
        )}

        {/* Table */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-gray-950/50 border-b border-gray-800 text-gray-400 uppercase">
              <tr>
                <th className="px-4 py-4 font-medium">First Name</th>
                <th className="px-4 py-4 font-medium">Last Name</th>
                <th className="px-4 py-4 font-medium">Age</th>
                <th className="px-4 py-4 font-medium">Email</th>
                <th className="px-4 py-4 font-medium">Salary</th>
                <th className="px-4 py-4 font-medium">Department</th>
                <th className="px-4 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-4 py-3">{user.firstName}</td>
                    <td className="px-4 py-3">{user.lastName}</td>
                    <td className="px-4 py-3">{user.age}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">{user.salary}</td>
                    <td className="px-4 py-3">{user.department}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-3">
                        <button onClick={() => openEditForm(user)} className="text-blue-400 hover:text-blue-300" title="Edit">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </button>
                        <button onClick={() => deleteUser(user.id)} className="text-red-400 hover:text-red-300" title="Delete">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-4 py-8 text-center text-gray-500">No records found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
