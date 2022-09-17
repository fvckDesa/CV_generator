import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="info-item">
        <header className="info-item__header">SKILLS</header>
        <ul className="info-item__list">
          <li className="skill-item">
            <div className="skill-marker"></div>
            <h3>HTML</h3>
          </li>
          <li className="skill-item">
            <div className="skill-marker"></div>
            <h3>CSS</h3>
          </li>
          <li className="skill-item">
            <div className="skill-marker"></div>
            <h3>React</h3>
          </li>
        </ul>
      </div>
    );
  }
}

export default Skills;
