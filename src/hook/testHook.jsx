import { createContext, useContext, useState, useMemo, useEffect } from "react";
import axios from "axios";

const TestContext = createContext({});

const TestContextProvider = ({ children }) => {
  const [state, setState] = useState("");

  const callApi = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log("data; ", data);
    setState(data.name);
  };

  const value = useMemo(
    () => ({
      state,
      setState,
    }),
    [state]
  );

  useEffect(() => {
    setTimeout(() => {
      callApi();
    }, 1000);
  }, []);

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
};

export const useTestContext = () => {
  return useContext(TestContext);
};

export default TestContextProvider;
