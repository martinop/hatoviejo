export const ADD_PRODUCT = "ADD_PRODUCT"

export function addProduct (product){
    return (dispatch) => {
        dispatch({ type: ADD_PRODUCT, data: product })
    }
}