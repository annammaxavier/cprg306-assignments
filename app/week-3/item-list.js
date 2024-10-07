import Item from "./item"; // Import the Item component
import React from 'react';

// Define the items data
const items = [
  {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  },
  {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  },
  {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  },
  {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  },
  {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  },
  {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  },
  {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  },
  {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  },
  {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  },
  {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  },
  {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  },
  {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  },
];

// Define the ItemList component
const ItemList = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Shopping List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Loop through each item and pass it as props to the Item component */}
        {items.map((item, index) => (
          <Item
            key={index}
            name={item.name}         // Pass name as a prop
            quantity={item.quantity}   // Pass quantity as a prop
            category={item.category}   // Pass category as a prop
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;





