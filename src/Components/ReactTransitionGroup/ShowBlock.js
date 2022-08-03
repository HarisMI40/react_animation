import { useState } from "react";
import { Transition } from "react-transition-group";
const ShowBlock = () => {
  const [showBlock, setShowBlock] = useState(false);
  return (
    <>
      <button onClick={() => setShowBlock(!showBlock)}>Show Box </button>
      <Transition in={showBlock} timeout={200} mountOnEnter unmountOnExit>
        {(state) => (
          <>
            {/* <p> {state} </p> */}
            <div
              style={{
                width: "100px",
                height: "100px",
                background: "red",
                margin: "0 auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : state === "entered" ? 1 : 0
              }}
            ></div>
          </>
        )}
      </Transition>

      <p>Lorem</p>
    </>
  );
};

export default ShowBlock;
