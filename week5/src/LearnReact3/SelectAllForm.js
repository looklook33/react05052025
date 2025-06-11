import { useState } from "react";
export default function SelectAllForm() {
  const items = [
    { id: 1, name: "Item1" },
    { id: 2, name: "Item2" },
    { id: 3, name: "Item3" },
  ];
  const [selectedItems, setSelectedItems] = useState([]);
  const isAllSelected = items.length === selectedItems.length;

  function toggleItem(id) {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }
  const selectedNames = items
    .filter((item) => selectedItems.includes(item.id))
    .map((item) => item.name);

  function toggleSelectALl() {
    if (isAllSelected) {
      selectedItems([]);
    } else {
      setSelectedItems(items.map((item) => item.id));
    }
  }

  return (
    <>
      <h3>All the selected Items: </h3>
      <label>
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={toggleSelectALl}
        />
        Select All
      </label>
      <hr />
      {selectedItems.length > 0 ? (
        <>{selectedNames.join(", ")}</>
      ) : (
        <p style={{ color: "red" }}>No Item Select</p>
      )}

      <ul>
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
    </>
  );
}
