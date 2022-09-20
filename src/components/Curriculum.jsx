import React from "react";
// style
import "style/Curriculum.css";
// components
import Info from "components/Info";
import CurriculumHeader from "components/CurriculumHeader";
import CurriculumContent from "components/CurriculumContent";

function Curriculum() {
  return (
    <div className="curriculum">
      <CurriculumHeader />
      <CurriculumContent />
      <Info />
    </div>
  );
}

export default Curriculum;
