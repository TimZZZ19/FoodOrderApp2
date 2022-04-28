import React from "react";
import classes from "./Hero.module.css";
import heroImage from "../../assets/indian-cuisine.jpeg";
import Card from "../reusable_components/Card";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes["hero__img"]}>
        <img src={heroImage} alt="beautiful food"></img>
      </div>
      <div className={classes["hero__marketing-msg"]}>
        <Card>
          <h1>Great Food, Fast Delivery</h1>
          <p>The most popular food-ordering platform</p>
          <p>Provide you the best food-ordering experience</p>
          <p>Fast, Affordable and Delicious!</p>
        </Card>
      </div>
    </section>
  );
}
