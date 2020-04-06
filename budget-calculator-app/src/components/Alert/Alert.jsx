import React from "react";
import styles from "./Alert.module.scss";

const Alert = ({ type, text }) => {
  return (
    <>
      <div className={`alert alert-${type}`}>{text}</div>
    </>
  );
};

export default Alert;
