import Image from "next/image";
import React from "react";

export default async function page() {
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();

  return (
    <>
      <div className="border border-black p-4 m-4   ">
        <Image src="/next.svg" width={100} height={100} alt="vercel" />
        <ul className="flex flex-col gap-2  ">
          {posts.map((post) => (
            <li className="border border-black p-2" key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
