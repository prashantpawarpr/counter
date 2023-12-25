import React from "react";

const Button = (props) => {
  return (
    <button
      style={{
        fontSize: "50px",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        marginLeft: "5px",
      }}
      onClick={props.buttonHandler}
    >
      {props.textSign}
    </button>
  );
};
export default Button;
