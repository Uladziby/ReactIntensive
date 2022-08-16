import React from "react";
import { EMPTY_MSG } from "../consts/constants";
import style from "../style.module.css";
import input_style from "./input.module.css";

class InputComponent extends React.Component {
  render() {
    const { isEmpty, placeholder, name, onChange, errorMsg, showErrMsg } = this.props;
    return (
      <div className={style.form__group}>
        <input
          type={this.props.type}
          className={style.form__field}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          id={name}
        />
        <label className={style.form__label} htmlFor={name}>
          {placeholder}
        </label>
        {isEmpty && <div className={input_style.error_msg}>{EMPTY_MSG}</div>}
        {!isEmpty && showErrMsg && <span className={input_style.error_msg}>{errorMsg}</span>}
      </div>
    );
  }
}

export default InputComponent;
