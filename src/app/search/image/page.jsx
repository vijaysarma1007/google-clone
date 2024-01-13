// export const dynamic = "force-dynamic"
import React from "react";
import Link from "next/link";
import ImageSearchResults from "@/components/ImageSearchResults";
const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

export default async function ImageSearchPage({ searchParams }) {
  const startIndex = searchParams.start || 0;
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  // console.log(data);
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage{" "}
          <Link href={"/"} className="text-blue-500">
            HOME
          </Link>
        </p>
      </div>
    );
  }

  return <>{results && <ImageSearchResults results={data} />}</>;
}
