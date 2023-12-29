import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    text
      ? props.showAlert("Converted to Upper Case", "success")
      : props.showAlert("Enter some text", "primary");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    text
      ? props.showAlert("Converted to Lower Case", "success")
      : props.showAlert("Enter some text", "primary");
  };
  const handleCapClick = () => {
    const capitalized = text
      .trim()
      .split(" ")
      .map((word) => {
        return word ? word[0].toUpperCase() + word.slice(1) : "";
      });
    setText(capitalized.join(" "));
    text
      ? props.showAlert("Converted to Capitalised Case", "success")
      : props.showAlert("Enter some text", "primary");
  };
  const handleClearTextClick = () => {
    setText("");
    text
      ? props.showAlert("Text Cleared", "success")
      : props.showAlert("Enter some text", "primary");
  };
  const handleCopyTextClick = () => {
    let text1 = document.getElementById("myText");
    text1.select();
    navigator.clipboard.writeText(text1.value);
    text
      ? props.showAlert("Text Copy to Clipboard", "success")
      : props.showAlert("Enter some text", "primary");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    text
      ? props.showAlert("Extra Spaced Removed", "success")
      : props.showAlert("Enter some text", "primary");
  };
  const handleOnChange = (event) => {
    console.log("Changed");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#0e2843" : "white" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0e2843",
              color: props.mode === "light" ? "#0e2843" : "white",
            }}
            id="myText"
            value={text}
            placeholder="Type or paste your content here"
            onChange={handleOnChange}
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
        <button className="btn btn-primary mx-1" onClick={handleCopyTextClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "#0e2843" : "white" }}
      >
        <h2>Your Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} read time</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter some text in the above Text Area to Preview it"}
        </p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "Enter The Text To Analyse",
};
