import React from "react";
import { ERROR_MSG_TEXT_AREA } from "../consts/constants";
import style from "../style.module.css";

class TextAreaComponent extends React.Component {
  render() {
    return (
      <div className={`${style.form__group} field`}>
        <textarea
          rows="7"
          className={style.form__field}
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
        <label className={style.form__label} htmlFor={this.props.name}></label>
        <span className={`${style.form_counter} ${this.props.value.length > 600 ? style.error_msg : ""}`}>
          {this.props.value.length}/600
        </span>
        <span className={`${style.form_counter} ${style.error_msg}`}>
          {this.props.value.length > 600 ? ERROR_MSG_TEXT_AREA : ""}
        </span>
      </div>
    );
  }
}

export default TextAreaComponent;
