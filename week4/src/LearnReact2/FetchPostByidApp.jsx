import { useEffect, useState } from "react";

const API = "https://jsonplaceholder.typicode.com/comments"

export default function FetchPostById() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment]=useState({})
  const [comments, setComments] = useState([]);

  const fetchCommentFn = async ()=>{
    const res = await fetch(API);
    const data = await res.json()
    setComment(data)

  }

  useEffect(()=>{
   (async () =>{
    const res = await fetch(API);
    const data = await res.json();
    setComments(data)
  })()
  },[])

  const fetchUser = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await res.json();
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(userId);
  }, [userId]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
    {/* <div>
      <h1>UserID: {user.id}</h1>
      <button onClick={()=>{setUserId(Math.max(1, userId-1))}}>Previous</button>
      <button onClick={()=>setUserId(userId+1)}>Next</button>
      <h2>{user.title}</h2>
      <h3>{user.body}</h3>
    </div> */}
    <div>
      <button onClick={fetchCommentFn}>Fetch Comment</button>
      <p>{comment.id}</p>

      <hr/>
      {comments
      .filter((comment)=>comment.id>30)
      .map((comment)=> <p key={comment.id}>{comment.id}</p>)}
    </div>

    </>
  );
}
