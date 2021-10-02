import React, { useContext } from 'react';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import { makeStyles } from '@material-ui/core/styles';
import AppState from '../context/AppState';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 10,
    }
}))
const Cart = () => {
    const classes = useStyles();
    const { inCart } = useContext(AppState);
    return (
        <ResponsiveDrawer>
            <div className={classes.root}>
                <h1>you have {inCart.length} items in Cart </h1>
            </div>
        </ResponsiveDrawer>
    )
}

export default Cart
