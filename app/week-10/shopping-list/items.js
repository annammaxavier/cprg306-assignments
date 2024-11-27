const Item = ({ name, quantity, category, onSelect }) => {
    return (
      <li className="flex items-center p-4 border rounded-lg shadow-lg bg-white" onClick={onSelect}>
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">Buy {quantity} in {category}</p>
        </div>
      </li>
    );
  };
  
  export default Item;
  