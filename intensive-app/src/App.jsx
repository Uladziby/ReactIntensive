import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import FormComponent from "./components/forms/FormComponent";
import ResultsForm from "./components/forms/ResultsForm";
import PopUpNotification from "./components/modals/PopUpNotification";

const App = () => {
  const [dataForm, setDataForm] = useState("");
  const [isShowForm, setShowForm] = useState(false);
  const showCompletetedForm = (data) => {
    setDataForm(data);
    setShowForm(true);
  };
  useEffect(() => {
    console.log(dataForm);
  });
  return (
    <div className="App">
      {isShowForm ? (
        <ResultsForm data={dataForm} />
      ) : (
        <FormComponent showCompletetedForm={showCompletetedForm} />
      )}
      <PopUpNotification
        isShowPopUp={isShowForm}
        setIsShowPopUp={setShowForm}
      />
    </div>
  );
};

export default App;
