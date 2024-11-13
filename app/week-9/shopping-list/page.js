// week-9/shopping-list/page.js
"use client";

import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useRouter } from "next/router";
import NewItem from './week-9/new-item';  // Import NewItem component
import ItemList from './week-9/item-list'; // Import ItemList component
import MealIdeas from './week-9/meal-ideas'; // Import MealIdeas component
import itemsData from './week-9/items.json'; // Import items data

export default function ShoppingListPage() {
  const { user } = useUserAuth(); // Access user object
  const router = useRouter(); // Router hook for navigation

  // If the user is not logged in, redirect to the landing page
  useEffect(() => {
    if (!user) {
      router.push("/"); // Redirect to landing page
    }
  }, [user, router]);

  if (!user) {
    // You can show a loading spinner or message while redirecting
    return <p>Loading...</p>;
  }

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, { ...newItem, id: Math.random().toString(36).substr(2, 9) }]); // Adding unique id
  };

  const handleItemSelect = (itemName) => {
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
};