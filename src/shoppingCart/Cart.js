import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';

const Cart = ({ cart, removeFromCart,calculateTotalPrice }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div>
        {cart.map((item) => (
            <Card sx={{ maxWidth: 300 }} md={{ width: 400 }} style={{ marginBottom: 10 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.thumbnail}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {item.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => removeFromCart(item)}>
                  Remove
                </Button>
              </CardActions>
            </Card>        
        
        ))}
      </div>
    </div>
  );
};

export default Cart;
