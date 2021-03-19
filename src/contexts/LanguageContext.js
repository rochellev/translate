import React from "react";

// must be capital letter, otherwise React thinks just regular html
const Context = React.createContext("english");

// named export
export class LanguageStore extends React.Component {
  // your "store"
  state = { language: "english" };
  // change selected language
  onLanguageChange = language => {
    this.setState({ language });
  };
  // only components wrapped in Provider gets access to context object
  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default Context;