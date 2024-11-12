"use client";  // Required to use hooks in Next.js

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, quantity, category };
    onAddItem(newItem);  // Call the parent function to add the item
    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <div>
      <h2>Add a New Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Item name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <label>Quantity:</label>
        <div>
          <button type="button" onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
          <span>{quantity}</span>
          <button type="button" onClick={() => setQuantity(quantity + 1)} disabled={quantity >= 20}>+</button>
        </div>
        <br />

        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Household">Household</option>
        </select>
        <br />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
