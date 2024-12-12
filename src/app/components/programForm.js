"use client";
import React, { useState } from "react";
import { programFormData } from "@/defaultFormStates";
import { formHandleChange, formHandleSubmit } from "@/utils";
import { PROGRAMS_URL } from "@/constants";

import "./form.css";

export function ProgramForm() {
  const [formData, setFormData] = useState(programFormData);

  const handleSubmit = (e) => {
    formHandleSubmit(e, setFormData, formData, PROGRAMS_URL, programFormData);
  };

  const handleChange = (e) => {
    formHandleChange(e, setFormData, formData);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label>Name:</label>
      <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Location:</label>
      <input
        type='text'
        name='location'
        value={formData.location}
        onChange={handleChange}
        required
      />

      <label>Start Time:</label>
      <input
        type='datetime-local'
        name='start'
        value={formData.start}
        onChange={handleChange}
        required
      />

      <label>End Time:</label>
      <input
        type='datetime-local'
        name='end'
        value={formData.end}
        onChange={handleChange}
        required
      />

      <label>Hobbies:</label>
      <input
        type='text'
        name='hobbies'
        value={formData.hobbies}
        onChange={handleChange}
        required
      />

      <label>Tags:</label>
      <input
        type='text'
        name='tags'
        value={formData.tags}
        onChange={handleChange}
        required
      />

      <label>Dimension:</label>
      <input
        type='text'
        name='dimension'
        value={formData.dimension}
        onChange={handleChange}
        required
      />

      <label>Facilitators:</label>
      <input
        type='text'
        name='facilitators'
        value={formData.facilitators}
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

      <label>All Day:</label>
      <input
        type='checkbox'
        name='allDay'
        checked={formData.allDay}
        onChange={handleChange}
      />

      <label>Is Repeated:</label>
      <input
        type='checkbox'
        name='isRepeated'
        checked={formData.isRepeated}
        onChange={handleChange}
      />

      <button type='submit'>Create Program</button>
    </form>
  );
}
