import React from 'react';
import './App.css';
import FormComponent from './components/forms/FormComponent';
import ResultsForm from './components/forms/ResultsForm';

class App extends React.Component {
  state = {
    showForm : false,
    data:[],
  }
  showCompletetedForm=(data)=>{
    this.setState(() => ({
      showForm: true,
      data : [...data]
  }))}

  render() {
    return (
      <div className="App">
        {this.state.showForm?<ResultsForm data = {this.state.data}/>: <FormComponent showCompletetedForm={this.showCompletetedForm}/>}
      </div>
    );
  }
}


export default App;
