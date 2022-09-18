import React, { Component } from "react";
//components
import AutoResize from "components/AutoResize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icons
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

class AboutMe extends Component {
  constructor() {
    super();

    this.state = {
      editMode: false,
      aboutMe: "",
    };
  }

  toggleEditMode() {
    this.setState(({ editMode }) => ({ editMode: !editMode }));
  }

  render() {
    const { editMode, aboutMe } = this.state;

    return (
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
            onChange={(value) => this.setState({ aboutMe: value })}
            value={aboutMe}
          />
        ) : (
          <p className="person-description">{aboutMe || "Description"}</p>
        )}
      </li>
    );
  }
}

export default AboutMe;
