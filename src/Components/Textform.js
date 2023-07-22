import React, { useState } from "react";

export default function Textform() {
  const [Text, setText] = useState("Enter Your text");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleupclick = () => {
    let uptext = Text.toUpperCase();
    setText(uptext);
  };

  const handleloclick = () => {
    let loText = Text.toLowerCase();
    setText(loText);
  };
  const handleClearText = () => {
    setText("");
  };

  return (
    <div>
      <div className="container mb-3">
        <textarea
          className="my-3 form-control"
          rows={15}
          value={Text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        type="button"
        onClick={handleupclick}
        className="btn mx-2 btn-danger"
      >
        To Upper Case
      </button>
      <button
        type="button"
        onClick={handleloclick}
        className="btn mx-2 btn-danger"
      >
        To Lower Case
      </button>
      <button
        type="button"
        onClick={handleClearText}
        className="btn mx-2 btn-danger"
      >
        Clear Text
      </button>
      <h1 className="my-3"> Your Text Summary:</h1>

      <p>
        {Text.split(" ").length} Words and {Text.length} characters
      </p>
    </div>
  );
}
