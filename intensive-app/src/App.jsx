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
  const [isShowPopUp, setShowPopUp] = useState(false);

  const showCompletetedForm = (data) => {
    setDataForm(data);
    setShowPopUp(true);
  };

  useEffect(() => {
    if (dataForm) {
      let id = setTimeout(() => {
        setShowForm(true);
      }, 3000);
      return () => {
        clearTimeout(id);
      };
    }
  }, [dataForm, isShowPopUp]);

  return (
    <div className="App">
      {isShowForm ? (
        <ResultsForm data={dataForm} />
      ) : (
        <FormComponent showCompletetedForm={showCompletetedForm} />
      )}
      <PopUpNotification isShowPopUp={isShowPopUp} setShowPopUp={setShowPopUp} />
    </div>
  );
};

export default App;
