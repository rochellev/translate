import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  // need special contextType variable to use this.context property
  static contextType = LanguageContext;

  render() {
    // accessing the pipe 
    const text = this.context === 'english' ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
