import Button from "../../Reuseable UI/Button";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFiletypePdf } from "react-icons/bs";
import { BlogThunk } from "../../Store/Thunks/BlogThunk";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resumeModal } from "../../Store";

function Hero() {
  const dispatch = useDispatch();
  useEffect(() => {
    BlogThunk();
  }, []);
  return (
    <div className="mx-10 mt-16 mb-32 min-h-[30rem] flex flex-col">
      <div className="my-auto flex flex-col gap-y-2 whitespace-normal w-fit">
        <h1 className=" text-4xl sm:text-5xl">Jan Russel Gorembalem</h1>
        <p className="font-medium item">
          Self-taught frontend developer embracing continuous learning.🚀✨
        </p>
        <div className="flex gap-2 mx-auto">
          <Button className="text-4xl w-fit">
            <a href="https://www.linkedin.com/in/jan-russel-gorembalem-828630241/">
              <AiFillLinkedin />
            </a>
          </Button>

          <Button className="text-4xl w-fit">
            <a href="https://github.com/selelel">
              <AiFillGithub />
            </a>
          </Button>

          <Button
            className="flex text-2xl font-thin gap-0 w-fit"
            onClick={() => {
              dispatch(resumeModal());
            }}
          >
            <BsFiletypePdf /> <p className="text-sm">Resume</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
