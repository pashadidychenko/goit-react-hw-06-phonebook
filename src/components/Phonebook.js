import React from "react";
import MainTitle from "./Title/MainTitle/MainTitle";
import ContactList from "./Contacts/ContactList/ContactList";
import { AddContact } from "./Contacts/AddContact/AddContact";
import FindContact from "./Contacts/FindContact/FindContact";
// import { sendStoregData, getStoregData } from "./Services/LocalStoreg";
import { CSSTransition } from "react-transition-group";
import popTransition from "./Contacts/transitions/pop.module.css";
import slideTitleTransition from "./Contacts/transitions/slideTitle.module.css";
import styles from "./Phonebook.module.css";
import { connect } from "react-redux";
import {
  addNewItem,
  deleteItem,
  getFilterValue,
} from "../redux/contacts/contactsActions";

class Phonebook extends React.Component {
  state = {
    inOn: false,
  };

  componentDidMount() {
    this.setState({ inOn: true });
  }

  render() {
    const { inOn } = this.state;
    const {
      items,
      filter,
      addNewItem,
      deleteItem,
      getFilterValue,
    } = this.props;
    return (
      <div className={styles.maineContainer}>
        <div className={styles.subContainer}>
          <CSSTransition
            in={inOn}
            timeout={500}
            classNames={slideTitleTransition}
            unmountOnExit
          >
            <MainTitle />
          </CSSTransition>
          <AddContact addNewItem={addNewItem} items={items} />
          <CSSTransition
            in={items.length > 1}
            timeout={250}
            classNames={popTransition}
            unmountOnExit
          >
            <FindContact getFilterValue={getFilterValue} />
          </CSSTransition>
          <ContactList items={items} filter={filter} deleteItem={deleteItem} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  addNewItem,
  deleteItem,
  getFilterValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
