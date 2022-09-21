import React, { createContext, useContext } from "react";
import { GeneralContextInterface } from "../@types";

export const GeneralContext = createContext<GeneralContextInterface | null>(
  null
);

export const sampleGeneralContext: GeneralContextInterface = {
  name: "John-117",
  author: "Master Chief",
  url: "https://en.wikipedia.org/wiki/Master_Chief_(Halo)",
};
