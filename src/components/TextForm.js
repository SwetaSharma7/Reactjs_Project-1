import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = Text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("on Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.Select();
    navigator.clipboard.writeText("text.value");
  }
  const [Text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          convert to UpperCase
        </button>

        <button className="btn btn-primary mx-2 my-2 my-2" onClick={handleLowClick}>
          convert to LowerCase
        </button>

        <button className="btn btn-primary mx-2 my-2"onClick={handleCopy}>Copy Text</button>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {Text.split(" ").length} words and {Text.length} characters
        </p>
        <p>{0.008 * Text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
