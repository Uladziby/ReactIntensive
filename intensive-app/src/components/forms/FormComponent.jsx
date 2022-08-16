import React from "react";
import Button from "../buttons/Button";
import InputComponent from "../input/InputComponent";
import TextAreaComponent from "../input/TextAreaComponent";
import style from "../style.module.css";
import {
  ABOUT,
  BIRTHDAY,
  BTN_CANCEL,
  BTN_SAVE,
  FIRST_NAME,
  LAST_NAME,
  LAST_PROJECT,
  PHONE,
  SITE,
  STACK,
  TITLE_FORM,
} from "../consts/constants";

class FormComponent extends React.Component {
  state = {
    firstName: {
      title: FIRST_NAME,
      value: "",
      isEmpty: true,
      errorMsg: "The first character must be upper case",
      showErrMsg: false,
    },
    lastName: {
      title: LAST_NAME,
      value: "",
      isEmpty: true,
      errorMsg: "The first character must be upper case",
      showErrMsg: false,
    },
    birthday: { title: BIRTHDAY, value: "", isEmpty: true },
    phone: {
      title: PHONE,
      value: "",
      isEmpty: true,
      errorMsg: "phone format should be in 7-7777-77-77 ",
      showErrMsg: false,
      pattern: /\(?([0-9]{1})\)?[-]([0-9]{4})[-]([0-9]{2})[-]([0-9]{2})$/,
    },
    site: {
      title: SITE,
      value: "",
      isEmpty: true,
      errorMsg: "Incorrect URL",
      showErrMsg: false,
      pattern: /^(https?):\/\/[^\s$.?#].[^\s]*$/,
    },
    about: { title: ABOUT, value: "", isEmpty: true },
    stack: { title: STACK, value: "", isEmpty: true },
    lastProject: { title: LAST_PROJECT, value: "", isEmpty: true },
  };

  isSubmit = {
    value: true,
  };

  handleInputChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value.trim();

    this.setState(() => ({
      [name]: {
        ...this.state[name],
        value: value,
        isEmpty: value ? false : true,
      },
    }));
    if (name === PHONE) {
      this.setState(() => ({
        [name]: {
          ...this.state[name],
          value: value,
          isEmpty: value ? false : true,
          showErrMsg: this.isValidatePhone(value) ? false : true,
        },
      }));
      this.isSubmit.value = this.isValidatePhone(value) ? true : false;
    }
  };

  isValidatePhone = (str) => {
    const pattern = this.state.phone.pattern;
    if (str.length !== 12) return false;
    return pattern.test(str);
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.validate()) {
      this.props.showCompletetedForm(Object.values(this.state));
    }
  };

  validate = () => {
    const firstName = this.state.firstName.value;
    const lastName = this.state.lastName.value;
    this.setState(() => ({
      firstName: {
        ...this.state.firstName,
        showErrMsg: this.isValidateCapitalize(firstName) ? false : true,
      },
      lastName: {
        ...this.state.lastName,
        showErrMsg: this.isValidateCapitalize(lastName) ? false : true,
      },
    }));
    if (!this.isValidateCapitalize(firstName) || !this.isValidateCapitalize(lastName)) {
      return false;
    }

    if (!this.validateURL()) {
      this.setState(() => ({
        site: {
          ...this.state.site,
          showErrMsg: true,
        },
      }));
      return false;
    }
    if (this.validateURL()) {
      this.setState(() => ({
        site: {
          ...this.state.site,
          showErrMsg: false,
        },
      }));
    }
    if (!this.checkEmptiesFileds()) {
      return false;
    }
    if (!this.isSubmit.value) return false;
    return true;
  };

  checkEmptiesFileds = () => {
    return Object.values(this.state).every((elem) => elem.value.length !== 0);
  };

  isValidateCapitalize(str) {
    if (str.length === 0) return false;
    if (str[0].toUpperCase() === str[0]) {
      return true;
    }
    return false;
  }

  validateURL = () => {
    // eslint-disable-next-line no-useless-escape
    const pattern = this.state.site.pattern;
    return pattern.test(this.state.site.value);
  };

  render() {
    return (
      <>
        <form className={style.container} onSubmit={this.handleSubmit}>
          <h2>{TITLE_FORM}</h2>
          <InputComponent
            name={FIRST_NAME}
            placeholder={"Имя"}
            onChange={this.handleInputChange}
            isEmpty={this.state.firstName.isEmpty}
            errorMsg={this.state.firstName.errorMsg}
            showErrMsg={this.state.firstName.showErrMsg}
          />
          <InputComponent
            name={LAST_NAME}
            placeholder={"Фамилия"}
            onChange={this.handleInputChange}
            isEmpty={this.state.lastName.isEmpty}
            errorMsg={this.state.lastName.errorMsg}
            showErrMsg={this.state.lastName.showErrMsg}
          />
          <InputComponent
            name={BIRTHDAY}
            placeholder={"День рождения"}
            type="date"
            onChange={this.handleInputChange}
            isEmpty={this.state.birthday.isEmpty}
          />
          <InputComponent
            name={PHONE}
            placeholder={"Телефон"}
            type="tel"
            onChange={this.handleInputChange}
            isEmpty={this.state.phone.isEmpty}
            errorMsg={this.state.phone.errorMsg}
            showErrMsg={this.state.phone.showErrMsg}
          />
          <InputComponent
            name={SITE}
            placeholder={"Сайт"}
            onChange={this.handleInputChange}
            isEmpty={this.state.site.isEmpty}
            errorMsg={this.state.site.errorMsg}
            showErrMsg={this.state.site.showErrMsg}
          />
          <TextAreaComponent name={ABOUT} onChange={this.handleInputChange} />
          <TextAreaComponent name={STACK} onChange={this.handleInputChange} />
          <TextAreaComponent name={LAST_PROJECT} onChange={this.handleInputChange} />
          <div className={style.btns_group}>
            <Button name={BTN_SAVE} />
            <Button name={BTN_CANCEL} />
          </div>
        </form>
      </>
    );
  }
}

export default FormComponent;
