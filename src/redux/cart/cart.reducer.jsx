
import CardActionTypes from './cart.types.js';
import { addItemToCard, removeItemFromCard } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CardActionTypes.TOGGLE_CART_HIDDED:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CardActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCard(state.cartItems, action.payload)
            }
        case CardActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCard(state.cartItems, action.payload)
            }
        case CardActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default: return state;
    }
}

export default cartReducer;
