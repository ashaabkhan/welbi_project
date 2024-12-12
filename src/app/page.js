"use client";
import { List } from "@/components/list";
import { ProgramList } from "@/components/program";
import { AddNewItem } from "@/components/addNewItem";
import { getRequest, postRequest } from "@/services";
import { RESIDENTS_URL, PROGRAMS_URL, AUTH_TOKEN } from "@/constants";
import React, { useState, useEffect } from "react";
import "./page.css";

export default function Home() {
  const [residents, setResidents] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchResidents = async () => {
    const data = await getRequest(RESIDENTS_URL);
    console.log("testing data", data);
    setResidents(data);
    setLoading(false);
  };

  const fetchPrograms = async () => {
    const data = await getRequest(PROGRAMS_URL);
    console.log("testing PROGRAMS_URL", data);
    setPrograms(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchResidents();
    fetchPrograms();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='page'>
      <List items={residents} title={"Residents"} />
      <ProgramList items={programs} title={"Programs"} />
      <AddNewItem />
    </div>
  );
}
