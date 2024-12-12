"use client";
import React, { useState } from "react";
import "./list.css";
import { concatItems, convertToMonthYearDay } from "@/utils";

export const List = ({ items, title }) => {
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
      <div className='itemHeader'>
        {item.id} - {item.firstName} {item.lastName}, Ambulation:{" "}
        {item.ambulation}
      </div>
      <div>Status: {item.status} </div>
      <div>Room: {item.room}</div>
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
      <div>
        Preferred name: {item.preferredName || "None"}, Date of Birth:
        {convertToMonthYearDay(item.birthDate, false)}
      </div>
      <div>Level of care: {item.levelOfCare}</div>
      <div>Move in date: {convertToMonthYearDay(item.moveInDate, false)} </div>
      <div>Program Attendence: {item.attendance}</div>
      <div>Click to hide details</div>
    </div>
  );
};
