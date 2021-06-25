import React from "react";
import * as styles from "./Button.module.scss";

const Button = ({ action, type, onClick }) => {
  return (
    <button
      className={
        type === "outline"
          ? [styles.Button, styles.ButtonOutline].join(" ")
          : [styles.Button, styles.ButtonBasic].join(" ")
      }
      onClick={onClick}
    >
      {action}
    </button>
  );
};

export default Button;
