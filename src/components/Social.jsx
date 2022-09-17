import React, { Component } from "react";
//style
import "style/Social.css";
//components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icons
import {
  faSquareInstagram,
  faSquareFacebook,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

class Social extends Component {
  render() {
    return (
      <div className="info-item social">
        <a className="social-link">
          <FontAwesomeIcon icon={faSquareInstagram} size="2xl" />
        </a>
        <a className="social-link">
          <FontAwesomeIcon icon={faSquareFacebook} size="2xl" />
        </a>
        <a className="social-link">
          <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
        </a>
      </div>
    );
  }
}

export default Social;
