import Button from "./Components/Button";
import Display from "./Components/Display";
import "./App.css";
import { useState } from "react";
function App() {
  const [value, setValue] = useState(0);
  const plusBtnHandler = () => {
    setValue(value + 1);
  };
  const minusBtnHandler = () => {
    setValue(value - 1);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <br></br>
      <Button textSign="+" buttonHandler={plusBtnHandler} />
      <Display displayValue={value} />
      <Button textSign="-" buttonHandler={minusBtnHandler} />
    </div>
  );
}

export default App;
