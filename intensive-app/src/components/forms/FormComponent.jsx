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
  isValidateCapitalize,
  isValidatePhone,
  validate,
  validateURL,
} from "../utils/validateFunctions";
import { useState } from "react";

const initialState = {
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

function FormComponent({ showCompletetedForm }) {
  const [state, setState] = useState(initialState);

  const handleInputChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value.trim();

    setState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: value,
        isEmpty: value ? false : true,
      },
    }));

    if (name === PHONE) {
      const maskVal = addInputMask(value);
      setState((prev) => ({
        ...prev,
        phone: {
          ...prev.phone,
          value: maskVal,
          isEmpty: maskVal ? false : true,
          showErrMsg: isValidatePhone(value) ? false : true,
        },
      }));
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const firstName = state.firstName.value;
    const lastName = state.lastName.value;

    setState((prev) => ({
      ...prev,
      firstName: {
        ...prev.firstName,
        showErrMsg: isValidateCapitalize(firstName) ? false : true,
      },
      lastName: {
        ...prev.lastName,
        showErrMsg: isValidateCapitalize(lastName) ? false : true,
      },
      site: {
        ...prev.site,
        showErrMsg: validateURL(prev.site.value) ? false : true,
      },
    }));

    if (validate(state, firstName, lastName)) showCompletetedForm(state);
  };

  return (
    <>
      {/*{<pre>{JSON.stringify(state, undefined, 1)}</pre>}*/}

      <form className={style.container} onSubmit={handleSubmit}>
        <h2>{TITLE_FORM}</h2>
        <InputComponent
          name={FIRST_NAME}
          placeholder={"Имя"}
          value={state.firstName.value}
          onChange={handleInputChange}
          isEmpty={state.firstName.isEmpty}
          errorMsg={state.firstName.errorMsg}
          showErrMsg={state.firstName.showErrMsg}
        />
        <InputComponent
          name={LAST_NAME}
          placeholder={"Фамилия"}
          value={state.lastName.value}
          onChange={handleInputChange}
          isEmpty={state.lastName.isEmpty}
          errorMsg={state.lastName.errorMsg}
          showErrMsg={state.lastName.showErrMsg}
        />
        <InputComponent
          name={BIRTHDAY}
          placeholder={"День рождения"}
          type={"date"}
          onChange={handleInputChange}
          isEmpty={state.birthday.isEmpty}
        />
        <InputComponent
          name={PHONE}
          placeholder={"Телефон"}
          type={"tel"}
          maxlength={"12"}
          value={state.phone.value}
          onChange={handleInputChange}
          isEmpty={state.phone.isEmpty}
          errorMsg={state.phone.errorMsg}
          showErrMsg={state.phone.showErrMsg}
        />
        <InputComponent
          name={SITE}
          placeholder={"Сайт"}
          onChange={handleInputChange}
          isEmpty={state.site.isEmpty}
          errorMsg={state.site.errorMsg}
          showErrMsg={state.site.showErrMsg}
        />
        <TextAreaComponent
          name={ABOUT}
          placeholder={state.about.title}
          value={state.about.value}
          onChange={handleInputChange}
        />
        <TextAreaComponent
          name={STACK}
          placeholder={state.stack.title}
          value={state.stack.value}
          onChange={handleInputChange}
        />
        <TextAreaComponent
          name={LAST_PROJECT}
          placeholder={state.lastProject.title}
          value={state.lastProject.value}
          onChange={handleInputChange}
        />
        <div className={style.btns_group}>
          <Button name={BTN_SAVE} />
          <Button name={BTN_CANCEL} />
        </div>
      </form>
    </>
  );
}

export default FormComponent;
