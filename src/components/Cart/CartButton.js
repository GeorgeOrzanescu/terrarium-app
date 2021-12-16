import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../context/cart-context";

const CartButton = (props) => {
  const cartContext = useContext(CartContext);

  const numOfCartItems = cartContext.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);
  return (
    <button className={classes["button-6"]} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cosul tau</span>
      <span className={classes.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default CartButton;
