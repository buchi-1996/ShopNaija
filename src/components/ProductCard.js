import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Grid, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AppState from '../context/AppState';
import Modal from './Modal';



const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  media: {
    height: '200px',
    objectFit: 'contain',
    width: '100%'
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));
const ProductCard = () => {
  
  const { products, modalPreview, modal, dispatch, addToCart } = useContext(AppState);

  const previewProduct = products[0].find(product => product.id === modalPreview)

  
  const classes = useStyles();
  const descTruncate = (desc, num) => {
    return desc = desc.length > num ? `${desc.slice(0, num + 1)}...` : desc
  }

  

  return (
    <>
       
      {products[0].map(({id, image, price, category, description, rating, title }) => {
        return  (
          <>
           {modal && (
            <Modal>
              <img src={previewProduct.image} alt={previewProduct.title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
              <Typography variant="h6" style={{ textAlign: 'center' }}>{previewProduct.title}</Typography>
              <Typography variant="h6" style={{ textAlign: 'center', color: "green", fontWeight: "bold" }}>${previewProduct.price}</Typography>
              <p style={{ textAlign: 'center' }}>{previewProduct.description}</p>
              <Button onClick={() => addToCart(previewProduct.id)} size="small" variant="outlined" color="primary" style={{ width: '40%', margin: "10px auto 0", display: 'block' }}>
                Add to cart
              </Button>
            </Modal>
          )}
          <Grid item sm={12} md={6} lg={4}>
          <Card className={classes.root}>
            <Link to={`product/${id}`} className={classes.link}>
              <CardActionArea>
                <img src={image} className={classes.media} alt={title} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {descTruncate(title, 40)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {descTruncate(description, 100)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <CardActions className={classes.actions}>
              <div>
                <IconButton onClick={() => dispatch({ type: 'OPEN_MODAL', payload: id })}>
                  <VisibilityIcon />
                </IconButton>
                <Button onClick={() => addToCart(id)} size="small" variant="outlined" color="primary" ml={10}>
                  Add to cart
                </Button>
              </div>
                
              <div style={{ marginRight: '10px' }}>
                <Typography variant="h5">${Math.round(price)}</Typography>
              </div>
            </CardActions>
          </Card>
          </Grid>
         </>
        )
      })}
    </>
  )}
      


export default ProductCard
