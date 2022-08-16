import React from "react";
import style from "./style.module.css";

class ResultsForm extends React.Component {
  render() {
    console.log(this.props.data);
    const { data } = this.props;
    return (
      <div className={style.container}>
        <h2>
          {data[0].value} {data[1].value}
        </h2>
        <div className={style.block}>
          {data.map((elem, idx) => {
            return idx > 1 ? (
              <div className={style.element} key={idx}>
                {elem.title} : {elem.value}
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    );
  }
}
export default ResultsForm;
