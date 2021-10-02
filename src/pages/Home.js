import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import CarouselSlider from '../components/CarouselSlider';
import FeaturedProducts from '../components/FeaturedProducts';


const useStyles = makeStyles(theme => ({
    // Home: {
    //     display: 'flex',
    // }
}))

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.Home}>
            <ResponsiveDrawer>
                <CarouselSlider />
                <FeaturedProducts />
            </ResponsiveDrawer>
        </div>
    )
}

export default Home
