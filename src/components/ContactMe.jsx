import React, { Component } from "react";
//components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icons
import {
  faLocationDot,
  faPhone,
  faGlobe,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

class ListItem extends Component {
  render() {
    const { icon, title, content, isAnchor = false } = this.props;
    return (
      <li className="info-item__list-item">
        <FontAwesomeIcon className="info-item__list-item__icon" icon={icon} />
        <div>
          <h3>{title}</h3>
          {isAnchor ? (
            <a href={content} target="_blank">
              {content.replace("mailto:", "")}
            </a>
          ) : (
            <p>{content}</p>
          )}
        </div>
      </li>
    );
  }
}

class ContactMe extends Component {
  render() {
    return (
      <div className="info-item">
        <header className="info-item__header">CONTACT ME</header>
        <ul className="info-item__list">
          <ListItem icon={faLocationDot} title="address" content="Roma" />
          <ListItem
            icon={faGlobe}
            title="website"
            content="https://website.com"
            isAnchor
          />
          <ListItem
            icon={faEnvelope}
            title="mail"
            content="mailto:test@mail.com"
            isAnchor
          />
          <ListItem icon={faPhone} title="phone" content="999 999 9999" />
        </ul>
      </div>
    );
  }
}

export default ContactMe;
