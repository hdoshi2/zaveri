import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ORDER = 'GET_ORDER'

/**
 * INITIAL STATE
 */
const defaultOrder = {}

/**
 * ACTION CREATORS
 */
const getOrder = order => ({type: GET_ORDER, order})

/**
 * THUNK CREATORS
 */
// export const fetchOrder = () => async dispatch => {
//   try {
//     const res = await axios.get('/api/order')
//     dispatch(getOrder(res.data || defaultOrder))
//   } catch (err) {
//     console.error(err)
//   }
// }

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
export default function(state = defaultOrder, action) {
  switch (action.type) {
    case GET_ORDER:
      return action.order
    default:
      return state
  }
}
