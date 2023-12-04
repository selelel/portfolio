import Panel from "../../Reuseable UI/Panel";
import { projects } from "../../Context/Info";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const Projects = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const classes = classNames(
    "mx-10 mt-32 mb-32 min-h-[30rem] flex flex-col justify-center items-center section",
    inView ? "" : "section--hidden"
  );

  return (
    <>
      <div ref={ref} className={classes}>
        <div className="md:w-10/12">
          <div>
            <h1 className="text-3xl font-bold">Projects</h1>
          </div>
          {projects.map((element) => {
            return (
              <div key={element.name}>
                <Panel
                  tech={element.techStack}
                  linkImg={element.urlImg}
                  linkGit={element.urlGit}
                  link={element.urlHomepage}
                  name={element.name}
                  description={element.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
