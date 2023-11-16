import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Clicked pressed");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Clicked pressed");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOneChange = (event) => {
    console.log("Changed");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myText"
          value={text}
          onChange={handleOneChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Upper Case
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert to Lower Case
      </button>
    </div>
  );
}
