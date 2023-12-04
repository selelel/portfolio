import Button from "./Button";
import TagIcon from "./tagIcon";
import classNames from "classnames";

type prop = {
  description: string;
  name: string;
  linkGit: string;
  link: string;
  linkImg: string;
  tech: string[];
};

function Panel({ ...rest }: prop) {
  const techUsed = rest.tech.map((element, index) => {
    return (
      <div key={element}>
        <TagIcon className="rounded">{element}</TagIcon>
      </div>
    );
  });

  return (
    <>
      <div className="grid md:flex grid-col lg:grid-cols-2 items-center gap-5 lg:gap-10 md:p-10 rounded-lg h-fit mb-1">
        <div className="mx-auto align-middle max-w-[23rem]">
          <div className="text-2xl md:text-3xl font-semibold my-1">
            {rest.name}
          </div>
          <div className="my-3">{rest.description}</div>
          <div className="flex flex-wrap gap-2 my-1">{techUsed}</div>
          <div className="flex gap-2">
            <Button secondary className="my-1">
              <a href={rest.linkGit} target="_blank">
                Code
              </a>
            </Button>
            <Button secondary className="my-1">
              <a href={rest.link} target="_blank">
                HomePage
              </a>
            </Button>
          </div>
        </div>

        <div className="mx-auto max-w-[16.5rem]  row-start-1">
          <img
            className="rounded-xl shadow-2xl duration-700 ease-out hover:scale-105"
            src={rest.linkImg}
            alt="cromulon"
          />
        </div>
      </div>
    </>
  );
}

export default Panel;
