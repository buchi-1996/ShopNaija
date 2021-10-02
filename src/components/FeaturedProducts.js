import React, { useContext } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import AppState from '../context/AppState'
import ProductCard from './ProductCard';
import Grid from '@material-ui/core/Grid';
import { ToastContainer } from 'react-toastify';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '5%',
        '& .featured__heading': {
            marginBottom: 20,
        }
    },
}))

const FeaturedProducts = () => {
    const classes = useStyles();
    const { products, isLoading } = useContext(AppState);
    return (
        <div className={classes.root}>
            <ToastContainer />
            <Typography className="featured__heading" variant="h4">Featured Products</Typography>
            {isLoading ? <h2>Loading...</h2> : (
                <Grid container spacing={3}>
                    <ProductCard products={products} />
                </Grid>
            )}
        </div>
    )
}

export default FeaturedProducts
