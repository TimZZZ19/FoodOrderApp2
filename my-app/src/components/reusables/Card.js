import React from "react";
import classes from "./Card.module.css";

export default function Card({ cardAppearing, children }) {
  const classArray = cardAppearing
    ? [classes.card, classes["appearing-effect"]].join(" ")
    : [classes.card];
  return <div className={classArray}>{children}</div>;
}
