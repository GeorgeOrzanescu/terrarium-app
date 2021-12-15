import React from "react";
import HeaderImage from "../../media/header.jpg";
import classes from "./Header.module.css";
import CartButton from "../Cart/CartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Terrarium</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.imgdiv}>
        <img src={HeaderImage} alt="green leafs with water droplets" />
      </div>
    </React.Fragment>
  );
};

export default Header;
