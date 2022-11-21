import * as types from './cartTypes'

export const addCart = product => {
    return {
        type: types.ADD_CART,
        payload: product
    }
}

export const deleteCart = product => {
    return {
        type: types.DELETE_CART,
        payload: product
    }
}
