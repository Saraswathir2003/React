import { useState } from "react";

function TextPreview() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Text Preview</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />

      <p>{text}</p>
    </div>
  );
}

export default TextPreview;
