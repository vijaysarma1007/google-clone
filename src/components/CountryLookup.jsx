"use client";
import React, { useState, useEffect } from "react";

const IP_API_KEY = process.env.NEXT_PUBLIC_IP_API_KEY;

export default function CountryLookup() {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    fetch(`https://extreme-ip-lookup.com/json/?key=${IP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);
  return <div>{country}</div>;
}
