import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addOrderThunk} from '../store/order'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '50%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
})
const defaultState = {
  orderName: '',
  price: '',
  notes: '',
  type: '',
  status: '',
  customerId: 1
}
class NewOrder extends Component {
  state = defaultState

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.addOrderToThunk(this.state)
    this.setState(defaultState)
  }

  render() {
    const {classes} = this.props

    return (
      <Container className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ADD ORDER
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
              name="orderName"
              label="Order Name"
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              name="price"
              label="Price"
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
              helperText="Last three digits on signature strip"
              fullWidth
              multiline
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              value={this.state.type}
              name="type"
              label="type"
              onChange={this.handleChange}
              fullWidth
            >
              <MenuItem value="New Item">New Item</MenuItem>
              <MenuItem value="Repair">Repair</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              value={this.state.status}
              name="status"
              label="status"
              onChange={this.handleChange}
              fullWidth
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Closed">Closed</MenuItem>
            </TextField>
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
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    addOrderToThunk: function(newOrder) {
      //dispatching to store in db
      dispatch(addOrderThunk(newOrder))
    }
  }
}

NewOrder.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(NewOrder)
)