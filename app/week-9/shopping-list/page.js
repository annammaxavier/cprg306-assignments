"use client";
import { ItemList } from "app\week-9\shopping-list\item-list";
import { NewItem } from "app\week-9\shopping-list\new-item";
import Items from "app\week-9\shopping-list\items.json";
import { useState } from "react";
import MealIdeas from "app\week-9\shopping-list\meal-ideas";

export default function Page() {
  const [itemList, setItemList] = useState(Items);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleItemSelect(e) {
    setSelectedItemName(emojiRemover(e.name).split(",")[0]);
  }

  const emojiRemover = (string) => {
    return string.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, "");
  };

  return (
    
      <div className="flex flex-row w-[90%] items-center justify-around">
        <ItemList items={itemList} onItemSelect={handleItemSelect} />
        <MealIdeas ingredient={selectedItemName} />
        <NewItem getter={itemList} setter={setItemList} />
      </div>
    
  )
};
