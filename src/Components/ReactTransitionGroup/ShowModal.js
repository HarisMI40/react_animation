import { Transition } from "react-transition-group";
import Modal from "./Modal/Modal";
import Backdrop from "./Backdrop/Backdrop";
import { useState } from "react";

const ShowModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Transition in={showModal} timeout={1000} mountOnEnter unmountOnExit>
        {(state) => <Modal show={state} closed={() => setShowModal(false)} />}
      </Transition>

      {showModal ? <Backdrop show={showModal} /> : null}
      <button className="Button" onClick={() => setShowModal(true)}>
        Open Modal
      </button>
    </>
  );
};

export default ShowModal;
