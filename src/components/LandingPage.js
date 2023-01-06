import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, Checkbox } from "@mui/material";
import dashboard from "../assets/d.jpg";
import logo from "../assets/5df3785dab2aa.png";
import MediaCard from "./Items";
import DrawerAppBar from "../Header/Header";
import { NavLink, useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedInUser);
    console.log("user", loggedInUser);
  }, []);

  return (
    <Box>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          // width :'100vh',
          height: {
            md : "100vh",
            xs: "50vh"
          },
          backgroundImage: `url(${dashboard})`,
          backgroundRepeat: "no-repeat",
          //   backgroundColor:'red',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <DrawerAppBar />

        <Typography
          sx={{
            color: "white",
            ml: {
                md : 10,
                 xs: 2
            },
            mt: {
                md : 40 ,
                xs: 10
            },
            cursor: "pointer",
            fontSize: {
                md : 70 ,
                xs:30
            },
            fontWeight: "bolder",
            textTransform: "uppercase",
          }}
        >
          ITALIAN SPECIALITIES
        </Typography>
        <Typography
          onClick={() => navigate("/favourite", { state: { user } })}
          sx={{
            color: "white",
            ml: {
                md : 10,
                 xs: 2
            },
            cursor: "pointer",
            fontSize: {
                md : 50 ,
                xs:20
            },
            fontWeight: "bolder",
            color :'#ff6838'
          }}
        
        >
          Favourite Products
        </Typography>
      </Grid>

      {/* images */}

      <MediaCard />
    </Box>
  );
}

export default LandingPage;
