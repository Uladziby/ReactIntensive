import React from "react";
import ReactDOM from "react-dom";
import styles from "./popup.module.css";
import btnStyle from "../style.module.css";
import { SUCCESS_MSG } from "../consts/constants";
import Button from "../buttons/Button";
import icon from "../../assets/success.svg";
import { useEffect, useRef } from "react";

const PopUpTemplate = ({ closePopUp }) => {
  let timerID;
  const popup = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      popup.current.style = `${styles.active}`;
    }, 1000);
    timerID = setTimeout(closePopUp, 4000);
    return () => {
      clearTimeout(timerID);
    };
  });
  
  return (
    <div className={`${styles.popup} `}>
      <div ref={popup} className={`${styles.popup_content} ${styles.active}`}>
        <div className={styles.popup_content_block}>
          <img src={icon} alt="icon" width="50" />
          <div className={styles.title}>{SUCCESS_MSG}</div>
        </div>
        <Button className={btnStyle.button} onClick={closePopUp} name={"Close"} />
      </div>
    </div>
  );
};

const PopUpNotification = ({ isShowPopUp, setShowPopUp }) => {
  const closePopUp = () => {
    setShowPopUp(false);
  };
  const rootNode = document.getElementById("root");
  if (rootNode && isShowPopUp) {
    return ReactDOM.createPortal(<PopUpTemplate closePopUp={closePopUp} />, rootNode);
  }
};

export default PopUpNotification;
