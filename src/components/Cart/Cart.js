import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const CartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "1",
          name: "The sunny jar!",
          description: "A mix of yellow , green with some brown grass",
          price: 99.99,
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {CartItems}
      <div className={classes.total}>
        <span>Total Suma</span>
        <span>99.99</span>
      </div>
      <div>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Inchide
        </button>
        <button className={classes.button}>Comanda</button>
      </div>
    </Modal>
  );
};

export default Cart;
