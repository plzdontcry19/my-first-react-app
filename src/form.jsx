import { useState, useEffect } from "react";
import { useTestContext } from "./hook/testHook";

const TestForm = (props) => {
  const { setReady } = props;
  const [fillValue, setFillValue] = useState("");
  const { state, setState} = useTestContext()

  const handleFormInput = (e) => {
    setFillValue(e.target.value);
    // console.log("target: ", e.target);
    // console.log("name: ", e.target.name);
    // console.log("value: ", e.target.value);
  };

  const handleBtnClick = (text) => {
    alert("handleBtnClick");
    setState(text);
    setReady(true)
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("handleFormSubmit");
    console.log("hey handleFormSubmit");
  };

  return (
    <>
      {`Submit fillValue : ${fillValue}`}
      <form onSubmit={handleFormSubmit}>
        <h2> Typical Form</h2>
        <input
          type="text"
          name="example"
          defaultValue={state}
          style={{ margin: "1rem 0" }}
          onChange={handleFormInput}
        ></input>
        <button onClick={() => handleBtnClick(fillValue)} type="submit">
          submit
        </button>
      </form>
    </>
  );
};

export default TestForm