import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
        <button className="button" type="button">
            {this.props.name}
        </button>
    )
  }
}

export default Button;