import React, { Component } from "react";
//style
import "style/Curriculum.css";
//components
import Info from "components/Info";
import CurriculumHeader from "components/Curriculum-header";
import CurriculumContent from "components/Curriculum-content";
//images
import UserPicture from "assets/user-solid.svg";

class Curriculum extends Component {
  constructor() {
    super();

    this.state = {
      header: {
        picture: UserPicture,
        name: "",
        profession: "",
      },
      content: {
        aboutMe: "",
        education: [],
        experience: [],
      },
    };
  }

  changeState(name) {
    return function (value) {
      const currentState = this.state[name];
      this.setState({
        [name]: {
          ...currentState,
          ...(typeof value === "function" ? value(currentState) : value),
        },
      });
    };
  }

  render() {
    return (
      <div className="curriculum">
        <CurriculumHeader
          values={this.state.header}
          changeState={this.changeState("header").bind(this)}
        />
        <CurriculumContent
          values={this.state.content}
          changeState={this.changeState("content").bind(this)}
        />
        <Info />
      </div>
    );
  }
}

export default Curriculum;
