import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOrder} from '../store/order'

class Orders extends Component {
  constructor(props) {
    console.log('props', props)
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchOrderList()
  }

  render() {
    console.log(this.state)
    return <div>TEST</div>
  }
}

const mapState = state => {
  console.log('statezz', state)
  return {
    email: state.user.email
  }
}

const mapDispatch = dispatch => {
  return {
    fetchOrderList: () => dispatch(fetchOrder())
  }
}

export default connect(mapState, mapDispatch)(Orders)
