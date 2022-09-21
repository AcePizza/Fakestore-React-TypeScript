import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {};

const LoadingSpinner = (props: Props) => {
  return (
    <>
      <CircularProgress />
    </>
  );
};

export default LoadingSpinner;
