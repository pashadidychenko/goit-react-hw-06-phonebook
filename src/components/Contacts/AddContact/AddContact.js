import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddContact.module.css";

export class AddContact extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleInputValue = (el) => {
    const inputValue = el.target.dataset.type;
    this.setState({
      [inputValue]: el.target.value,
    });
  };

  handleSubmit = (el) => {
    el.preventDefault();
    const contact = {
      id: uuidv4(),
      ...this.state,
    };
    this.props.onFormSubmit(contact);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.contactForm}>
        <label htmlFor="contactName">Ім'я</label>
        <input
          id="contactName"
          type="text"
          data-type="name"
          value={name}
          placeholder="Введіть Ваше Ім'я"
          onChange={this.handleInputValue}
        />
        <br />
        <label htmlFor="contactNumber">Номер</label>
        <input
          id="contactNumber"
          type="text"
          data-type="number"
          value={number}
          placeholder="Введіть Ваш номер"
          onChange={this.handleInputValue}
        />
        <br />
        <button variant="outlined" type="submit" onClick={this.handleSubmit}>
          Додати контакт
        </button>
      </form>
    );
  }
}

AddContact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
