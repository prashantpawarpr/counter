import React from "react";

const Button = (props) => {
  return <button onClick={props.buttonHandler}>{props.textSign}</button>;
};
export default Button;
