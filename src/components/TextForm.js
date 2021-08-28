import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let upper = text.toUpperCase();
    setText(upper);
  };

  const handleOnChange = (event) => {
    console.log("OnChange was clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h1> {props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          rows="8"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}

TextForm.defaultProps = {
  heading: "Enter the text to analyze",
};
