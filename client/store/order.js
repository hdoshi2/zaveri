import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ORDER = 'GET_ORDER'

/**
 * INITIAL STATE
 */
const defaultOrder = {isloading: true, orderList: []}

/**
 * ACTION CREATORS
 */
const getOrder = order => ({type: GET_ORDER, order})

/**
 * THUNK CREATORS
 */

export function fetchOrder() {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/order')
      dispatch(getOrder(data))
    } catch (err) {
      console.log('error in fetchOrder thunk')
    }
  }
}

/**
 * REDUCER
 */
// export default function(state = defaultOrder, action) {
//   switch (action.type) {
//     case GET_ORDER:
//       return action.order
//     default:
//       return state
//   }
// }

export const orderReducer = (state = defaultOrder, action) => {
  switch (action.type) {
    case GET_ORDER:
      return {isloading: false, orderList: action.order}
    default:
      return state
  }
}
