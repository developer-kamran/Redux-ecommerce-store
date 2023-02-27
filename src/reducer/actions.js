export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const REMOVE = 'REMOVE';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_TOTALS = 'GET_TOTALS';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';

export const actionCreator = (type, { id, toggle }) => {
  return { type, payload: { id, toggle } };
};
