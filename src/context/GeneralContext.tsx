import { jsx } from "@emotion/react";
import React, { useState, createContext, FC } from "react";

interface IGeneralContext {
  someValue: string;
  someFunction?: () => void;
}

const defaultState = {
  someValue: "42",
};

const GeneralContext = createContext<IGeneralContext>(defaultState);

export const GeneralContextProvider: FC = ({ children }) => {
  const [someValue, setSomeValue] = useState(defaultState.someValue);

  const someFunction = () => {
    setSomeValue("420");
  };

  return (
    <GeneralContext.Provider
      value={{
        someValue,
        someFunction,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
