"use client";

import { useState, useEffect } from "react";
import { ItemList } from "./week-10/shopping-list/item-list";
import { NewItem } from "./week-10/shopping-list/new-item";
import MealIdeas from "./week-10/shopping-list/meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

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

  const handleAddItem = async (item) => {
    const newItemId = await addItem(user.uid, item);
    setItemList([...itemList, { id: newItemId, ...item }]);
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
