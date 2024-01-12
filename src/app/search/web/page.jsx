import React from "react";
const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;
export default async function WebSearchPage({ searchParams }) {
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchParams.searchTerm}`);
  const data = await response.json();
  console.log(data);
  const results = data.items;

  return <>{results && results.map((result) => <h1>{result.title}</h1>)}</>;
}
