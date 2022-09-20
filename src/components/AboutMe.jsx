import React, { useState } from "react";
// components
import AutoResize from "components/AutoResize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// constants
import { ABOUT_ME } from "constants";

function AboutMe() {
  const [editMode, setEditMode] = useState(false);
  const [aboutMe, setAboutMe] = useState(ABOUT_ME);

  return (
    <li className="content-item about-me">
      <FontAwesomeIcon
        className="edit-btn"
        onClick={() => setEditMode(!editMode)}
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
          onChange={(e) => setAboutMe(e.target.value)}
          value={aboutMe}
        />
      ) : (
        <p className="person-description">{aboutMe}</p>
      )}
    </li>
  );
}

export default AboutMe;
