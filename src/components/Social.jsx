import React, { Component } from "react";
//components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icons
import {
  faSquareInstagram,
  faSquareFacebook,
  faSquareGithub,
  faLinkedin,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const icons = {
  instagram: faSquareInstagram,
  facebook: faSquareFacebook,
  github: faSquareGithub,
  linkedin: faLinkedin,
  twitter: faSquareTwitter,
};

class Social extends Component {
  constructor() {
    super();

    this.state = {
      editMode: false,
      instagram: "",
      facebook: "",
      github: "https://github.com/fvckDesa/CV_generator",
      linkedin: "",
      twitter: "",
    };
  }

  toggleEditMode() {
    this.setState(({ editMode }) => ({ editMode: !editMode }));
  }

  handleChange(name) {
    return function (e) {
      this.setState({ [name]: e.target.value });
    };
  }

  render() {
    const { editMode, ...social } = this.state;
    return (
      <div className={`info-item social ${editMode ? "edit-mode-active" : ""}`}>
        <FontAwesomeIcon
          className="edit-btn"
          onClick={this.toggleEditMode.bind(this)}
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
                rel="noopener"
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
                onChange={this.handleChange(name).bind(this)}
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
}

export default Social;
