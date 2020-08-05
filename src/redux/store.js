import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts/contactsReducer";

const store = createStore(contactsReducer, composeWithDevTools());

export default store;
