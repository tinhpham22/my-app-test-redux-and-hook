import { ADD_PRODUCT } from "./actions";

const defaultState = {
    product: []
};

const homeReducer = (state=defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state ,product: [...state.product, action.product]};
        default: 
            return state;
    }
}

export default homeReducer;