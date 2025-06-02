import { useState } from "react";

export default function TodoListApp() {
  // write your todo list app here
  const [items, setItems] = useState(["test1", "test2"]);

  function handleAddList() {
    const newItem = document.getElementById("listInput").value;
    document.getElementById("listInput").value = "";
    setItems((items) => [...items, newItem]);
  }

  function handleRemoveItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }


  return (
    <div>
      <h1>TodoListApp</h1>
      <input type="text" id="listInput" placeholder="add item..."></input>
      <button onClick={handleAddList}>ADD</button>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <span>{item}</span>
            <button
              onClick={() => {
                handleRemoveItem(index);
              }}>
              Delete
            </button>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}
