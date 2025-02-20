import Panel from "../../Reuseable UI/Panel";
import { projects } from "../../Context/Info";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  const classes = classNames(
    "md:mx-10 mt-32 min-h-[30rem] flex flex-col justify-center items-center section",
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
                  {...element}
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
