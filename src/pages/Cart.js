import React, { useContext } from 'react';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppState from '../context/AppState';
import { Button, IconButton, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: 25,
    overflow: 'hidden'
  },
  table: {
    // minWidth: 650,
  },
  qtyBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
}))
const Cart = () => {
  const classes = useStyles();
  const { inCart, dispatch, total } = useContext(AppState);



  return (
    <ResponsiveDrawer>
      <div className={classes.root}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="primary">Back</Button>
        </Link>
        <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '20px' }}>you have {inCart.length} items in Cart </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="left">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inCart.map(({ id, title, image, price, qty }) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    <img src={image} alt={title} style={{ width: '100%', height: 100, objectFit: 'contain' }} />
                  </TableCell>
                  <TableCell align="left">{title}</TableCell>
                  <TableCell align="left">
                    <div className={classes.qtyBtn}>
                      <IconButton onClick={() => dispatch({ type: 'DECREASE_COUNT', payload: id })}>
                        <RemoveIcon />
                      </IconButton>
                      <span style={{ margin: '0 10px' }}>{qty}</span>
                      <IconButton onClick={() => dispatch({ type: 'INCREASE_COUNT', payload: id })}>
                        <AddIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                  <TableCell align="left"><b>${Math.round(price)}</b></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-between',
          marginTop: 40
        }}>
          <h1>Total</h1>
          <div>
            <h1 style={{textAlign: 'right', marginBottom: 20}}><NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} suffix={'.00'}/></h1>
            <Button variant="contained" size="large" color="secondary">Proceed to Checkout</Button>
          </div>
        </div>
      </div>
    </ResponsiveDrawer>
  )
}

export default Cart
