import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    Paper: {
        height: '50vh',
        width: '90%',
        margin: '30px  auto 0',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 20,

        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        },

       
    },

    CarouselDetails: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        color: '#fff'
    }
}))
const CarouselItem = ({ name, description, image }) => {
    const classes = useStyles();
    return (
        <Paper className={classes.Paper}>
            <img src={image} alt="" />
            <div className={classes.CarouselDetails}>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </Paper>
    )
}

export default CarouselItem
