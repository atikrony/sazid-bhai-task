import React from "react";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

const App = () => {
  const [posts, setPost] = useState<Post[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  });
  return (
    <div className="h-auto flex justify-center items-center flex-col gap-20 my-20">
      <div className="bg-blue-400 p-10 rounded-2xl">
        <h3 className="text-[26px] font-bold ">Post</h3>
        {posts.map((post) => (
          <div
            key={post.id}
            className="border-2 bg-red-400 border-black rounded-2xl p-8 m-8"
          >
            <span className="font-bold text-[26px]">{post.title}</span>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
