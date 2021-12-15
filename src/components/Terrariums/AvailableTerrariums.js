import React from "react";
import classes from "./AvailableTerrariums.module.css";
import img1 from "../../media/t3.jpg";
import img2 from "../../media/t4.jpg";
import img3 from "../../media/t6.jpg";
import Wrapper from "../UI/Wrapper";
import TerrariumItem from "./TerrariumItem";

const DUMMY_TERRARIUMS = [
  {
    id: 1,
    name: "The sunny jar!",
    description: "A mix of yellow , green with some brown grass",
    price: 99.99,
    image: img1,
  },
  {
    id: 2,
    name: "The shy one!",
    description:
      "Small and introvert, this terrarium doesn't stick hes head out!",
    price: 199.99,
    image: img2,
  },
  {
    id: 3,
    name: "Johny Bravo",
    description: "Haba Haba this is an impresive terrarium",
    price: 299.99,
    image: img3,
  },
];

const AvailableTerrariums = (props) => {
  const terrariumsList = DUMMY_TERRARIUMS.map((terrarium) => (
    <TerrariumItem
      name={terrarium.name}
      description={terrarium.description}
      price={terrarium.price}
      image={terrarium.image}
      key={terrarium.id}
    />
  ));

  return (
    <section>
      <Wrapper>
        <ul className={classes.ul}>{terrariumsList}</ul>
      </Wrapper>
    </section>
  );
};

export default AvailableTerrariums;
