import React, { useState } from "react";
import * as XLSX from "xlsx";

export default function Files() {
  const [employees, setEmployees] = useState([]);
  const [manualEntry, setManualEntry] = useState({
    name: "",
    department: "",
    position: ""
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (evt) => {
      const data = evt.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet);
      setEmployees(json);
    };

    reader.readAsBinaryString(file);
  };

  const handleManualChange = (e) => {
    const { name, value } = e.target;
    setManualEntry((prev) => ({ ...prev, [name]: value }));
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    setEmployees((prev) => [...prev, manualEntry]);
    setManualEntry({ name: "", department: "", position: "" });
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold">Upload Excel File</h2>
      <input type="file" accept=".xlsx, .csv" onChange={handleFileUpload} />

      <h2 className="text-xl font-bold">Manual Entry</h2>
      <form onSubmit={handleManualSubmit} className="space-y-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={manualEntry.name}
          onChange={handleManualChange}
          className="border p-1 rounded"
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={manualEntry.department}
          onChange={handleManualChange}
          className="border p-1 rounded"
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={manualEntry.position}
          onChange={handleManualChange}
          className="border p-1 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
          Add Employee
        </button>
      </form>

      <h2 className="text-xl font-bold">Employee List</h2>
      <ul className="space-y-1">
        {employees.map((emp, index) => (
          <li key={index} className="border p-2 rounded">
            {emp.name || emp.Name} - {emp.department || emp.Department} - {emp.position || emp.Position}
          </li>
        ))}
      </ul>
    </div>
  );
}