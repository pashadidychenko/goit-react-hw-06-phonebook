import React from "react";
import styles from "./FindContact.module.css";

const FindContact = ({ getFilterValue }) => {
  return (
    <div className={styles.findContainet}>
      <label htmlFor="findContact">Введіть ім'я для пошуку</label>
      <input id="findContact" type="text" onChange={getFilterValue} />
    </div>
  );
};

export default FindContact;
