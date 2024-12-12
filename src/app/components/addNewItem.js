"use client";
import React, { useState } from "react";
import { ResidentForm } from "@/components/residentForm";
import { ProgramForm } from "@/components/programForm";
import "./form.css";

export function AddNewItem() {
  const options = ["Resident", "Program"];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      Add New
      <select
        id='program-resident-select'
        value={selectedOption}
        onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption === "Resident" ? <ResidentForm /> : <ProgramForm />}
    </div>
  );
}
