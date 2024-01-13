import DisplayResumeModal from "../../Reuseable UI/DisplayResumeModal";
import { blogContents } from "../../Types/Slice";
import "../../myComponent.css";
import { sanitize } from "dompurify";

function ArticleIndi({ props }: blogContents) {
  return (
    <div className="mt-[5.3rem] mx-5 md:mx-20 flex flex-col gap-3">
      {DisplayResumeModal()}
      <div className="w-full h-[15rem] overflow-hidden">
        <img
          className="object-cover object-center h-full w-full"
          src={props.pic.replaceAll('"', "")}
          alt="cover"
        />
      </div>
      <p className="text-[0.60rem] my-1 text-right">
        {props.posted} | @{props.author?.name}
      </p>

      <div className="flex-col flex gap-3">
        <h1 className="text-4xl font-bold">{props.title}</h1>
        <h1 className="text-sm font-thin text-justify">{props.desc}</h1>
        <div className="text-justify mt-5" />
        <div
          className="myComponent"
          dangerouslySetInnerHTML={{
            __html: sanitize(props.content ?? ""),
          }}
        />
      </div>
    </div>
  );
}

export default ArticleIndi;

// const { id } = useParams();
// const context = useDataContext();
// console.log(context);
// const number = Number(id) || 0;
// const sortedPosts = [...(context?.database || [])].sort((a, b) => {
//   const orderA = typeof a.order === "number" ? a.order : 0;
//   const orderB = typeof b.order === "number" ? b.order : 0;
//   return orderB - orderA;
// });
// const currentArticle = sortedPosts[number] as unknown as BlogPost | undefined;

// if (currentArticle === undefined) {
// interface BlogPost {
//   id: string;
//   pic?: string;
//   posted?: string;
//   author?: Author;
//   title?: string;
//   desc?: string;
//   content?: string | undefined; // Allow content to be undefined
// }
//   return <div>Article not found</div>;
