import React, { useEffect, useState } from "react";
import classes from "./AvailableTerrariums.module.css";
import Wrapper from "../UI/Wrapper";
import TerrariumItem from "./TerrariumItem";

import firebase from "../../firebase.js";

// const DUMMY_TERRARIUMS = [
//   {
//     id: 1,
//     name: "The sunny jar!",
//     description: "A mix of yellow , green with some brown grass",
//     price: 99.99,
//     image: img1,
//   },
//   {
//     id: 2,
//     name: "The shy one!",
//     description:
//       "Small and introvert, this terrarium doesn't stick hes head out!",
//     price: 199.99,
//     image: img2,
//   },
//   {
//     id: 3,
//     name: "Johny Bravo",
//     description: "Haba Haba this is an impresive terrarium",
//     price: 299.99,
//     image: img3,
//   },
// ];

const AvailableTerrariums = (props) => {
  const [terrariums, setTerrariums] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("Terrariums");

  function getTerrariums() {
    setLoading(true);
    ref.get().then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      setTerrariums(data);
      setLoading(false);
    });
  }

  useEffect(() => {
    getTerrariums();
  }, []);

  const terrariumsList = terrariums.map((terrarium) => (
    <TerrariumItem
      name={terrarium.name}
      id={terrarium.id}
      description={terrarium.description}
      price={terrarium.price}
      image={terrarium.image}
      key={terrarium.description}
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
