import React, { Component } from "react";
// style
import "style/App.css";
// components
import Curriculum from "components/Curriculum";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Curriculum />
      </div>
    );
  }
}

export default App;
