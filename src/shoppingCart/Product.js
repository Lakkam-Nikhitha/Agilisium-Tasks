import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react';

const Product = ({ product, addToCart }) => {
    return (
        <div className='product'>
            <Card sx={{ maxWidth: 345 }} md={{ width: 300 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={product.thumbnail}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price: {product.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => addToCart(product)}>
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>

        </div>


    );
};

export default Product;
