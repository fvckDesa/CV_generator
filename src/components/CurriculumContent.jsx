import React, { Component } from "react";
//components
import ContentList from "components/ContentList";
import AboutMe from "components/AboutMe";

class CurriculumContent extends Component {
  render() {
    return (
      <ul className="curriculum-content">
        <AboutMe />
        <ContentList name="Education" />
        <ContentList name="Experience" />
      </ul>
    );
  }
}

export default CurriculumContent;
