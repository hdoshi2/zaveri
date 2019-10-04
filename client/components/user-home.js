// import React from 'react'
// import PropTypes from 'prop-types'
// import {connect} from 'react-redux'

// /**
//  * COMPONENT
//  */
// export const UserHome = props => {
//   const {email} = props

//   return (
//     <div>
//       <h3>Welcome, {email}</h3>
//     </div>
//   )
// }

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     email: state.user.email
//   }
// }

// export default connect(mapState)(UserHome)

// /**
//  * PROP TYPES
//  */
// UserHome.propTypes = {
//   email: PropTypes.string
// }

import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Container from '@material-ui/core/Container'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: theme.spacing(3)
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  cardGrid: {
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}))

const featuredPosts = [
  {
    title: 'Add New Orders',
    link: '/neworder',
    description: 'For custom order details and order management.',
    image: <AddShoppingCartIcon />
  },
  {
    title: 'Add New Customers',
    link: '/newcustomer',
    description: 'For customer management.',
    image: <SupervisedUserCircleIcon />
  }
]

export default function Blog() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Home Central
          </Typography>
        </Toolbar>
        <main>
          <Grid container spacing={4} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <CardActionArea component="a" href={post.link}>
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        // image="https://source.unsplash.com/random"
                        title="Image title"
                      >
                        {post.image}
                      </CardMedia>
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
        </main>
      </Container>
    </React.Fragment>
  )
}
