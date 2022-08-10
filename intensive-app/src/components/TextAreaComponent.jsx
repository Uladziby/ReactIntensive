import React from "react";
import style from "./style.module.css";

class TextAreaComponent extends React.Component {
  state = {
    inputValue: "",
  };

  handleInputChange = (ev) => {
    this.setState({ inputValue: ev.target.value });
  };

  render() {
    return (
      <div className={`${style.form__group} field`}>
        <textarea
          rows="7"
          className={style.form__field}
          type="text"
          id={this.props.name}
          name={this.props.name}
          placeholder={this.props.name}
          value={this.inputValues}
          onChange={this.handleInputChange}
        />
        <label className={style.form__label} htmlFor={this.props.name}></label>
      </div>
    );
  }
}

export default TextAreaComponent;
