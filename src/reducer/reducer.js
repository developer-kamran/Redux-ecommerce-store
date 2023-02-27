import {
  DECREASE,
  INCREASE,
  REMOVE,
  CLEAR_CART,
  GET_TOTALS,
  GET_AMOUNT,
  TOGGLE_AMOUNT,
} from './actions';

export const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }
  if (action.type === TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (action.payload.id == cartItem.id) {
          if (action.payload.toggle == 'inc') {
            return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
          }
          if (action.payload.toggle == 'dec') {
            return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
          }
        }
        return cartItem;
      }),
    };
  }
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        cartTotal.amount += amount;
        cartTotal.total += amount * price;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  return state;
};

// switch (action.type) {
//   case CLEAR_CART:
//     return { ...state, cart: [] };

//   default:
//     return state;
// }

// if (action.type === DECREASE) {
//   let tempCart = state.cart.map((cartItem) => {
//     if (cartItem.id === action.payload.id) {
//       cartItem = { ...cartItem, amount: cartItem.amount - 1 };
//     }
//     return cartItem;
//   });
//   return { ...state, cart: tempCart };
// }

// if (action.type === INCREASE) {
//   let tempCart = state.cart.map((cartItem) => {
//     if (cartItem.id === action.payload.id) {
//       cartItem = { ...cartItem, amount: cartItem.amount + 1 };
//     }
//     return cartItem;
//   });
//   return { ...state, cart: tempCart };
// }
