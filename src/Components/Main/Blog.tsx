import { Fragment } from "react";
import ArticlePanel from "../../Reuseable UI/articlePanel";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { blogProps } from "../../Types/Slice";
import DisplayResumeModal from "../../Reuseable UI/DisplayResumeModal";

function Blog() {
  const { blog } = useSelector((state: blogProps) => state.blog);

  const sortedPosts = [...blog].sort((a, b) => {
    const orderA = typeof a.order === "number" ? a.order : 0;
    const orderB = typeof b.order === "number" ? b.order : 0;
    return orderB - orderA;
  });

  return (
    <div className="mt-[5.3rem] mx-10 flex flex-col gap-3">
      {DisplayResumeModal()}
      <h1 className="text-2xl font-bold">Blogs</h1>
      {sortedPosts.map((post) => (
        <Fragment key={post.id}>
          <Link to={`/portfolio/blogs/${post?.id}`}>
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
