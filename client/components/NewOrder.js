import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'
// import Typography from '@material-ui/core/Typography'
// import Grid from '@material-ui/core/Grid'
// import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
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

class NewOrder extends Component {
  state = {
    orderName: '',
    price: '',
    notes: '',
    type: 'New item',
    status: 'Pending'
  }

  handleChange = e => {
    console.log(e.target.id, e.target.value)
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
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
        {/* <form
          container
          spacing={3}
          className={classes.form}
          onSubmit={this.handleSubmit}
        > */}
        <Grid
          container
          spacing={3}
          className={classes.form}
          onSubmit={this.handleSubmit}
        >
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="orderName"
              label="Order Name"
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="price"
              label="Price"
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="notes"
              label="Notes"
              onChange={this.handleChange}
              helperText="Last three digits on signature strip"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              select
              value={this.state.type}
              id="type"
              label="Type"
              onChange={this.handleChange}
              fullWidth
            >
              <MenuItem value="New Item">New Item</MenuItem>
              <MenuItem value="Repair">Repair</MenuItem>
            </TextField>
            {/* <InputLabel htmlFor="type">Type</InputLabel>
            <Select
              value={this.state.type}
              onChange={this.handleChange}
              inputProps={{
                name: 'type',
                id: 'type'
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select> */}
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
        {/* </form> */}
      </Container>

      //   <Container component="main" maxWidth="xs">
      //   <CssBaseline />
      //   <div className={classes.paper}>
      //     <Avatar className={classes.avatar}>
      //       <LockOutlinedIcon />
      //     </Avatar>
      //     <Typography component="h1" variant="h5">
      //       Sign in
      //     </Typography>
      //     <form className={classes.form} noValidate>
      //       <TextField
      //         variant="outlined"
      //         margin="normal"
      //         required
      //         fullWidth
      //         id="email"
      //         label="Email Address"
      //         name="email"
      //         autoComplete="email"
      //         autoFocus
      //       />
      //       <TextField
      //         variant="outlined"
      //         margin="normal"
      //         required
      //         fullWidth
      //         name="password"
      //         label="Password"
      //         type="password"
      //         id="password"
      //         autoComplete="current-password"
      //       />
      //       <FormControlLabel
      //         control={<Checkbox value="remember" color="primary" />}
      //         label="Remember me"
      //       />
      //       <Button
      //         type="submit"
      //         fullWidth
      //         variant="contained"
      //         color="primary"
      //         className={classes.submit}
      //       >
      //         Sign In
      //       </Button>
      //       <Grid container>
      //         <Grid item xs>
      //           <Link href="#" variant="body2">
      //             Forgot password?
      //           </Link>
      //         </Grid>
      //         <Grid item>
      //           <Link href="#" variant="body2">
      //             {"Don't have an account? Sign Up"}
      //           </Link>
      //         </Grid>
      //       </Grid>
      //     </form>
      //   </div>
      // </Container>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

NewOrder.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(NewOrder)
)
