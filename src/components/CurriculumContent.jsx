import React from "react";
// components
import ContentList from "components/ContentList";
import AboutMe from "components/AboutMe";

function CurriculumContent() {
  return (
    <ul className="curriculum-content">
      <AboutMe />
      <ContentList name="Education" />
      <ContentList name="Experience" />
    </ul>
  );
}

export default CurriculumContent;
