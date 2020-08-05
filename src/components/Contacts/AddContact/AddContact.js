import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddContact.module.css";
import Alert from "../../Alet/Alert";
import { CSSTransition } from "react-transition-group";
import alertTransition from "../../Contacts/transitions/alert.module.css";

export class AddContact extends React.Component {
  state = {
    name: "",
    number: "",
    exist: false,
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
      name: this.state.name.replace(/\b\w/g, (l) => l.toUpperCase()),
      number: this.state.number,
    };
    if (
      this.props.items.find(
        (element) => element.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      this.setState({ exist: true });
      return setTimeout(() => {
        this.setState({ exist: false });
      }, 2000);
    } else {
      this.props.addNewItem(contact);
    }
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number, exist } = this.state;
    return (
      <form className={styles.contactForm} onSubmit={this.handleSubmit}>
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
        <button variant="outlined" type="submit">
          Додати контакт
        </button>
        <CSSTransition
          in={exist}
          timeout={250}
          classNames={alertTransition}
          unmountOnExit
        >
          <Alert />
        </CSSTransition>
      </form>
    );
  }
}
