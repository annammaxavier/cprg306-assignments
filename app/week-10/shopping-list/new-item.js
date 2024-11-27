export function NewItem({ getter, setter, handleAddItem }) {
    const [newItem, setNewItem] = useState("");
  
    const addItem = () => {
      const item = { name: newItem, quantity: 1, category: "other" };
      handleAddItem(item);
      setNewItem("");
    };
  
    return (
      <div>
        <input value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        <button onClick={addItem}>Add</button>
      </div>
    );
  }
  