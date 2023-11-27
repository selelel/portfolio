/* eslint-disable jsx-a11y/heading-has-content */
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { cont } from "../../Context/Context";
import Footer from "./Footer";
import { display } from "../../Reuseable UI/Modals";

interface Author {
  name: string;
  // Add other properties if needed
}

interface BlogPost {
  id: string;
  pic?: string;
  posted: string;
  author?: Author;
  title: string;
  desc: string;
  content: string | number; // Adjust the type based on your data structure
}

function ArticleIndi() {
  const { id } = useParams();
  const context = cont();
  const number = Number(id) || 0;
  const currentArticle = context?.database[number] as BlogPost | undefined;

  if (currentArticle === undefined) {
    return <div>Article not found</div>;
  }

  return (
    <div className="mt-[5.3rem] mx-20 flex flex-col gap-3">
      {display()}
      <img
        className="object-none w-full min-w-fit h-[15rem] overflow-hidden"
        src={currentArticle.pic?.replaceAll('"', "")}
        alt="cover"
      />
      <p className="text-[0.60rem] my-1 text-right">
        {currentArticle.posted} | @{currentArticle.author?.name}
      </p>

      <div className="flex-col flex gap-3">
        <h1 className="text-4xl font-bold">{currentArticle.title}</h1>
        <h1 className="text-sm font-thin text-justify">
          {currentArticle.desc}
        </h1>
        <div className="text-justify mt-5" />
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 style={{ fontSize: "1.5rem" }} {...props} />
            ),
          }}
        >
          {String(currentArticle.content)}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default ArticleIndi;
