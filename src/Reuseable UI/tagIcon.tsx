import { ReactNode } from "react";
import classNames from "classnames";

type tagType = {
  children: ReactNode;
  className?: string;
};

function TagIcon({ children, ...rest }: tagType) {
  const className = classNames(
    "min-w-[5rem] h-[2rem] p-1 text-center font-medium bg-black text-white cursor-pointer duration-300 ease hover:bg-transparent hover:text-black hover:font-bold",
    rest?.className
  );

  return <div className={className}>{children}</div>;
}

export default TagIcon;
