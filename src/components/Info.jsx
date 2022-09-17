import React, { Component } from "react";
//style
import "style/Info.css";
//components
import ContactMe from "components/ContactMe";
import Skills from "components/Skills";
import Social from "components/Social";

class Info extends Component {
  render() {
    return (
      <div className="info">
        <ContactMe />
        <Skills />
        <Social />
      </div>
    );
  }
}

export default Info;
