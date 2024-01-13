import { useDispatch, useSelector } from "react-redux";
import Resume from "../Components/Resume/Resume";
import Modals from "./Modals";
import { resumeModal } from "../Store";
import { interactionProps } from "../Types/Slice";
import { Fragment } from "react";

const DisplayResumeModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state: interactionProps) => state.interaction);

  return (
    <Fragment>
      {modal.modal.resume && (
        <Modals
          onClose={() => {
            dispatch(resumeModal());
          }}
        >
          <Resume />
        </Modals>
      )}
    </Fragment>
  );
};

export default DisplayResumeModal;
