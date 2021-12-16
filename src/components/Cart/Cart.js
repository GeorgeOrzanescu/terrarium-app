import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemRemover = (id) => {};
  const cartItemAdder = (item) => {};

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemover.bind(null, item.id)}
          onAdd={cartItemAdder.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {CartItems}
      <div className={classes.total}>
        <span>Total Suma</span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Inchide
        </button>
        {hasItems && <button className={classes.button}>Comanda</button>}
      </div>
    </Modal>
  );
};

export default Cart;
