import React, { Component } from "react";
//components
import ContentList from "components/Content-item";
import AutoResize from "components/AutoResize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icons
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

class CurriculumContent extends Component {
  constructor() {
    super();

    this.state = {
      editMode: false,
    };
  }

  toggleEditMode() {
    this.setState(({ editMode }) => ({ editMode: !editMode }));
  }

  render() {
    const { aboutMe, education, experience } = this.props.values;
    const { editMode } = this.state;
    return (
      <ul className="curriculum-content">
        <li className="content-item about-me">
          <FontAwesomeIcon
            className="edit-btn"
            onClick={this.toggleEditMode.bind(this)}
            icon={faPenToSquare}
            size="lg"
          />
          <header className="content-item__header">
            <h2>About me</h2>
          </header>
          {editMode ? (
            <AutoResize
              className="full-text-area"
              placeholder="Describe you"
              onChange={(value) => this.props.changeState({ aboutMe: value })}
              value={aboutMe}
            />
          ) : (
            <p className="person-description">{aboutMe || "Description"}</p>
          )}
        </li>
        <ContentList name="Education" />
        <ContentList name="Experience" />
      </ul>
    );
  }
}

export default CurriculumContent;
