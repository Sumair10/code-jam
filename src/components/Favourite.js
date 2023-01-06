import React, { useEffect, useState } from "react";
import { Card, Box, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { collection, addDoc, getDocs ,deleteDoc  , doc} from "firebase/firestore";
import { db } from "../firebase";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DrawerAppBar from "../Header/Header";
import { useNavigate, useLocation } from "react-router-dom";


export default function Favourite() {

  const location = useLocation();
  const user = location.state.user;

  const [favourite, setFavourite] = useState([]);

  console.log('favourite' , favourite);

  const fetchPost = async () => {
    await getDocs(collection(db, "favourite")).then((querySnapshot) => {
      // console.log(doc)
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.userId,
      }));
      const favouriteData = newData.filter((data) => data.userId === user?.uid);
      setFavourite(favouriteData);
      console.log( favouriteData , newData);
    });
  };



  useEffect(  () => {
   

    fetchPost();
  }, []);

  return (
    <>
        <DrawerAppBar />
        

      <Box>
        <Grid
          container
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >

      <Typography sx={{color : 'black', mt:3 , cursor :'pointer' , fontSize :50, fontWeight : 'bolder' }}>Favourite Products</Typography>
        </Grid>
        <Grid
          container
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          {favourite &&
            favourite.map((product) => (
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
                        // onClick={() => Product(product)}
                        sx={{
                          border: "2px solid black",
                          borderRadius: 10,
                          fontSize: 12,
                          p: 1,
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                      >
                        Remove from favourite
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


