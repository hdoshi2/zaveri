import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addCustomerThunk} from '../store/customer'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    margin: theme.spacing(4, 10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '50%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    padding: '25px'
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
})
const defaultState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
}
class NewCustomer extends Component {
  state = defaultState

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.addCustomerToThunk(this.state)
    this.setState(defaultState)
  }

  render() {
    const {classes, customerReducer} = this.props
    console.log('props', customerReducer)
    return (
      <Container>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <SupervisedUserCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ADD CUSTOMER
          </Typography>
          <Grid
            container
            spacing={3}
            className={classes.form}
            onSubmit={this.handleSubmit}
          >
            <Grid item xs={12} md={6}>
              <TextField
                required
                name="firstName"
                label="First Name"
                onChange={this.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                name="lastName"
                label="Last Name"
                onChange={this.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                name="notes"
                label="Notes"
                onChange={this.handleChange}
                helperText="Customer Notes."
                fullWidth
                multiline
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                name="email"
                label="Email"
                onChange={this.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                name="phone"
                label="Phone Number"
                onChange={this.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {customerReducer: state.customerReducer.customerList}
}

const mapDispatchToProps = dispatch => {
  return {
    addCustomerToThunk: function(newCustomer) {
      //dispatching to store in db
      dispatch(addCustomerThunk(newCustomer))
    }
  }
}

NewCustomer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(NewCustomer)
)
