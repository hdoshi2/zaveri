import React from 'react'
import {connect} from 'react-redux'

const Orders = props => {
  const {orderReducer} = props
  return (
    <div>
      {orderReducer.map(order => (
        <div key={order.id}>
          {order.orderName}
          {order.price}
        </div>
      ))}
    </div>
  )
}

const mapState = state => {
  return {
    orderReducer: state.orderReducer.orderList
  }
}

export default connect(mapState)(Orders)
