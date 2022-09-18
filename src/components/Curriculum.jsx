import React, { Component } from "react";
//style
import "style/Curriculum.css";
//components
import Info from "components/Info";
import CurriculumHeader from "components/CurriculumHeader";
import CurriculumContent from "components/CurriculumContent";

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
