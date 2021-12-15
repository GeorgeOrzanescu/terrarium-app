import React from "react";
import Input from "../UI/Input";
import classes from "./TerrariumItemForm.module.css";

const TerrariumItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Cantitate"
        input={{
          id: "cantitate",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button}>Adauga</button>
    </form>
  );
};

export default TerrariumItemForm;
