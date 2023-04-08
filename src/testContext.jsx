import React, { useState, useEffect } from "react";

import "./index.css";
import TestForm from "./form";
import { useTestContext } from "./hook/testHook";

const EventExample = () => {
  const [ready, setReady] = useState(false);
  const { state } = useTestContext();

  useEffect(() => {
    if (ready) {
      alert("success");
    }
  }, [ready]);

  return (
    <section>
      {`Submit value : ${state}`}
      <br />
      <TestForm setReady={setReady} />
    </section>
  );
};

export default EventExample;
