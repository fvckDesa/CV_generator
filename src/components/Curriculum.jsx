import React, { Component } from "react";
//style
import "style/Curriculum.css";
//components
import Info from "components/Info";
import CurriculumHeader from "components/Curriculum-header";
import CurriculumContent from "components/Curriculum-content";

class Curriculum extends Component {
  render() {
    return (
      <div className="curriculum">
        <CurriculumHeader />
        <CurriculumContent />
        <Info />
      </div>
    );
  }
}

export default Curriculum;
