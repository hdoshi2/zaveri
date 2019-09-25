import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CUSTOMER = 'GET_CUSTOMER'

/**
 * ACTION CREATORS
 */
const getCustomer = customer => ({type: GET_CUSTOMER, customer})

/**
 * THUNK CREATORS
 */

export function fetchCustomer() {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/customer')
      dispatch(getCustomer(data))
    } catch (err) {
      console.log('error in fetchCustomer thunk')
    }
  }
}

/**
 * INITIAL STATE
 */
const defaultState = {isloading: true, customerList: []}

/**
 * REDUCER
 */

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CUSTOMER:
      return {isLoading: false, customerList: action.customer}
    default:
      return state
  }
}
