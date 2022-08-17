import React from "react";
import Button from "../buttons/Button";
import InputComponent from "../input/InputComponent";
import TextAreaComponent from "../input/TextAreaComponent";
import style from "../style.module.css";
import {
  ABOUT,
  ABOUT_TITLE,
  BIRTHDAY,
  BTN_CANCEL,
  BTN_SAVE,
  FIRST_NAME,
  LAST_NAME,
  LAST_PROJECT,
  LAST_PROJECT_TITLE,
  PHONE,
  SITE,
  STACK,
  STACK_TITLE,
  TITLE_FORM,
} from "../consts/constants";
import {
  addInputMask,
  checkEmptiesFileds,
  isValidateCapitalize,
  isValidatePhone,
  validateTextArea,
  validateURL,
} from "../utils/validateFunctions";

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
    },
    site: {
      title: SITE,
      value: "",
      isEmpty: true,
      errorMsg: "Incorrect URL",
      showErrMsg: false,
    },
    about: { title: ABOUT_TITLE, value: "", isEmpty: true },
    stack: { title: STACK_TITLE, value: "", isEmpty: true },
    lastProject: { title: LAST_PROJECT_TITLE, value: "", isEmpty: true },
  };

  isSubmit = true;

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
      const newVal = addInputMask(value);
      console.log(newVal, "val");
      this.setState(() => ({
        [name]: {
          ...this.state[name],
          value: newVal,
          isEmpty: newVal ? false : true,
          showErrMsg: isValidatePhone(value) ? false : true,
        },
      }));
      this.isSubmit = isValidatePhone(value) ? true : false;
    }
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.validate()) {
      this.props.showCompletetedForm(this.state);
    }
  };

  validate = () => {
    const firstName = this.state.firstName.value;
    const lastName = this.state.lastName.value;
    this.setState(() => ({
      firstName: {
        ...this.state.firstName,
        showErrMsg: isValidateCapitalize(firstName) ? false : true,
      },
      lastName: {
        ...this.state.lastName,
        showErrMsg: isValidateCapitalize(lastName) ? false : true,
      },
    }));
    if (!isValidateCapitalize(firstName) || !isValidateCapitalize(lastName)) {
      return false;
    }

    if (!validateURL(this.state.site.value)) {
      this.setState(() => ({
        site: {
          ...this.state.site,
          showErrMsg: true,
        },
      }));
      return false;
    }
    if (validateURL(this.state.site.value)) {
      this.setState(() => ({
        site: {
          ...this.state.site,
          showErrMsg: false,
        },
      }));
    }
    if (!checkEmptiesFileds(this.state)) {
      return false;
    }
    if (
      !validateTextArea(this.state.about.value) ||
      !validateTextArea(this.state.stack.value) ||
      !validateTextArea(this.state.lastProject.value)
    ) {
      return false;
    }
    if (!this.isSubmit) return false;
    return true;
  };

  render() {
    return (
      <>
        {/*          { <pre>{JSON.stringify(this.state, undefined, 1)}</pre>}
         */}
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
            type={"date"}
            onChange={this.handleInputChange}
            isEmpty={this.state.birthday.isEmpty}
          />
          <InputComponent
            name={PHONE}
            placeholder={"Телефон"}
            type={"tel"}
            maxlength={"12"}
            value={this.state.phone.value}
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
          <TextAreaComponent
            name={ABOUT}
            placeholder={this.state.about.title}
            value={this.state.about.value}
            onChange={this.handleInputChange}
          />
          <TextAreaComponent
            name={STACK}
            placeholder={this.state.stack.title}
            value={this.state.stack.value}
            onChange={this.handleInputChange}
          />
          <TextAreaComponent
            name={LAST_PROJECT}
            placeholder={this.state.lastProject.title}
            value={this.state.lastProject.value}
            onChange={this.handleInputChange}
          />
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
