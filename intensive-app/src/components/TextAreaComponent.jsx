import React from "react";

class TextAreaComponent extends React.Component {
  constructor(props) {
    super(props);
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
        <textarea rows="7"
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

export default TextAreaComponent;