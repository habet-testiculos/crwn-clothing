
import CardActionTypes from './cart.types.js';
import { addItemToCard } from './cart.utils';

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
        default: return state;
    }
}

export default cartReducer;
