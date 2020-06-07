import React from "react";
import Settings from "./Settings";
import useModal from "react-hooks-use-modal";
import "../style/Homepage.css";
import {Provider} from "react-redux";
import store from "./redux/store";

const Homepage = () => {

  // MODAL
  const [Modal, open, close] = useModal("root", {
    preventScroll: true
  });
  // MODAL

  return (
    <div className="App">
      <Provider store={store}>

        {/* PLAY BUTTON */}
        <div className="playButtonMain">
          <button className="playButton" onClick={open}>
            PLAY
          </button>
        </div>
        {/* PLAY BUTTON */}

        {/* CLOSE BUTTON */}
        <Modal>
          <div className="ModalClass">
            <Settings close={close}/>
            <button className="closeButton" onClick={close}>CLOSE</button>
          </div>
        </Modal>
        {/* CLOSE BUTTON */}

        {/* TRIVIA LOGO */}
        <div className="triviaMain">
          <span className="triviaText">Powered By</span>
          <img className="triviaLogo" src="./images/openTriviaDatabaseLogo.png" alt="NoImage"/>
        </div>
        {/* TRIVIA LOGO */}

      </Provider>
    </div>
  );
};
export default Homepage;