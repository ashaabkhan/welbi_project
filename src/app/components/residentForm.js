"use client";
import React, { useState } from "react";
import { residentFormData } from "@/defaultFormStates";
import { formHandleChange, formHandleSubmit } from "@/utils";
import { RESIDENTS_URL } from "@/constants";

import "./form.css";

export function ResidentForm() {
  const [formData, setFormData] = useState(residentFormData);

  const handleSubmit = (e) => {
    formHandleSubmit(e, setFormData, formData, RESIDENTS_URL, residentFormData);
  };

  const handleChange = (e) => {
    formHandleChange(e, setFormData, formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>First Name:</label>
        <input
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label>Last Name:</label>
        <input
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label>Preferred Name:</label>
        <input
          type='text'
          name='preferredName'
          value={formData.preferredName}
          onChange={handleChange}
        />

        <label>Birth Date:</label>
        <input
          type='date'
          name='birthDate'
          value={formData.birthDate}
          onChange={handleChange}
          required
        />

        <label>Move In Date:</label>
        <input
          type='date'
          name='moveInDate'
          value={formData.moveInDate}
          onChange={handleChange}
          required
        />

        <label>Room:</label>
        <input
          type='text'
          name='room'
          value={formData.room}
          onChange={handleChange}
          required
        />

        <label>Level of Care:</label>
        <select
          name='levelOfCare'
          value={formData.levelOfCare}
          onChange={handleChange}
          required>
          <option>Choose an option</option>
          <option value='INDEPENDENT'>INDEPENDENT</option>
          <option value='ASSISTED'>ASSISTED</option>
          <option value='MEMORY'>MEMORY</option>
          <option value='LONGTERM'>LONGTERM</option>
        </select>

        <label>Status:</label>
        <input
          type='text'
          name='status'
          value={formData.status}
          onChange={handleChange}
        />

        <label>ambulation:</label>
        <select
          name='ambulation'
          value={formData.ambulation}
          onChange={handleChange}
          required>
          <option>Choose an option</option>
          <option value='NOLIMITATIONS'>NOLIMITATIONS</option>
          <option value='CANE'>CANE</option>
          <option value='WALKER'>WALKER</option>
          <option value='WHEELCHAIR'>WHEELCHAIR</option>
        </select>

        <button className='submitButton' type='submit'>
          Create Resident
        </button>
      </form>
    </div>
  );
}
