import { info } from "../../Context/Info";
import Button from "../../Reuseable UI/Button";

const Resume = () => {
  return (
    <>
      <div className="mx-3 p-3 text-[0.7rem] tracking-wide">
        <div className="flex justify-end">
          <Button secondary className="text-sm text-gray-900">
            <a
              href="https://drive.google.com/file/d/1Ypo4bVp6dvmr4-s5XlJScgz0l04JlcT7/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume Here
            </a>
          </Button>
        </div>

        <p className="font-semibold font-body text-lg">{info.name}</p>
        <p>{info.address}</p>
        <p>{info.number}</p>
        <p>{info.email}</p>
      </div>

      <div className="mx-3 p-3 text-[0.7rem] tracking-wide">
        <p className="font-semibold font-body text-lg">About</p>
        <p className="text-justify">{info.about}</p>
      </div>

      <div className="mx-3 p-3 text-[0.7rem] tracking-wide">
        <p className="font-semibold font-body text-lg">Objective</p>
        <p className="text-justify">{info.objective}</p>
      </div>

      <div className="mx-3 p-3 text-[0.7rem] tracking-wide">
        <p className="font-semibold font-body text-lg">Education</p>

        {info.education.map((el, index) => {
          return (
            <div className="flex h-32 my-4">
              <p className="my-auto h-fit font-semibold mr-6 min-w-fit">
                {info.education[index].year}
              </p>
              <div className="w-48 border-l border-black pl-6 my-auto h-fit">
                {info.education[index].desciption()}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-3 p-3 text-[0.7rem] tracking-wide">
        <p className="font-semibold font-body text-lg ">Skills</p>
        <ul className="list-disc ml-10">
          {info.skill.map((el, index) => {
            return <li className="text-justify m-1">{info.skill[index]}</li>;
          })}
        </ul>
      </div>

      <div className="mx-3 p-3 text-[0.7rem] tracking-wide">
        <p className="font-semibold font-body text-lg ">
          Extra-Curricular Activities
        </p>
        <ul className="list-disc ml-5">
          {info.extra.map((el, index) => {
            return <li className="text-justify m-1">{info.extra[index]}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
export default Resume;
