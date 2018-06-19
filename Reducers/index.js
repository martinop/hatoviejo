import { combineReducers } from 'redux';
 
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../Actions/"
 
let initialState = {}
 
const products = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            const { data: { qtty, name, image }} = action
            const product = { qtty: state[name] ? state[name].qtty + qtty : qtty, image}
            return Object.assign({}, state, { [name]: product });
        }  
        case REMOVE_PRODUCT: {
            const { data: { name }} = action
            let product = state[name]
            product.qtty = product.qtty - 1
            if(product.qtty > 0)
                return Object.assign({}, state, { [name]: product });
            else {
                const products = Object.keys(state)
				.filter(e => state[e].qtty > 0)
				.reduce((obj, key) => {
					obj[key] = state[key];
					return obj;
                  }, {})
                return Object.assign({}, {...products});
            }
        }
        default:
            return state;
    }
};
 const rootReducer = combineReducers({
    products
})
 
export default rootReducer;