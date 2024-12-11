"use client";

import { useState, useEffect } from "react";
import { ItemList } from "./item-list";
import { NewItem } from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth_context"; // import from _utils

export default function Page() {
  const { user } = useUserAuth();
  const [itemList, setItemList] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Load items from Firestore
  useEffect(() => {
    if (user) {
      const loadItems = async () => {
        const items = await getItems(user.uid);
        setItemList(items);
      };
      loadItems();
    }
  }, [user]);

  const handleAddItem = async (items) => {
    const newItemId = await addItem(user.uid, items);
    setItemList([...itemList, { id: newItemId, ...items }]);
  };

  const handleItemSelect = (e) => {
    setSelectedItemName(e.name.split(",")[0]);
  };

  return (
    <div className="flex flex-row w-[90%] items-center justify-around">
      <ItemList items={itemList} onItemSelect={handleItemSelect} />
      <MealIdeas ingredient={selectedItemName} />
      <NewItem getter={itemList} setter={setItemList} handleAddItem={handleAddItem} />
    </div>
  );
};
