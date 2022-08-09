import React from "react";

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  state = {
    inputValue: "",
  };

  handleInputChange = (ev) => {
    this.setState({ inputValue: ev.target.value });
  };

  render() {
    return (
      <div className="input_component">
        <label htmlFor={this.props.props}></label>
        <input
          type="text"
          name={this.props.props}
          placeholder={this.props.props}
          value={this.inputValues}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default InputComponent;
