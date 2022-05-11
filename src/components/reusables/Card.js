import React from "react";
import classes from "./Card.module.css";

export default function Card({ cardIsAppearing, children }) {
  const secondaryClass = cardIsAppearing ? classes["appearing-effect"] : "";
  return <div className={`${classes.card} ${secondaryClass}`}>{children}</div>;
}
