import { combineReducers } from 'redux';
 
import { ADD_PRODUCT } from "../Actions/"
 
let initialState = {}
 
const products = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const { data: { qtty, name}} = action
            const product = { qtty: state[name] ? state[name].qtty + qtty : qtty}
            return Object.assign({}, state, { [name]: product });
        default:
            return state;
    }
};
 const rootReducer = combineReducers({
    products
})
 
export default rootReducer;