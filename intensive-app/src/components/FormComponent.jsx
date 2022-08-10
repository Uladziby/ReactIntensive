import React from "react";
import Button from "./Button";
import InputComponent from "./InputComponent";
import TextAreaComponent from "./TextAreaComponent";
import style from "./style.module.css";

const TITLE_FORM = "Создание анкеты";

class FormComponent extends React.Component {
  dataInput = {
    name: "Имя",
    lastName: "Фамилия",
    birthday: "День рождения",
    phone: "Телефон",
    site: "Сайт",
  };
  dataArea = {
    about: "О себе",
    stack: "Стек технологий",
    lastproject: "Описание последнего проекта",
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
        {Object.values(this.dataInput).map((val, idx) => {
          return <InputComponent key={idx} name={val} value={this.getValue} />;
        })}
        {Object.values(this.dataArea).map((val, idx) => {
          return <TextAreaComponent key={idx} name={val} />;
        })}
        <div className={style.btns_group}>
          <Button name={"Сохранить"} />
          <Button name={"Отмена"} />
        </div>
      </form>
    );
  }
}

export default FormComponent;
