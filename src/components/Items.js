import React, { useEffect, useState } from "react";
import { Card, Box, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

export default function MediaCard() {
  const [items, setItems] = useState();
  const [user, setUser] = useState();
  console.log(items);

  const [todos, setTodos] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "favourite")).then((querySnapshot) => {
      // console.log(doc)
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.userId,
      }));
      const favouriteData = newData.filter((data) => data.userId === user?.uid);
      setTodos(newData);
      console.log(todos, newData);
    });
  };

  const fetchData = async () => {
    const response = await axios.get(
      "https://api.spoonacular.com/food/products/search?query=Pizza&apiKey=be7f248ccd6249788f19b21eb632614d"
    );
    setItems(response.data);
    console.log(items);
  };

  const addProduct = async (product) => {
    // e.preventDefault();

    console.log("item ", product);

    try {
      const docRef = await addDoc(collection(db, "favourite"), {
        image: product.image,
        title : product.title,
        userId: user.uid,
        productId : product.id
      });
      console.log("Document written with ID: ", docRef.id);
    
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  //   }, [])

  useEffect(() => {
    fetchData();
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedInUser);
    console.log("user", loggedInUser);

    fetchPost();
  }, []);

  return (
    <>
      <Box>
        <Grid
          container
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          {items?.products &&
            items?.products.map((product) => (
              <Box
                sx={{
                  m: 8,
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  p: 2,
                  borderRadius: 10,
                }}
              >
                <Grid
                  container
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    width: 300,
                    height: 500,
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: { md: 150, xs: 70 },
                    }}
                    alt="The house from the offer."
                    src={
                     product?.image
                    }
                  />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { md: 20, xs: 20 },
                      py: 5,
                      lineHeight:1
                    }}
                  >
                    {product?.title}
                  </Typography>
                  <Grid
                    container
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <StarIcon sx={{ color: "#eaa72e" }} />
                    <StarIcon sx={{ color: "#eaa72e" }} />
                    <StarIcon sx={{ color: "#eaa72e" }} />
                    <StarHalfIcon sx={{ color: "#eaa72e" }} />
                    <StarOutlineIcon sx={{ color: "#eaa72e" }} />
                  </Grid>
                  <Typography
                    sx={{
                      color: "gray",
                      fontSize: 15,
                      lineHeight: 1,
                      py: 2,
                    }}
                  >
                    The App bar displays information and actions relating to the
                    current screen.
                  </Typography>
                  <Grid
                    container
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid>
                      <Typography
                        onClick={fetchPost}
                        sx={{
                          fontSize: 20,
                          fontWeight: "bolder",
                          color: "#3c3c3e",
                        }}
                      >
                        $55.00
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography
                        onClick={() => addProduct(product)}
                        sx={{
                          border: "2px solid black",
                          borderRadius: 10,
                          fontSize: 12,
                          p: 1,
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                      >
                        Add to favourite
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            ))}
        </Grid>
      </Box>
    </>
  );
}

{
  /* <Card sx={{ maxWidth: 345 }}>
<CardMedia
      sx={{ height: 300 }}
      // image={product.image}
      // image={}
      title="{grdu}een iguana"
    />
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    abc
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Lizards are a widespread group of squamate reptiles, with over
    6,000 species, ranging across all continents except Antarctica
  </Typography>
</CardContent>
<CardActions>
  <Button size="small" onClick={fetchPost}>Share</Button>
  <Button size="small" onClick={() => addProduct("pizza")}>
    Add to favourite
  </Button>
</CardActions>
</Card> */
}
