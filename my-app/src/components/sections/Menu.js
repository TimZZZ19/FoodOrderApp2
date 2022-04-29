import React from "react";
import { useContext } from "react";
import Card from "../reusables/Card";
import MenuItem from "../menu/MenuItem";
import classes from "./Menu.module.css";
import FoodContext from "../../store/FoodContext";

export default function Menu() {
  const foodContext = useContext(FoodContext);

  const menuItems = foodContext.menuItems;
  const menuItem = menuItems.map((item) => (
    <MenuItem key={item.id} {...item} />
  ));

  return (
    <section className={classes.menu}>
      <Card cardAppearing={true}>
        <ul className={classes["menu-items-list"]}>{menuItem}</ul>
      </Card>
    </section>
  );
}
