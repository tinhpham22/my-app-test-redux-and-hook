import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actions";

const defaultState = {
    product: []
};

const homeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, product: [...state.product, action.product] };
        case REMOVE_PRODUCT:
            state.product.shift();
            return { ...state, product: [...state.product] };
        default:
            return state;
    }
}

export default homeReducer;