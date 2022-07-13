import React from "react";
import "./Button.css"
function Button({ name, text, onClick }) {
  return (
      <button name={name} className="btn" onClick={onClick}>
        {text}
      </button>
  );
}

export default Button;
