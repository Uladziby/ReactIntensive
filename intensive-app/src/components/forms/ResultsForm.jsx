import React from "react";
import style from "./style.module.css";

class ResultsForm extends React.Component {
  render() {
    const { firstName, lastName, birthday, phone, site, about, stack, lastProject } = this.props.data;
    return (
      <div className={style.container}>
        <h2>
          {firstName.value} {lastName.value}
        </h2>
        <div className={style.block}>
          <div className={style.element}>
            <div className={style.element_title}> {birthday.title}</div> : {birthday.value}
          </div>
          <div className={style.element}>
            <div className={style.element_title}> {phone.title}</div> : {phone.value}
          </div>
          <div className={style.element}>
            <div className={style.element_title}> {site.title}</div> : {site.value}
          </div>
          <div className={style.element}>
            <div className={style.element_title}> {about.title}</div> : <p className={style.areaField}>{about.value}</p>
          </div>
          <div className={style.element}>
            <div className={style.element_title}> {stack.title}</div> : <p className={style.areaField}>{stack.value}</p>
          </div>
          <div className={style.element}>
            <div className={style.element_title}> {lastProject.title}</div>:{" "}
            <p className={style.areaField}>{lastProject.value}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ResultsForm;
