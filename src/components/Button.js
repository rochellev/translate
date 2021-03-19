import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // Consumer component needs a function as child
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }
  // Consumer child can only be a function,
  // so need this function
  // example of how to use multiple Consumer Components
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  // can only pass one function as child of Consumer
  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
