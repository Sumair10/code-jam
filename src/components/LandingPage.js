import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, Checkbox } from "@mui/material";
import dashboard from "../assets/d.jpg";
import logo from "../assets/5df3785dab2aa.png";
import MediaCard from "./Items";
import DrawerAppBar from "../Header/Header";

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
        <DrawerAppBar />
      </Grid>

      {/* images */}

      <MediaCard />
    </Box>
  );
}

export default LandingPage;
