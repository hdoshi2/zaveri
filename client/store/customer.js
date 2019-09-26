import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CUSTOMER = 'GET_CUSTOMER'
const ADD_CUSTOMER = 'ADD_CUSTOMER'

/**
 * ACTION CREATORS
 */
const getCustomer = customer => ({type: GET_CUSTOMER, customer})

const addCustomer = newCustomer => ({type: ADD_CUSTOMER, newCustomer})

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

export function addCustomerThunk(newCustomer) {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/customer', newCustomer)
      dispatch(addCustomer(data))
    } catch (err) {
      console.log('error in addCustomer thunk')
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
    case ADD_CUSTOMER:
      return {
        isLoading: false,
        customerList: [...state.customerList, action.newCustomer]
      }
    default:
      return state
  }
}
