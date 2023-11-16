import React, { useState } from "react";
import PropTypes from "prop-types";

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
  const handleCapClick = () => {
    const capitalized = text.split(" ").map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    });
    setText(capitalized.join(" "));
  };
  const handleClearTextClick = () => {
    setText("");
  };
  const handleOneChange = (event) => {
    console.log("Changed");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myText"
            value={text}
            placeholder="Type or paste your content here"
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
        <button className="btn btn-primary mx-1" onClick={handleCapClick}>
          Convert to Capitalised Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearTextClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} read time</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "Enter The Text To Analyse",
};
