import React, { Component } from "react";

class AutoResize extends Component {
  constructor() {
    super();

    this.ref = React.createRef();
  }

  handleChange(e) {
    autoResize(e.target);

    this.props.onChange(e.target.value);
  }

  componentDidMount() {
    autoResize(this.ref.current);
  }

  render() {
    const { value, placeholder, className, style } = this.props;
    return (
      <textarea
        ref={this.ref}
        className={className}
        style={{ resize: "none", ...style }}
        placeholder={placeholder}
        onChange={this.handleChange.bind(this)}
        value={value}
      ></textarea>
    );
  }
}

export default AutoResize;

function autoResize(el) {
  el.style.height = "auto";
  el.style.height = `${el.scrollHeight + 2}px`;
}
