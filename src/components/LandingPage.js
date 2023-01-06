import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, Checkbox } from "@mui/material";
import dashboard from "../assets/d.jpg";
import logo from "../assets/5df3785dab2aa.png";
import MediaCard from "./Items";

function LandingPage() {
  return (
    <Box>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          // width :'100vh',
          height: "100vh",
          backgroundImage: `url(${dashboard})`,
          backgroundRepeat: "no-repeat",
          //   backgroundColor:'red',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box>
          <Grid
            container
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              backgroundColor: "black",
            }}
          >
            <Grid sx={{ color: "white" }}>
              <Typography mx={10}>
                <Box
                  component="img"
                  sx={{
                    width: { md: 70, xs: 70 },
                  }}
                  alt="The house from the offer."
                  src={logo}
                />
              </Typography>
            </Grid>
            <Grid md={6}>
              <Grid
                container
                flexDirection="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Typography
                  sx={{
                    color: "#f0eff1",
                    textTransform: "uppercase",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Shop
                </Typography>
                <Typography
                  sx={{
                    color: "#f0eff1",
                    textTransform: "uppercase",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Recipes
                </Typography>
                <Typography
                  sx={{
                    color: "#f0eff1",
                    textTransform: "uppercase",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  News
                </Typography>
                <Typography
                  sx={{
                    color: "#f0eff1",
                    textTransform: "uppercase",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  About
                </Typography>
                <Typography
                  sx={{
                    color: "#f0eff1",
                    textTransform: "uppercase",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Contact
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>

       {/* images */}

       <MediaCard/>


    </Box>
  );
}

export default LandingPage;
