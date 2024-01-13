import React, { Fragment } from "react";
import ArticlePanel from "../../Reuseable UI/articlePanel";
import { Link } from "react-router-dom";
import { useDataContext } from "../../Context/Context";
import { display } from "../../Reuseable UI/Modals";

function Blog() {
  const Context = useDataContext();

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
              countDays={post.countDate}
            />
          </Link>
        </Fragment>
      ))}
    </div>
  );
}

export default Blog;
