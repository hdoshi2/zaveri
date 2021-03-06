import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  Orders,
  NewOrder,
  NewCustomer
} from './components'
import {me} from './store'
import {fetchOrder} from './store/order'
import {fetchCustomer} from './store/customer'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn, isLoading} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {isLoggedIn &&
          (isLoading ? (
            <div>LOADING</div>
          ) : (
            <Switch>
              {/* Routes placed here are only available after logging in */}
              {/* <Redirect to="/home" /> */}
              <Route path="/home" component={UserHome} />
              <Route path="/orders" component={Orders} />
              <Route path="/newOrder" component={NewOrder} />
              <Route path="/newCustomer" component={NewCustomer} />
            </Switch>
          ))}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    isLoading: state.orderReducer.isLoading
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
      dispatch(fetchOrder())
      dispatch(fetchCustomer())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
