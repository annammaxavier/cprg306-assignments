// Define the Item component to accept props (name, quantity, category)
const Item = (props) => {
  return (
    <li className="flex items-center p-4 border rounded-lg shadow-lg bg-white">
      {/* Display item details */}
      <div>
        <h2 className="text-xl font-semibold">{props.name}</h2>
        <p className="text-gray-600">Buy {props.quantity} in {props.category}</p>
      </div>
    </li>
  );
};

export default Item;
