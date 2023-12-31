import React, { ReactNode } from "react";
import classNames from "classnames";

interface propVarie {
  [key: string]: any;
}

interface propVarie {
  children?: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  rounded?: boolean;
  onClick?: (() => void) | undefined;
  className?: string;
}

const Button = ({
  children,
  primary,
  secondary,
  outline,
  rounded,
  ...rest
}: propVarie) => {
  const classes = classNames(
    rest.className,
    "flex gap-2 items-center p-1 px-3 duration-75 ease-out active:scale-95 font-semibold rounded text-black active:opacity-90",

    {
      "text-black border border-black bg-transparent": outline,
      "rounded-full": rounded,
      "text-white bg-black": primary,
      "text-black underline underline-offset-4": secondary,
    }
  );

  return (
    <>
      <button {...rest} className={classes}>
        {children}
      </button>
    </>
  );
};

export default Button;
