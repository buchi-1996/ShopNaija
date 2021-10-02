import React from 'react';
import Carousel from 'react-material-ui-carousel'
import CarouselItem from './CarouselItem';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    // Carousel: {
    //     height: '70vh',
    // }
}))

const CarouselSlider = () => {
    const classes = useStyles();
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: 'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2018/07/01153710/benefits-of-working-from-home.jpg'
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: 'https://www.jobberman.com/blog/wp-content/uploads/sites/8/2018/05/BlogArticle_1200x630__Love_Your_Job.png'
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: 'https://www.mortenhansen.com/wp-content/uploads/2018/09/quiz-intro-image-2000x1720.png'
        }
    ]

    return (
        <Carousel className={classes.Carousel} animation="slide" 
        swipe={true}  
        >
            {items.map((item, index) => (<CarouselItem key={index} {...item}/>))}
        </Carousel>
    )
}

export default CarouselSlider
