// /app/week-4/new-item.js
"use client";  // Required to use hooks in Next.js

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);  // Initialize state with a default value of 1

  // Increment function, limits to 20
  const increment = () => {
    setQuantity(prevQuantity => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity));
  };

  // Decrement function, limits to 1
  const decrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">Select Quantity</h2>
      <div className="flex items-center space-x-4">
        {/* Decrement Button */}
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-lg ${
            quantity === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
        >
          -
        </button>

        {/* Quantity Display */}
        <span className="text-xl font-bold">{quantity}</span>

        {/* Increment Button */}
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-lg ${
            quantity === 20 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
          }`}
        >
          +
        </button>
      </div>

      <p className="mt-4 text-gray-600">Quantity must be between 1 and 20.</p>
    </div>
  );
}
