import * as actions from "./actionTypes";

export const openModal = (productId) => ({
  type: actions.OPEN_MODAL,
});

export const closeModal = () => ({
  type: actions.CLOSE_MODAL,
});
