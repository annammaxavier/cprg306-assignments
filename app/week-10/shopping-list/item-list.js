"use client";

import { useState } from "react";
import { Items } from "../shopping-list/items"; // Adjust path or braces as needed

export function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  // Debugging
  console.log(Items); // Ensure this logs the correct component

  return (
    <div className="w-1/4">
      <div id="window" className="flex flex-col">
        <h1 id="title" className="text-xl font-bold mb-2">Shopping List</h1>
        <select
          className="border p-2 mb-4"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="quantity">Quantity</option>
          <option value="category">Category</option>
        </select>
        <div id="window-i-nb">
          <div className="w-full h-full grid grid-cols-1 gap-4">
            {items
              .sort((a, b) => {
                if (a[sortBy] < b[sortBy]) return -1;
                if (a[sortBy] > b[sortBy]) return 1;
                return 0;
              })
              .map((items, index) => (
                <Items items={items} onSelect={onItemSelect} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

