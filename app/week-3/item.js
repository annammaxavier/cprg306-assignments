export default function Item({ name, quantity, category }) {
    return (
      <li className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p>
          Buy {quantity} in <span className="font-bold">{category}</span>
        </p>
      </li>
    );
  }
  