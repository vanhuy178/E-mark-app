import * as types from '../actions/cartTypes'

const initialState = [

];

export const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.ADD_CART:
      // Check if product is already exist:
      const existState = state.find(item => item.id === action.payload.id)
      if (existState) {
        return state.map(item => item.id === action.payload.id ?
          { ...item, quanlity: item.quanlity + 1 } : item)
      }
      else {
        return [
          ...state,
          {
            ...action.payload,
            quanlity: 1
          }
        ]
      }

    case types.DELETE_CART:
      const existStateDel = state.find(item => item.id === action.payload.id)
      if (existStateDel.quanlity === 1) {
        return state.filter(item => item.id !== existStateDel.id)
      }
      else {
        return state.map(item => item.id === action.payload.id
          ? { ...item, quanlity: item.quanlity - 1 } : item)
      }
    default:
      return state
  }
}