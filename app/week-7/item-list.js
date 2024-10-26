"use client";  // Required to use hooks in Next.js

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Sort items based on 'sortBy' state
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <h2>Sort by:</h2>
      <button 
        onClick={() => setSortBy("name")}
        style={{ backgroundColor: sortBy === "name" ? "#d3d3d3" : "white" }}
      >
        Name
      </button>
      <button 
        onClick={() => setSortBy("category")}
        style={{ backgroundColor: sortBy === "category" ? "#d3d3d3" : "white" }}
      >
        Category
      </button>

      {/* Render sorted items */}
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
