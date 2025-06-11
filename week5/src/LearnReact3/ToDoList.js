import { useState } from "react";

export default function ToDoList() {
  const [items, setItems] = useState(["Task1", "Task2", "Test3"]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [checked, setChecked] = useState(true);

  function handleAdd() {
    const newItem = document.getElementById("listInput").value;
    setItems((items) => [...items, newItem]);
  }

  function removedItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditingText(items[index]);
  };

  return (
    <div>
      <h3>TODOLIST</h3>
      <input type="text" id="listInput" placeholder="add item .." />
      <button onClick={handleAdd}>ADD</button>
      <>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEdit(index)}>edit</button>
            {/* Edit button No function */}
            <button onClick={() => removedItem(index)}>delete</button>
          </li>
        ))}
      </>
      <>
        <h3>Check Box</h3>
        <label>
          <input type="checkbox" onChange={() => setChecked(!checked)} />
          Laber
        </label>
        <GenderSelection />
        <AgeSelection />
      </>
    </div>
  );
}

function GenderSelection() {
  return (
    <div>
      <p>
        Gender:
        <label>
          <input type="radio" name="gender" value="female" />
          Female
        </label>
        <label>
          <input type="radio" name="gender" value="female" />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" />
          Other
        </label>
      </p>
    </div>
  );
}

function AgeSelection() {
  const [age, setAge] = useState("");
  return (
    <>
      <label htmlFor="ageSelect">Age</label>
      <select value={age} onChange={(e) => setAge(e.target.value)}>
        <option value="">select Age</option>
        <option value="10">Ten</option>
        <option value="20">Twenty</option>
        <option value="30">Thirty</option>
      </select>
      {age && <p>you selected age: {age}</p>}
    </>
  );
}
