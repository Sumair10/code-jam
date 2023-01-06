import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function MediaCard() {
  const [items, setItems] = useState();
  console.log(items);

  //   useEffect(() => {

  const fetchData = async () => {
    const response = await axios.get(
      "https://api.spoonacular.com/food/products/search?query=Burger&apiKey=3e61a3b1373a4d9ba99d96ab922e393a"
    );
    setItems(response.data);
    console.log(items);
  };
  //   }, [])
  
  useEffect(() => {
    
    fetchData()
  }, [])
  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image="https://spoonacular.com/productImages/208670-312x231.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
