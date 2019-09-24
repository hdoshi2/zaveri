import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ORDER = 'GET_ORDER'
const ADD_ORDER = 'ADD_STUDENT'

/**
 * INITIAL STATE
 */
const defaultOrder = {isloading: true, orderList: []}

/**
 * ACTION CREATORS
 */
const getOrder = order => ({type: GET_ORDER, order})

const addOrder = newOrder => ({type: ADD_ORDER, newOrder})

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

export function addOrderThunk(newOrder) {
  console.log('in thunk', newOrder)
  return async dispatch => {
    try {
      //response.data =[]
      //updates db with post request
      const {data} = await axios.post('/api/order', newOrder)
      //dispatch the action to update reducer
      dispatch(addOrder(data))
    } catch (err) {
      console.log('error in order thunk')
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
  console.log('action', action)
  switch (action.type) {
    case GET_ORDER:
      return {isloading: false, orderList: action.order}
    case ADD_ORDER:
      const newOrder = {...action.newOrder}
      return [...state, newOrder]
    default:
      return state
  }
}
