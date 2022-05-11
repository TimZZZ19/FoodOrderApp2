import React from "react";
import { useContext, useState } from "react";
import Card from "../reusables/Card";
import MenuItem from "../menu/MenuItem";
import classes from "./Menu.module.css";
import FoodContext from "../../store/FoodContext";

export default function Menu() {
  const foodContext = useContext(FoodContext);

  const { isLoading, menuItems, httpError } = foodContext;

  const menuList = menuItems.map((item) => (
    <MenuItem key={item.menuId} {...item} />
  ));

  let menuContent;
  if (isLoading) {
    menuContent = <p className={classes["loading-text"]}> Loading ... </p>;
  } else {
    menuContent = httpError ? (
      <p className={classes["error-message"]}>{httpError}</p>
    ) : (
      <ul className={classes["menu-items-list"]}> {menuList} </ul>
    );
  }

  return (
    <section className={classes.menu}>
      <Card cardIsAppearing={true}>{menuContent}</Card>
    </section>
  );
}
