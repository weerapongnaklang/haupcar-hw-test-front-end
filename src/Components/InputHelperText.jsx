import React from "react";

const InputHelperText = ({ text, hidden = true }) => {
  return (
    <p className={`text-red-500 text-xs italic ${hidden ? "hidden" : ""}`}>
      {text}
    </p>
  );
};

export default InputHelperText;
