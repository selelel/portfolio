import Button from "../../Reuseable UI/Button";
import Hamburger from "hamburger-react";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { interactionProps } from "../../Types/Slice";
import { phoneMenu as phoneToggle, resumeModal } from "../../Store";
import classNames from "classnames";

type nav = {
  children: ReactNode;
  section?: string;
  className?: string;
  rest?: string | undefined;
  onClick?: (() => void) | undefined;
};

const Nav = () => {
  const dispatch = useDispatch();
  const phone = useSelector((state: interactionProps) => state.interaction);
  const Logo = "<sel/>";

  const phoneMenu = classNames(
    "z-10 fixed left-0 rigth-0 top-0 bg-white w-screen flex flex-col justify-center items-center media-show",
    phone.phoneToggle ? "animation-slide" : "hidden"
  );

  const Navigate = ({ children, section, ...rest }: nav) => {
    return (
      <a
        onClick={() => {
          dispatch(phoneToggle());
        }}
        href={section}
      >
        <Button className={rest?.className} onClick={rest?.onClick}>
          {children}
        </Button>
      </a>
    );
  };

  return (
    <div className="fixed top-0 z-30 flex align-middle">
      <div className={phoneMenu}>
        <Navigate section={"/portfolio/#hero"} className="font-thin text-xl">
          Home
        </Navigate>
        <Navigate section={"/portfolio/#about"} className="font-thin text-xl">
          About
        </Navigate>
        <Navigate section={"/portfolio/#project"} className="font-thin text-xl">
          Project
        </Navigate>
        <Link
          onClick={() => {
            dispatch(phoneToggle());
          }}
          to={"/portfolio/blogs"}
        >
          <Button className="font-thin text-xl">My Blogs</Button>
        </Link>
        <Navigate
          onClick={() => {
            dispatch(resumeModal());
          }}
          className="font-thin text-xl"
        >
          Resume
        </Navigate>
      </div>

      <div className=" pt-5 py-2 w-screen flex px-10 justify-between bg-white">
        <a href="./#hero">
          <p className="text-3xl font-bold h-fit my-auto">{Logo}</p>
        </a>
        <div className="media-show absolute right-7 mt-4 top-0 z-10">
          <Hamburger
            easing="ease-in "
            duration={0.3}
            onToggle={() => {
              dispatch(phoneToggle());
            }}
            toggled={phone.phoneToggle}
            size={25}
          />
        </div>
        <div className="flex gap-2 media">
          <Navigate section={"/portfolio/#hero"} className="font-thin ">
            Home
          </Navigate>
          <Navigate section={"/portfolio/#about"} className="font-thin">
            About
          </Navigate>
          <Navigate section={"/portfolio/#project"} className="font-thin">
            Project
          </Navigate>
          <Link to={"/portfolio/blogs"}>
            <Button className="font-thin">My Blogs</Button>
          </Link>
          <Navigate
            onClick={() => {
              dispatch(resumeModal());
            }}
            className="font-bold"
          >
            Resume
          </Navigate>
        </div>
      </div>
    </div>
  );
};

export default Nav;
