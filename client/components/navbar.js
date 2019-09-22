import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const Navbar = ({handleClick, isLoggedIn}) => {
  const classes = useStyles()
  return (
    // <div>
    //   <h1>BOILERMAKER</h1>
    //   <nav>
    //     {isLoggedIn ? (
    //       <div>
    //         {/* The navbar will show these links after you log in */}
    //         <Link to="/home">Home</Link>
    //         <Link to="/orders">Orders</Link>
    //         <a href="#" onClick={handleClick}>
    //           Logout
    //         </a>
    //       </div>
    //     ) : (
    //       <div>
    //         {/* The navbar will show these links before you log in */}
    //         <Link to="/login">Login</Link>
    //         <Link to="/signup">Sign Up</Link>
    //       </div>
    //     )}
    //   </nav>
    //   <hr />
    // </div>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Timothy Zaveri Fine Jewelry
          </Typography>
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Button color="inherit" href="/home">
                Home
              </Button>
              <Button color="inherit" href="/orders">
                Orders
              </Button>
              <Button color="inherit" href="#" onClick={handleClick}>
                Logout
              </Button>

              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Button color="inherit" href="/login">
                Login
              </Button>
              <Button color="inherit" href="/signup">
                Sign Up
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
