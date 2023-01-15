import { useState, useEffect } from "react";
export default function FetchApi() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((respons) => respons.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, [id]);

  return (
    <div>
      <h3>Rendering out Data with id number</h3>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>Name:{post.name}</div>
      <div>Email:{post.email}</div>
      <div>Body:{post.body}</div>

      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
