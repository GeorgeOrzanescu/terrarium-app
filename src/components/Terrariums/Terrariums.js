import React from "react";
import AvailableTerrariums from "./AvailableTerrariums";
import TerarriumsSummary from "./TerarriumsSummary";

const Terrariums = () => {
  return (
    <React.Fragment>
      <TerarriumsSummary />
      <AvailableTerrariums />
    </React.Fragment>
  );
};

export default Terrariums;
