"use client";  // Required for React hooks

import { useState } from 'react';
import NewItem from './new-item';  // Import NewItem component
import ItemList from './item-list'; // Import ItemList component
import itemsData from './items.json'; // Import items data

export default function Page() {
  // Initialize state to store the list of items
  const [items, setItems] = useState(itemsData);

  // Function to handle adding a new item to the list
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, { ...newItem, id: Math.random().toString(36).substr(2, 9) }]); // Adding unique id
  };

  return (
    <main>
      <h1>Shopping List</h1>
      {/* NewItem component with a prop for handling the add item event */}
      <NewItem onAddItem={handleAddItem} />
      {/* Pass items state as prop to ItemList component */}
      <ItemList items={items} />
      
    </main>
  );
}
