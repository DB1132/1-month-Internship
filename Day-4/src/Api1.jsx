import React, { useEffect, useState } from "react";

export default function Api1() {
  const [data, setFirst] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setFirst(json))
      .catch((error) => console.log("Error:", error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
