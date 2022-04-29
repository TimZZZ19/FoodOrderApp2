import React from "react";
import classes from "./MenuItem.module.css";
import MenuItemOrderUI from "./MenuItemOrderUI";

export default function MenuItem({ id, name, description, price }) {
  const styledPrice = `$ ${price.toFixed(2)}`;

  return (
    <li className={classes["menu-item"]}>
      <div className={classes["menu-item__information"]}>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>{styledPrice}</p>
      </div>
      <div className={classes["menu-item__order-UI"]}>
        <MenuItemOrderUI />
      </div>
    </li>
  );
}
