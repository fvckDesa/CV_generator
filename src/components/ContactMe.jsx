import React, { Component } from "react";
//components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactMeItem from "components/ContactMeItem";
//icons
import {
  faLocationDot,
  faPhone,
  faGlobe,
  faEnvelope,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
//constants
import { ADDRESS, MAIL } from "constants";

class ContactMe extends Component {
  constructor() {
    super();

    this.state = {
      editMode: false,
      address: ADDRESS,
      website: "",
      mail: MAIL,
      phone: "",
    };
  }

  toggleEditMode() {
    this.setState(({ editMode }) => ({ editMode: !editMode }));
  }

  changeState(name) {
    return function (e) {
      this.setState({ [name]: e.target.value });
    };
  }

  render() {
    const { editMode, address, website, mail, phone } = this.state;

    return (
      <div className="info-item">
        <FontAwesomeIcon
          className="edit-btn"
          icon={faPenToSquare}
          size="lg"
          onClick={this.toggleEditMode.bind(this)}
        />
        <header className="info-item__header">CONTACT ME</header>
        <ul className="info-item__list">
          {(address || editMode) && (
            <ContactMeItem
              icon={faLocationDot}
              title="address"
              content={address}
              handleChange={this.changeState("address").bind(this)}
              editMode={editMode}
            />
          )}
          {(website || editMode) && (
            <ContactMeItem
              icon={faGlobe}
              title="website"
              content={website}
              handleChange={this.changeState("website").bind(this)}
              isAnchor
              editMode={editMode}
            />
          )}
          {(mail || editMode) && (
            <ContactMeItem
              icon={faEnvelope}
              title="mail"
              content={mail}
              handleChange={this.changeState("mail").bind(this)}
              isAnchor
              editMode={editMode}
            />
          )}
          {(phone || editMode) && (
            <ContactMeItem
              icon={faPhone}
              title="phone"
              content={phone}
              handleChange={this.changeState("phone").bind(this)}
              editMode={editMode}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default ContactMe;
