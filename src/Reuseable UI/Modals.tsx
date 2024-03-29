import { ReactNode, useEffect } from "react";
import classNames from "classnames";
import ReactDOM from "react-dom";
import { FaArrowLeft } from "react-icons/fa";

type Props = {
  children: ReactNode;
  onClose?: (() => void) | undefined;
  className?: string;
};

function Modals({ children, ...rest }: Props): JSX.Element | null {
  const classes = classNames(
    "fixed inset-0 top-16 w-5/12 border border-black h-[30rem] overflow-auto scrollbar-hide bg-white m-3 mt-10 min-w-[20rem] mx-auto rounded-xl shadow-2xl",
    rest.className
  );

  const modalRoot = document.querySelector(".modal-root") as HTMLElement;

  if (!modalRoot) {
    return null;
  }

  const container = document.createElement("div");
  modalRoot.appendChild(container);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={rest?.onClose}
        className="fixed inset-0 backdrop-blur-sm"
      ></div>

      <div className={classes}>
        <div className="fixed ml-5 mt-5 text-xl w-fit hover:text-black/80 active:text-black/75 active:scale-95  cursor-pointer">
          <FaArrowLeft onClick={rest?.onClose}></FaArrowLeft>
        </div>
        <div>{children}</div>
      </div>
    </div>,
    container
  );
}

export default Modals;
