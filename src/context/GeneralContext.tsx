import { jsx } from "@emotion/react";
import React, { useState, createContext, FC } from "react";

interface IGeneralContext {
  someValue: string;
  someFunction?: (str: string) => void;
  loginUser?: (body: string) => void;
}

interface FetchOptions {
  method: string;
  body: string;
}

const defaultState = {
  someValue: "42",
};

type Props = {
  children: React.ReactNode;
};

export const GeneralContext = createContext<IGeneralContext>(defaultState);

export const GeneralContextProvider: FC<Props> = ({ children }) => {
  const [someValue, setSomeValue] = useState(defaultState.someValue);

  const someFunction = (str: string) => {
    setSomeValue(str);
  };

  const loginUser = async (body: string) => {
    console.log(body);
    const options: FetchOptions = {
      method: "POST",
      body: body,
    };

    try {
      const response = await fetch(
        "https://fakestoreapi.com/auth/login",
        options
      );
      const results = await response.json();
      console.log("results :>> ", results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GeneralContext.Provider
      value={{
        someValue,
        someFunction,
        loginUser,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
