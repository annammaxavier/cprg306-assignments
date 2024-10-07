import React from 'react';

// Define the Item component and accept props (name, quantity, category)
const Item = (props) => {
  return (
    <li className="flex items-center p-4 border rounded-lg shadow-lg bg-white">
      {/* Use the passed props to display the item details */}
      <div className="text-5xl mr-4">{props.icon}</div>
      <div>
        <h2 className="text-xl font-semibold">{props.name}</h2>
        <p className="text-gray-600">Buy {props.quantity} in {props.category}</p>
      </div>
    </li>
  );
};

export default Item;
