import React, { useState } from "react";

export default function TextArea(props) {
  //use The props
  const [text, setText] = useState("Enter Text Here"); //use The State
  // text = "new text";                      // Wrong way to change the state
  // setText = ("new text");                 // Wrong way to change the state
  const handleUpClick = () => {
    // console.log("Uppercase Was Clicked") ;
    // setText("You Have Clicked On handleUpClicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    // console.log("Lowercase Was Clicked") ;
    // setText("You Have Clicked On handleUpClicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClear = () => {
    // console.log("Lowercase Was Clicked") ;
    // setText("You Have Clicked On handleUpClicked")
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    // console.log("I am Copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <h1 className="justify-center">
          {props.heading /*use The props */} - {/*text  /*use The State*/}
        </h1>
        <div className="flex flex-col mt-8  items-center">
          <textarea
            id="mybox"
            rows="5"
            cols="100"
            value={text /*use The State*/}
            onChange={handleOnChange}
            className=" border-neutral-950 text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-black focus:border-black dark:bg-white .placeholder-green-600::placeholder"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
      </div>
      <button
        className="content-start	mx-2 bg-blue-500 hover:bg-blue-700 text-white font-light w-30 text-base mt-3 py-1 px-2 rounded-full justify-start"
        onClick={handleUpClick}
      >
        Convert Uppercase
      </button>
      <button
        className="content-start	 bg-blue-500 hover:bg-blue-700 text-white font-light w-30 text-base mt-3 py-1 px-2 rounded-full justify-start"
        onClick={handleLoClick}
      >
        Convert Lowercase
      </button>
      <button
        className="content-start	mx-2 bg-blue-500 hover:bg-blue-700 text-white font-light w-30 text-base mt-3 py-1 px-2 rounded-full justify-start"
        onClick={handleClear}
      >
        Clear text
      </button>
      <button
        className="content-start	mx-2 bg-blue-500 hover:bg-blue-700 text-white font-light w-30 text-base mt-3 py-1 px-2 rounded-full justify-start"
        onClick={handleCopy}
      >
        Copy text
      </button>
      <button
        className="content-start	mx-2 bg-blue-500 hover:bg-blue-700 text-white font-light w-30 text-base mt-3 py-1 px-2 rounded-full justify-start"
        onClick={handleExtraSpaces}
      >
        Remove Extra Spaces
      </button>
      <div className="my-4">
        <h2 className="text-md my-3">Your Text Summary</h2>
        <p className="text-sm my-2">
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p className="text-sm my-2">
          {0.008 * text.split(" ").length} Minutes read
        </p>
        <h3 className="my-2">Preview</h3>
        <p className="my-3 text-sm">{text}</p>
      </div>
    </>
  );
}
