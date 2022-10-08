export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEMS') {
    return {
      ...state,
      list: [...state.list, action.payload]
    }
  }
  if (action.type === 'CLEAR_ITEMS') {
    return {
      ...state,
      list: [],
    }
  }
  if (action.type === "REMOVE_ITEMS") {
    const newList = state.list.filter((item) => item.id !== action.payload);
    return {
      ...state,
      list: newList,
    }
  }
  if (action.type === 'EDIT_ITEM') {
    return {
      ...state,
      editID: action.payload,
      isEditing: true,
    }
  }
  if (action.type === 'ITEM_EDITED') {
    return {
      ...state,
      list:action.payload,
      isEditing: false,
      editID:null,
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
};