import React from "react";
import TerrariumItemForm from "./TerarriumItemForm";
import classes from "./TerrariumItem.module.css";

const TerrariumItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.terrarium}>
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>{price}</p>
        <div className={classes.image}>
          <img src={props.image} alt="terrarium" />
        </div>
      </div>
      <div>
        <TerrariumItemForm />
      </div>
    </li>
  );
};

export default TerrariumItem;
