import React from "react";
import Button from "./Button";
import InputComponent from "./InputComponent";
import TextAreaComponent from "./TextAreaComponent";
import style from "./style.module.css";

const TITLE_FORM = "Создание анкеты";

class FormComponent extends React.Component {
  state = {
    name: '',
    lastName: "",
    birthday: "",
    phone: "",
    site: "",
    about:'',
    stack:'',
    lastproject:''
  };


  handleSubmit(ev) {
    ev.preventDefault();
  }
  
  getValue(str) {
    console.log(str);
  }

  render() {
    return (
      <form className={style.container} onSubmit={this.handleSubmit}>
        <h2>{TITLE_FORM}</h2>
        <InputComponent name={'Имя'} handlerValue={this.getValue} />;
        <InputComponent name={'Фамилия'} handlerValue={this.getValue} />;
        <InputComponent  name={'День рождения'} handlerValue={this.getValue} />;
        <InputComponent  name={'Телефон'} handlerValue={this.getValue} />;
        <InputComponent  name={'Сайт'} handlerValue={this.getValue} />;
        <TextAreaComponent  name={"О себе"} />;
        <TextAreaComponent  name={ "Стек технологий"} />;
        <TextAreaComponent  name={ "Описание последнего проекта"} />;
        <div className={style.btns_group}>
          <Button name={"Сохранить"} />
          <Button name={"Отмена"} />
        </div>
      </form>
    );
  }
}

export default FormComponent;
