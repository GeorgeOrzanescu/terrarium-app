import React from "react";
import classes from "./TerarriumsSummary.module.css";

const TerarriumsSummary = (props) => {
  return (
    <div className={classes.summary}>
      <h2 className={classes.headers}>Amazing Terrariums for you</h2>

      <p className={classes.paragraphs}>
        You can choose one of the available ones.
      </p>
      <p className={classes.paragraphs}>
        Or just describe us the terrarium of your dreams and will make it!
      </p>
    </div>
  );
};

export default TerarriumsSummary;
