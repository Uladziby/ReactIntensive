import React from "react";
import { EMPTY_MSG } from "../consts/constants";
import style from "../style.module.css";
import input_style from "./input.module.css";


const InputComponent = ({
  isEmpty,
  placeholder,
  name,
  onChange,
  errorMsg,
  showErrMsg,
  value,
  maxlength,
  type,
}) => {
  return (
    <div className={style.form__group}>
      <input
        type={type}
        className={style.form__field}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        maxLength={maxlength}
      />
      <label className={style.form__label} htmlFor={name}>
        {placeholder}
      </label>
      {isEmpty && showErrMsg && <div className={input_style.error_msg}>{EMPTY_MSG}</div>}
      {!isEmpty && showErrMsg && <span className={input_style.error_msg}>{errorMsg}</span>}
    </div>
  );
};
export default InputComponent;
