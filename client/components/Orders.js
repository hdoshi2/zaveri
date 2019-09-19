import React from 'react'
import {connect} from 'react-redux'
import {fetchOrder} from '../store'

const Orders = props => {
  const {orders} = props
  return <div>{orders}</div>
}

const mapState = state => {
  console.log('statezz',state)
  return {
    orders: state.user.email
  }
}

const mapDispatch = dispatch => {
  console.log(dispatch)
  return {
    loadNewData() {
      dispatch(fetchOrder())
    }
  }
}

export default connect(mapState, mapDispatch)(Orders)
