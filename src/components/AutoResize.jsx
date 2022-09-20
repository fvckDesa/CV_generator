import React, { useState, useRef, useEffect } from "react";

function AutoResize({
  className = "",
  style = {},
  placeholder = "",
  value = "",
  onChange,
}) {
  const textareaRef = useRef();
  const [text, setText] = useState(value);

  useEffect(() => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${
      textareaRef.current.scrollHeight + 2
    }px`;
  });

  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      className={className}
      style={{ resize: "none", ...style }}
      placeholder={placeholder}
      onChange={onChange}
      value={text}
    />
  );
}
export default AutoResize;
