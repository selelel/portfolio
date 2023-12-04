import { useParams } from "react-router-dom";
import { cont } from "../../Context/Context";
import { display } from "../../Reuseable UI/Modals";
import "../../myComponent.css";
import { sanitize } from "dompurify";

interface Author {
  name: string;
}

interface BlogPost {
  id: string;
  pic?: string;
  posted?: string;
  author?: Author;
  title?: string;
  desc?: string;
  content?: string | undefined; // Allow content to be undefined
}

function ArticleIndi() {
  const { id } = useParams();
  const context = cont();
  const number = Number(id) || 0;
  const sortedPosts = [...(context?.database || [])].sort((a, b) => {
    const orderA = typeof a.order === "number" ? a.order : 0;
    const orderB = typeof b.order === "number" ? b.order : 0;
    return orderB - orderA;
  });
  const currentArticle = sortedPosts[number] as unknown as BlogPost | undefined;

  if (currentArticle === undefined) {
    return <div>Article not found</div>;
  }

  return (
    <div className="mt-[5.3rem] mx-5 md:mx-20 flex flex-col gap-3">
      {display()}
      <div className="w-full h-[15rem] overflow-hidden">
        <img
          className="object-cover object-center h-full w-full"
          src={currentArticle.pic?.replaceAll('"', "")}
          alt="cover"
        />
      </div>
      <p className="text-[0.60rem] my-1 text-right">
        {currentArticle.posted} | @{currentArticle.author?.name}
      </p>

      <div className="flex-col flex gap-3">
        <h1 className="text-4xl font-bold">{currentArticle.title}</h1>
        <h1 className="text-sm font-thin text-justify">
          {currentArticle.desc}
        </h1>
        <div className="text-justify mt-5" />
        <div
          className="myComponent"
          dangerouslySetInnerHTML={{
            __html: sanitize(currentArticle.content ?? ""),
          }}
        />
      </div>
    </div>
  );
}

export default ArticleIndi;
