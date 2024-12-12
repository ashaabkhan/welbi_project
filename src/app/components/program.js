"use client";
import React, { useState } from "react";
import "./list.css";
import { concatItems, convertToMonthYearDay } from "@/utils";

export const ProgramList = ({ items, title }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const isItemSelected = (item) => selectedItem === item;

  const handleSelect = (item) => {
    if (isItemSelected(item) ? setSelectedItem(null) : setSelectedItem(item));
  };

  return (
    <div>
      <div className='listHeader'>{title}</div>
      <ul className='listBox'>
        {items.map((item) => (
          <li
            key={item.id}
            className={`listItem ${isItemSelected(item) ? "selectedItem" : ""}`}
            onClick={() => handleSelect(item)}>
            {listItem(item, isItemSelected(item))}
          </li>
        ))}
      </ul>
    </div>
  );
};

const listItem = (item, selected) => {
  return (
    <div>
      <div>
        {item.id} - {item.name}
      </div>
      <div>Location: {item.location}</div>
      <div>
        Duration: {convertToMonthYearDay(item.start)} -
        {convertToMonthYearDay(item.end)}
      </div>
      <div>All day: {item.allDay === true ? "Yes" : " No"}</div>
      <div>Facilitators: {concatItems(item.facilitators)}</div>
      <div className='updatedTag'>
        Last updated at {convertToMonthYearDay(item.updatedAt)}
      </div>
      {selected ? extendedDetails(item) : "Click to show more details"}
    </div>
  );
};

const extendedDetails = (item) => {
  return (
    <div className='extended'>
      <div>Dimension: {item.dimension}</div>
      <div>Hobbies: {concatItems(item.hobbies)}</div>
      <div>
        Attendence:
        {concatItems(item.attendance.map((item) => item.residentId))}
      </div>
      <div>Level of care: {concatItems(item.levelOfCare)}</div>
      <div>Click to hide details</div>
    </div>
  );
};
