import React from "react";
import style from "../style.module.css";

class Button extends React.Component {
  render() {
    return (
      <button className={style.button} type={`${this.props.name === "Сохранить" ? "submit" : "reset"}`}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
