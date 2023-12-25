import React from "react";
const Display = (props) => {
  return (
    <label
      style={{
        fontSize: "50px",
        width: "100px",
        height: "100px",
      }}
    >
      {props.displayValue}
    </label>
  );
};
export default Display;
