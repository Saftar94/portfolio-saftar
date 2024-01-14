import * as actions from "./actionTypes";

const initialState = {
  modals: {
    isOpen: false,
  },
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN_MODAL:
      return {
        ...state,
        modals: {
          isOpen: true,
        },
      };

    case actions.CLOSE_MODAL:
      return {
        ...state,
        modals: {
          isOpen: false,
        },
      };

    default:
      return state;
  }
};

export default todoReducer;
