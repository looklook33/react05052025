import { useState } from "react";

export default function () {
  const items = [
    { id: 1, name: "Apple", price: 0.99 },
    { id: 2, name: "Banana", price: 0.49 },
    { id: 3, name: "Mango", price: 1.99 },
    { id: 4, name: "Strawberry", price: 2.49 },
  ];

  const [quantities, setQuantities] = useState(() => {
    const initial = {};
    for (const item of items) {
      initial[item.id] = 0;
    }
    return initial;
  });

  function handleIncrement(id) {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  }
  function handleDecrement(id) {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  }
//   console.log(quantities);

  const TotalPrice = items.reduce(
    (sum, item) => sum + item.price * quantities[item.id],
    0
  );

  function handleEmptyCart() {
    setQuantities(() => {
      const initial = {};
      for (const item of items) {
        initial[item.id] = 0;
      }
      return initial;
    });
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => handleIncrement(item.id)}>+</button>
                <button onClick={() => handleDecrement(item.id)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total price:{TotalPrice.toFixed(2)} </h4>
      <button onClick={() => alert("Check Out")}>Checkout</button>
      <button onClick={handleEmptyCart}>Empty Cart</button>
    </div>
  );
}
