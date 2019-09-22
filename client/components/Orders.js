// import React from 'react'
// import {connect} from 'react-redux'

// const Orders = props => {
//   const {orderReducer} = props
//   return (
//     <div>
//       {orderReducer.map(order => (
//         <div key={order.id}>
//           {order.orderName}
//           {order.price}
//         </div>
//       ))}
//     </div>
//   )
// }

// const mapState = state => {
//   return {
//     orderReducer: state.orderReducer.orderList
//   }
// }

// export default connect(mapState)(Orders)

import React from 'react'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    align: 'center',
    margin: 'auto',
  },
  table: {
    minWidth: 'auto'
  }
}))

function Orders(props) {
  const classes = useStyles()
  const {orderReducer} = props

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Order Type</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderReducer.map(order => (
            <TableRow key={order.id}>
              <TableCell component="th" scope="row">
                {order.orderName}
              </TableCell>
              <TableCell align="right">{order.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

const mapState = state => {
  return {
    orderReducer: state.orderReducer.orderList
  }
}

export default connect(mapState)(Orders)
