import React, { Component } from "react";
//style
import "style/Content-item.css";

class ContentList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li className="content-item">
        <header className="content-item__header">
          <h2>{this.props.name}</h2>
        </header>
        <ul className="content-item__list">
          <li className="content-item__list-item">
            <div className="marker" />
            <section>
              <h3>Year</h3>
              <h3>Where</h3>
            </section>
            <section>
              <h2>Title</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem
                ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum,
                dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor
                sit amet consectetur adipisicing elit
              </p>
            </section>
          </li>
        </ul>
      </li>
    );
  }
}

export default ContentList;
