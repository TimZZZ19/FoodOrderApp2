import React from "react";
import ReactDOM from "react-dom";
import classes from "./CartContainer.module.css";

export default function CartContainer({ children }) {
  const overlaysDiv = document.getElementById("overlays");

  return ReactDOM.createPortal(
    <div className={classes["cart-container"]}> {children} </div>,
    overlaysDiv
  );
}
