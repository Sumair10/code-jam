import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "../redux/store";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/5df3785dab2aa.png";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [navItems, setNavItems] = useState([
    "shop",
    "Recipes",
    "news",
    "about",
    "contact",
  ]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [user, setUser] = useState();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNav = (filter) => {
    if (filter === "makeup") {
      navigate("/digitalMakeup");
    } else if (filter === "smooth") {
      navigate("/skinSmoothing");
    } else if (filter === "background") {
      navigate("/backgroundRemoval");
    }
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // console.log("user ==> ", user);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Box
        component="img"
        sx={{
          py: 2,
          align: "left",
          width: 50,
        }}
        alt="The house from the offer."
        src={logo1}
      /> */}

      <Divider />
      <List>
        {navItems &&
          navItems.map((item) => (
            <>
              <Link
                to={`/${item.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  key={item}
                  onClick={() => console.log(item)}
                  sx={{
                    color: "rgb(84,84,84)",
                    textTransform: "capitalize",
                    px: {
                      md: 3,
                      sm: 1,
                    },
                  }}
                >
                  {item.toLowerCase()}
                </Button>
              </Link>
              <br />
            </>
          ))}
      </List>
      {/* {!user ? (
        <Box align="center">
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                // fontSize: { xs: 10, md: 15 },
                display: {
                  xs: "block",
                  sm: "none",
                  md: "block",
                },
                borderRadius: 1,
                textTransform: "capitalize",
                fontWeight: 1000,
                mx: {
                  sm: 1,
                },
                backgroundColor: 'yellow',
                "&:hover": {
                  backgroundColor: 'yellow',
                  color: "white",
                },
              }}
            >
              Login / Signup
            </Button>
          </Link>
        </Box>
      ) : (
        <>
          <Box align="center">
            <Button
              align="center"
              variant="contained"
              onClick={handleLogout}
              sx={{
                // fontSize: { xs: 10, md: 15 },
                display: {
                  xs: "block",
                  sm: "none",
                  md: "block",
                },
                borderRadius: 1,
                textTransform: "capitalize",
                fontWeight: 1000,
                mx: {
                  sm: 1,
                },
                backgroundColor: 'yellow',
                "&:hover": {
                  backgroundColor: 'yellow',
                  color: "white",
                },
              }}
            >
              Logout
            </Button>
          </Box>
        </>
      )} */}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "black",
          px: {
            xl: 10,
            lg: 6,
            md: 5,
            sm: 1,
          },
        }}
      >
        <Toolbar sx={{ py: 2, backgroundColor: "black" }}>
          <IconButton
            
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { md: "none" }  }}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <Typography sx={{
            ml : {
              md : 0,
              xs:5
            }
          }}>
            <Box
              component="img"
              sx={{
                width: { md: 70, xs: 70 },
              }}
              alt="The house from the offer."
              src={logo}
            />
          </Typography>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          ></Typography>

          <Box
            sx={{
              borderRight: `1px solid gray`,
              pr: 2,
            }}
          >
            {user ? (
              <Grid>
                <Typography sx={{ color: "black" }}>Credits </Typography>
                <Typography
                  align="center"
                  sx={{ color: "yellow", fontWeight: 1000, fontSize: 25 }}
                >
                  {user?.credits}
                </Typography>
              </Grid>
            ) : null}
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems &&
              navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => console.log(item)}
                  sx={{
                    color: "#f0eff1",
                    textTransform: "uppercase",
                    px: {
                      md: 5,
                      sm: 1,
                    },
                  }}
                >
                  {item.toLowerCase()}
                </Button>
              ))}
          </Box>

          {/* {!user ? (
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  // fontSize: { xs: 10, md: 15 },
                  display: { xs: "none", md: "block" },
                  textTransform: "capitalize",
                  fontWeight: 1000,
                  borderRadius: 1,
                  mx: {
                    sm: 1,
                  },
                  backgroundColor: 'yellow',
                  "&:hover": {
                    backgroundColor: 'yellow',
                    color: "white",
                  },
                }}
              >
                Login / Signup
              </Button>
            </Link>
          ) : (
            <>
              <Button
                variant="contained"
                onClick={handleLogout}
                sx={{
                  // fontSize: { xs: 10, md: 15 },
                  display: { xs: "none", sm: "block" },
                  textTransform: "capitalize",
                  fontWeight: 1000,
                  borderRadius: 1,
                  mx: {
                    sm: 1,
                  },
                  backgroundColor: 'yellow',
                  "&:hover": {
                    backgroundColor: 'yellow',
                    color: "white",
                  },
                }}
              >
                Logout
              </Button>
            </>
          )} */}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
