import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import AppState from '../context/AppState';
import { Button, Card, CardMedia, Grid, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    // details: {
    //     padding: '100px 0'
    // }
}))

const SingleProduct = () => {
    const classes = useStyles();
    const { products, isLoading,  addToCart } = useContext(AppState);
    const [singleProduct, setSingleProduct] = useState({})
    const {id : item, image, title, price, description } = singleProduct
    const { id } = useParams(); //returns a string so always parseinteger


    useEffect(() => {
        const getProductById = () => {
            if (!isLoading) {
                const item = products[0].find(x => x.id === +id);
                console.log(item);
                setSingleProduct(item)
            }

        }
        getProductById();
    }, [id, isLoading, products])

    return (

        <ResponsiveDrawer>
            <div className={classes.root}>
                {isLoading ? <h2>Loading...</h2> : (
                    <Grid container maxWidth='xl'>
                        <Grid item xs={12} sm={12} md={12} lg={6} >
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image={image}
                                    alt={title}
                                />
                            </Card>
                            {/* <div style={{ paddingTop: 50 }}>
                                <img src={image} alt="" style={{ width: '100%', height: 300, objectFit: 'contain' }} />
                            </div> */}
                        </Grid>
                        <Grid item sm={12} md={12} lg={6} style={{ padding: '50px 20px' }}>
                            <Typography variant="h4">{title}</Typography>
                            <Typography variant="subtitle1" style={{ fontSize: 24, color: 'orange', margin: '10px 0' }}>${Math.round(price)}</Typography>
                            <Typography variant="subtitle2">{description}</Typography>
                            <Button color="primary" variant="outlined" style={{ marginTop: 20 }} onClick={() => addToCart(item)}>
                                Add TO Cart
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </div>
        </ResponsiveDrawer>

    )
}

export default SingleProduct
