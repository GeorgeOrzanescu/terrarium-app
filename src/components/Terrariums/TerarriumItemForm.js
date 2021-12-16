import React, { useState } from "react";
import Input from "../UI/Input";
import classes from "./TerrariumItemForm.module.css";

const TerrariumItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    let currentAmount = event.target.querySelector("input").value;
    const currentAmountNumber = +currentAmount;
    event.target.reset();

    if (currentAmount.trim().length === 0 || currentAmountNumber < 1) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(currentAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
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
      {!amountIsValid && <p>Te rugam introdu 1 pana la 5 obiecte</p>}
    </form>
  );
};

export default TerrariumItemForm;
