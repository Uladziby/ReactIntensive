import React from "react";
import style from "../style.module.css";

const Button = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={style.button}
      type={`${name === "Сохранить" ? "submit" : "reset"}`}
    >
      {name}
    </button>
  );
};

export default Button;
