import React from "react";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <button className={classes["button-6"]} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cosul tau</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default CartButton;
