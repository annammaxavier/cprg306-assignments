"use client";
import { useState } from "react";
import { Item } from "./week-10/shopping-list/item";

export function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  return (
    <div className="w-1/4">
      <div id="window" className="flex flex-col ">
        <h1 id="title">Shopping List</h1>
        <div id="window-i-nb">
          <div className="w-full h-full grid grid-cols-4 grid-rows-4 grid-flow-row">
            {items
              .sort((a, b) => {
                if (a[sortBy] < b[sortBy]) {
                  return -1;
                }
                if (a[sortBy] > b[sortBy]) {
                  return 1;
                }
                return 0;
              })
              .map((item, index) => {
                return <Item item={item} onSelect={onItemSelect} key={index} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};