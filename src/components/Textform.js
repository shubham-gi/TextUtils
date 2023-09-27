import React, { useState } from "react";
import './Textform.css'
export default function Textform(props) {
  
  const [text, setText] = useState("");
  function handleUpClick() {
    if (text === "") {
      props.handleAlert("warning", "Enter something");
    } else {
      const temp = text.toUpperCase();
      setText(temp);
      props.handleAlert("success", "Converted to uppercase");
    }
  }
  function handleChange(event) {
    setText(event.target.value);
  }
  function handleLoClick() {
    if (text === "") {
      props.handleAlert("warning", "Enter something");
    } else {
      let temp = text.toLocaleLowerCase();
      setText(temp);
      props.handleAlert("success", "Converted to lowercase ");
    }
  }
  function handleClear() {
    if (text === "") {
      props.handleAlert("warning", "Enter something to clear");
    } else {
      setText("");
      props.handleAlert("success", "Text cleared ");
    }
  }
  function handleCapitalizeClick() {
    if (text === "") {
      props.handleAlert("warning", "Enter something");
    } else {
      const ar = text.split(" ");
      const newAr = ar.map((element) => {
        return element[0].toUpperCase() + element.substring(1);
      });
      setText(newAr.join(" "));
      props.handleAlert("success", "All words capitalized successfully");
    }
  }
  function handleSpaces() {
    if (text === "") {
      props.handleAlert("warning", "Enter something");
    } else {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.handleAlert("success", "Extra spaces are removed");
    }
  }
  function handleCopy() {
    if (text === "") {
      props.handleAlert("warning", "Enter something");
    } else {
      let textx = document.getElementById("text1");
      textx.select();
      navigator.clipboard.writeText(textx.value);
      props.handleAlert("success", "Copied to clipboard");
    }
  }
  function countWords() {
    let words = 0;
    text.split(" ").forEach((element) => {
      if (element !== "") ++words;
    });
    return words;
  }
  return (
    <>
      <div
        className={`container my-3 ${props.mode}`}
        // style={{
        //   backgroundColor: props.mode === "light" ? "white" : "#042743",
        //   color: props.mode === "light" ? "#042743" : "white",
        // }}
      >
        <div className="mb-3">
          <h1 className={props.mode}>{props.heading}</h1>
          {/* <label for="text1" className="form-label">
          Example textarea
        </label> */}
          <textarea
            value={text}
            onChange={handleChange}
            className={`form-control my-1 ${props.mode}`}
            id="text1"
            rows="8"
            // style={{
            //   backgroundColor: props.mode === "light" ? "white" : "grey",
            //   color: props.mode === "light" ? "#042743" : "white",
            // }}
          ></textarea>
          <div className="btn btn-primary m-1" onClick={handleUpClick}>
            Convert to Uppercase
          </div>
          <div className="btn btn-primary m-1" onClick={handleLoClick}>
            Convert to Lowercase
          </div>
          <div className="btn btn-primary m-1" onClick={handleCapitalizeClick}>
            Convert to Capitalize
          </div>
          <div className="btn btn-info m-1" onClick={handleSpaces}>
            Remove Extra Spaces
          </div>
          <div className="btn btn-success mx-1" onClick={handleCopy}>
            Copy
          </div>
          <div className="btn btn-warning mx-1" onClick={handleClear}>
            Clear
          </div>
        </div>
      </div>
      <div
        className={`container ${props.mode}`} 
        // style={{
        //   backgroundColor: props.mode === "light" ? "white" : "#042743",
        //   color: props.mode === "light" ? "#042743" : "white",
        // }}
      >
        <h2>Your text summary</h2>
        <p>
          {countWords()} words, {text.length} letters
        </p>
        <p>{countWords() * (0.008).toFixed(2)} Minutes read</p>
        <h2> Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text to preview"}</p>
      </div>
    </>
  );
}
