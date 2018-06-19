export const ADD_PRODUCT = "ADD_PRODUCT"
export const REMOVE_PRODUCT = "REMOVE_PRODUCT"

export function addProduct (product){
    return (dispatch) => {
        dispatch({ type: ADD_PRODUCT, data: product })
    }
}
export function removeProduct (name){
    return (dispatch) => {
        dispatch({ type: REMOVE_PRODUCT, data: { name } })
    }
}