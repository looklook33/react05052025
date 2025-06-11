import { useState, useEffect } from "react";

const API = "https://jsonplaceholder.typicode.com/comments/";
export default function FetchComments() {
  const [comments, setComments] = useState([]);
  //   const fetchComments = async () => {
  //     try {
  //       const res = await fetch(API);
  //       const data = await res.json();
  //       setComments(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchComments();
  //   }, []);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <h2>Fetch Comment Practise 2</h2>
      {comments &&
        comments
          .filter((comment) => comment.id % 100 === 0)
          .map((comment) => (
            <div key={comment.id}>
              <li>{comment.id}</li>
            </div>
          ))}
    </>
  );
}



