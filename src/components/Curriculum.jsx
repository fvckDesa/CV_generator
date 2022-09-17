import React, { Component } from "react";
//style
import "style/Curriculum.css";
//components
import Info from "components/Info";
import ContentList from "components/Content-item";

class Curriculum extends Component {
  render() {
    return (
      <div className="curriculum">
        <header className="curriculum-header">
          <div className="curriculum-header__person-picture" />
          <div className="curriculum-header__person">
            <h1>Name</h1>
            <h2>Profession</h2>
          </div>
        </header>
        <ul className="curriculum-content">
          <li className="content-item">
            <header className="content-item__header">
              <h2>About me</h2>
            </header>
            <p className="person-description">Describe you</p>
          </li>
          <ContentList name="Education" />
          <ContentList name="Experience" />
        </ul>
        <Info />
      </div>
    );
  }
}

export default Curriculum;
