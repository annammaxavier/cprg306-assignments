"use client";  // Required to use hooks in Next.js

import { useState } from 'react';

export default function NewItem() {
  // Initialize state for name, quantity, and category
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [category, setCategory] = useState('Produce'); // Default category is 'Produce'

  // Increment function, limits to 20
  const increment = () => {
    setQuantity(prevQuantity => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity));
  };

  // Decrement function, limits to 1
  const decrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default behavior

    // Create item object
    const newItem = {
      name,
      quantity,
      category,
    };

    // Log the item to the console
    console.log(newItem);

    // Display alert with item details
    alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);

    // Reset form fields to initial values
    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-2">Add a New Item</h2>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        
        {/* Item Name Input */}
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="name">Item Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-3 py-2 border rounded-lg focus:outline-none"
            required
          />
        </div>

        {/* Quantity Section */}
        <div className="flex items-center space-x-4">
          {/* Decrement Button */}
          <button
            type="button"
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
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`px-4 py-2 rounded-lg ${
              quantity === 20 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
            }`}
          >
            +
          </button>
        </div>

        {/* Category Select */}
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 border rounded-lg focus:outline-none"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add Item
        </button>
      </form>
    </div>
  );
}
