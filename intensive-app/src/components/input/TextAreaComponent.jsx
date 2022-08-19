import React from "react";
import { ERROR_MSG_TEXT_AREA } from "../consts/constants";
import style from "../style.module.css";

const TextAreaComponent = ({ name, value, placeholder, onChange }) => {
  return (
    <div className={`${style.form__group} field`}>
      <textarea
        rows="7"
        className={style.form__field}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
      <label className={style.form__label} htmlFor={name}></label>
      <span className={`${style.form_counter} ${value.length > 600 ? style.error_msg : ""}`}>
        {value.length}/600
      </span>
      <span className={`${style.form_counter} ${style.error_msg}`}>
        {value.length > 600 ? ERROR_MSG_TEXT_AREA : ""}
      </span>
    </div>
  );
};
export default TextAreaComponent;
