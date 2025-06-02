import { useEffect, useState } from "react";

export default function FetchPostById() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await res.json();
      setUser(data);
      console.log(data)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(userId);
  }, [userId]);

  if (loading) return <div>Loading...</div>
 
  return (
    <>
      <h1>UserID: {user.id}</h1>
       <h2>{user.title}</h2>
        <h3>{user.body}</h3> 
    </>
  );
}
