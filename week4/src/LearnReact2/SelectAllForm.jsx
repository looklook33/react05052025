import React, { useState } from "react";

export default function SelectAllForm() {
    
  const items = [
    { id: 1, name: "Item1" },
    { id: 2, name: "Item2" },
    { id: 3, name: "Item3" },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const isAllSelected = items.length === selectedItems.length;

  const toggleItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((item) => item.id));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All the Selected Items:</h2>

      <label>
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={toggleSelectAll}
        />
        Select All
      </label>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleItem(item.id)}
              />
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}