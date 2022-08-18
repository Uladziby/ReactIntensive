import React from "react";
import ReactDOM from "react-dom";
import styles from "./popup.module.css";
import btnStyle from "../style.module.css";
import { SUCCESS_MSG } from "../consts/constants";
import Button from "../buttons/Button";
import icon from "../../assets/success.svg";

const Template = ({ closePopUp }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popup_content}>
        <div className={styles.popup_content_block}>
        <img src={icon} alt="icon" width="50"/>
        <div className={styles.title}>{SUCCESS_MSG}</div>
        </div>
        <Button className={btnStyle.button} onClick={closePopUp} name={'Close'} />
      </div>
    </div>
  );
};

const PopUpNotification = ({ isShowPopUp, setIsShowPopUp }) => {
  const closePopUp = () => {
    setIsShowPopUp(true);
  };
  const domNode = document.getElementById("root");
  if (domNode && !isShowPopUp) {
    return ReactDOM.createPortal(<Template closePopUp={closePopUp} />, domNode);
  }
};

export default PopUpNotification;
