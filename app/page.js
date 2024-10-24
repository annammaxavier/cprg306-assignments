 "use client";  // Required to use React hooks in Next.js

import { useState } from "react";
import ItemList from "./week-7/item-list";  // Correct import for ItemList
import NewItem from "./week-7/new-item";    // Correct import for NewItem
import ItemsData from "./week-7/items.json";  // Correct import for ItemsData

export default function Page() {
  // Initialize state for items
  const [items, setItems] = useState(ItemsData);

  // Function to handle adding a new item
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [
      ...prevItems,
      { ...newItem, id: Math.random().toString(36).substr(2, 9) },  // Add unique ID
    ]);
  };

  return (
    <main>
      <h1>Shopping List</h1>

      {/* Render the NewItem form and pass the event handler */}
      <NewItem onAddItem={handleAddItem} />

      {/* Render the ItemList and pass the current items */}
      <ItemList items={items} />
    </main>
  );
}
