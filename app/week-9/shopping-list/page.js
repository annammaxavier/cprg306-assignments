"use client";
import { useUserAuth } from "./week-9/_utils/auth-context";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import NewItem from 'app\week-9\new-item';  // Import NewItem component
import ItemList from 'app\week-9\item-list'; // Import ItemList component
import MealIdeas from 'app\week-9\meal-ideas'; // Import MealIdeas component
import itemsData from 'app\week-9\items.json'; // Import items data

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, { ...newItem, id: Math.random().toString(36).substr(2, 9) }]); // Adding unique id
  };

  const handleItemSelect = (itemName) => {
    // Clean up the item name for the API call
    const cleanItemName = itemName.split(',')[0].trim().replace(/[🥛🍞🥚🍌🥦🍗🍝🧻🧼]/g, ''); 
    setSelectedItemName(cleanItemName);
  };

  return (
    <main>
      <h1>Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <div style={{ display: 'flex', gap: '20px' }}>
        <ItemList items={items} onItemSelect={handleItemSelect} />
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
