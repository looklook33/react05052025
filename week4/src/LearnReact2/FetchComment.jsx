import {useState } from "react";

const API = "https://jsonplaceholder.typicode.com/comments/";

export default function FetchComment() {
  const [comment, setComment] = useState({});
  const [input, setInput] = useState(1);

  const fetchComment = async () => {
    try {
      const res = await fetch(API + input);
      const data = await res.json();
      setComment(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <h2>Fetch Comments Practise</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        min="1"
      />
      <button onClick={fetchComment}>Fetch Comment</button>
      {comment && (
        <div>
          <p>{comment.name}</p>
          <p>{comment.email}</p>
        </div>
      )}
    </>
  );
}
