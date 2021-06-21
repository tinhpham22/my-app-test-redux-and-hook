import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actions";

const defaultState = {
    products: []
};

const homeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, products: [...state.products, action.product] };
        case REMOVE_PRODUCT:
            const filter = state.products.filter(f => f.id !== action.id);
            return { ...state, products: filter };
        default:
            return state;
    }
}

export default homeReducer;