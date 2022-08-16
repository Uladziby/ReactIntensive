import React from "react";
import style from "../style.module.css";

class TextAreaComponent extends React.Component {
  state = {
    lenMsg: 0,
    isShowErr: false,
  };

  countSymbols = (e) => {
    const val = e.target.value;
    this.setState({ lenMsg: val.length });
    if (this.state.lenMsg > 600) {
      this.setState({ ...this.state, isShowErr: true });
    }
  };

  render() {
    return (
      <div className={`${style.form__group} field`}>
        <textarea
          {...this.props}
          rows="7"
          className={style.form__field}
          name={this.props.name}
          placeholder={this.props.name}
          onChange={(e) => {
            this.props.onChange(e);
            this.countSymbols(e);
          }}
          required
        />
        <label className={style.form__label} htmlFor={this.props.name}></label>
        <span className={style.form_counter}>{this.state.lenMsg}/600</span>
        <span className={`${style.form_counter} ${style.error_msg}`}>
          {this.state.isShowErr ? "Max length is 600 symbols" : ""}
        </span>
      </div>
    );
  }
}

export default TextAreaComponent;
