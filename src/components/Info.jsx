import React from "react";
// style
import "style/Info.css";
// components
import ContactMe from "components/ContactMe";
import Skills from "components/Skills";
import Social from "components/Social";

function Info() {
  return (
    <div className="info">
      <ContactMe />
      <Skills />
      <Social />
    </div>
  );
}

export default Info;
