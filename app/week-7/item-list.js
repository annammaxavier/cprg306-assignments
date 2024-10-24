// /app/week-7/item-list.js
"use client"; // Ensure this is at the top

import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  // Sort items based on 'sortBy' state
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Group items by category (only if "Grouped Category" is selected)
  const groupedItems = itemsData.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <h2>Sort by:</h2>
      <button
        style={{ backgroundColor: sortBy === 'name' ? 'lightgray' : 'white' }}
        onClick={() => setSortBy('name')}
      >
        Name
      </button>
      <button
        style={{ backgroundColor: sortBy === 'category' ? 'lightgray' : 'white' }}
        onClick={() => setSortBy('category')}
      >
        Category
      </button>
      <ul>
          {sortedItems.map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
        </ul>
      
    </div>
  );
}
