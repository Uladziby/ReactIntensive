import React from "react";
import style from "./style.module.css";
class InputComponent extends React.Component {
  state = {
    inputValue: "",
  };

  handleInputChange = (ev) => {
    this.setState({ inputValue: ev.target.value });
    this.props.value(this.state.inputValue)
  };

  render() {
    return (
      <div className={style.form__group}>
        <input
          className={style.form__field}
          type="text"
          name={this.props.name}
          id={this.props.name}
          placeholder={this.props.name}
          value={this.inputValues}
          onChange={this.handleInputChange}
        />
        <label className={style.form__label} htmlFor={this.props.name}>
          {this.props.name}
        </label>
      </div>
    );
  }
}

export default InputComponent;
