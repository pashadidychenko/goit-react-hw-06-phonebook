const addNewItem = (item) => {
  return {
    type: "ADD_NEW_ITEM",
    payload: item,
  };
};

const deleteItem = (e) => {
  const id = e.target.id;
  return {
    type: "DELETE_ITEM",
    payload: id,
  };
};

const getFilterValue = (e) => {
  const string = e.target.value;
  return {
    type: "FILTER_ITEM",
    payload: string,
  };
};
export { addNewItem, deleteItem, getFilterValue };
