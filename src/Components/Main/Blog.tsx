import React, { Fragment, ReactNode, useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import ArticlePanel from "../../Reuseable UI/articlePanel";
import { Link } from "react-router-dom";
import { cont } from "../../Context/Context";
import { display } from "../../Reuseable UI/Modals";

interface BlogPost {
  [x: string]: ReactNode;
  content: ReactNode;
  id: string;
}

function Blog() {
  const Context = cont();

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "contents"));
      const data: BlogPost[] = [];

      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id } as BlogPost);
      });

      Context?.setDatabase(data);
    };

    getPosts();
  }, []);

  const sortedPosts = [...(Context?.database || [])].sort((a, b) => {
    const orderA = typeof a.order === "number" ? a.order : 0;
    const orderB = typeof b.order === "number" ? b.order : 0;
    return orderB - orderA;
  });
  return (
    <div className="mt-[5.3rem] mx-10 flex flex-col gap-3">
      {display()}
      <h1 className="text-2xl font-bold">Blogs</h1>
      {sortedPosts.map((post, i) => (
        <Fragment key={post.id}>
          <Link to={`/portfolio/blogs/${i}`}>
            <ArticlePanel
              title={post.title}
              desc={post.desc}
              countDays={post.CountDate}
            />
          </Link>
        </Fragment>
      ))}
    </div>
  );
}

export default Blog;
