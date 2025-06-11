import { useEffect, useState } from "react";

const API = "https://dummyjson.com/posts";
export default function LivingCode() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(API);
      const data = await res.json();
      setPosts(data.posts);
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h2>6/2/2025 Fetch Posts</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID </th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((post) => {
            return  <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.tags.join(", ")}</td>
            </tr>
          })}
        </tbody>
      </table>
    </>
  );
}
