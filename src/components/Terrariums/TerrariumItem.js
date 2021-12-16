import React, { useContext } from "react";
import TerrariumItemForm from "./TerarriumItemForm";
import classes from "./TerrariumItem.module.css";
import CartContext from "../../context/cart-context";

const TerrariumItem = (props) => {
  const cartContext = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

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
        <TerrariumItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default TerrariumItem;
