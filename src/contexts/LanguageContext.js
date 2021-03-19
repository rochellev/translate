import React from "react";

const Context = React.createContext("english");

class LanguageStore extends React.Component {
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
