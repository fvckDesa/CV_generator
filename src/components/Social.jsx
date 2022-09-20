import React, { useState } from "react";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import {
  faSquareInstagram,
  faSquareFacebook,
  faSquareGithub,
  faLinkedin,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { GITHUB } from "constants";

const icons = {
  instagram: faSquareInstagram,
  facebook: faSquareFacebook,
  github: faSquareGithub,
  linkedin: faLinkedin,
  twitter: faSquareTwitter,
};

function Social() {
  const [editMode, setEditMode] = useState(false);
  const [social, setSocial] = useState({
    instagram: "",
    facebook: "",
    github: GITHUB,
    linkedin: "",
    twitter: "",
  });

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleChange = (key) => (e) => {
    setSocial({ ...social, [key]: e.target.value });
  };

  return (
    <div className={`info-item social ${editMode ? "edit-mode-active" : ""}`}>
      <FontAwesomeIcon
        className="edit-btn"
        onClick={toggleEditMode}
        icon={faPenToSquare}
        size="lg"
      />
      {!editMode &&
        Object.entries(social)
          .filter((el) => !!el[1])
          .map(([name, link]) => (
            <a
              key={name}
              className="social-link"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={icons[name]} size="2xl" />
            </a>
          ))}
      {editMode &&
        Object.entries(social).map(([name, link]) => (
          <div key={name} className="social-field">
            <input
              type="url"
              className="social-field__input"
              placeholder={name}
              pattern="http(s)?:\/\/(www\.)?(.)+\.(.)+"
              value={link}
              onChange={handleChange(name)}
            />
            <FontAwesomeIcon
              className="social-field__icon"
              icon={icons[name]}
              size="lg"
            />
          </div>
        ))}
    </div>
  );
}

export default Social;
