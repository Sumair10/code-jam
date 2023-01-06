import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {Box ,Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./style.css";
import { Link } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

// const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (

    <Grid
    container
    component="main1"
    sx={{ backgroundColor: "#0f0f11", color: "white" }}
  >
    <Grid
      item
      // xs={1}
      sm={false}
      md={4}
      lg={5.5}
      sx={{
        display: { sm: "none", md: "block" },
        backgroundImage: "url(/Images/orange.webp)",
        backgroundRepeat: "no-repeat",
        margin: 6,

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#ee6535",
      }}
    >
      <Grid
        sx={{
          height: "80vh",
          padding: 2,
        }}
        container
        direction="column"
        justifyContent="space-between"
      >
        <Grid >
          {" "}
          {/* <h1 className="leftHeading"> */}
          <Typography
            
            sx={{
              color: "white",
              fontWeight: "bolder",
              fontSize: { lg: 25, md: 20, sm: 30, xs: 22 },
              px: { lg: 8, md: 5, sm: 5, xs: 2 },
              pt: 3,
            }}
          >
            AI Driven Spread Trading{" "}
            <Typography
              // display="inline"
              sx={{
                color: "white",
                fontWeight: "bolder",
                fontSize: { lg: 35, md: 25, sm: 30, xs: 30 },
              }}
            >
              balancing profit with purpose spread trading reinvented
            </Typography>
          
          </Typography>
          {/* </h1> */}
        </Grid>
        <Grid>
          <Typography
            sx={{
              color: "white",
              fontWeight: "bolder",
              fontSize: { lg: 20, md: 15, sm: 30, xs: 15 },
              px: { lg: 8, md: 5, sm: 5, xs: 2 },
              pt: 3,
            }}
          >
            Equities, Forex, Bonds, Indices, Commodities
          </Typography>
        </Grid>
      </Grid>
    </Grid>

    <Grid
        className="leftSide"
        
        xs={12}
        sm={12}
        md={6}
        lg={5.5}
        sx={{ padding: 5, paddingRight: {lg: 15 ,md : 0, sm : 0 }}}
        square
        container
  direction="row"
  justifyContent="center"
  alignItems="center"
      >
        <Box
          sx={{
            mx: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* </Grid> */}

          <Grid
            container
            direction="column"
            justifyContent="space-between"
            sx={{ height: "88vh" }}
          >
            <Grid>
              {" "}
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 , width : { md: 450 , sm : 450 , xs : 450} , }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
              
                  <h2> Traider</h2>
                </Grid>
                <h1>Welcome Back!</h1>
                <p style={{ marginBottom: 20 }}>
                Stocks, Forex, Indices, Bonds, Equities
                </p>

                <Grid>
                  <h5>Email address</h5>
                </Grid>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        borderColor: "rgb(39, 39, 39)",
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "rgb(39, 39, 39)",
                      },
                    },

                  }}
                  inputProps={{
                    style: { color: "white", fontSize: 15 , height:30 },
                  }}

                  className="inputField"
                  margin="normal"
                  required
                  fullWidth
                  
                  placeholder="Enter email address"
                  id="email"
                  size="small"
                  name="email"
                  autoComplete="email"
                />
         

          
                <Grid >
                  <h5 >Password</h5>
                </Grid>
                <TextField
                
                  sx={{
                    "& .MuiOutlinedInput-root ": {
                      "& > fieldset": {
                        borderColor: "rgb(39, 39, 39)",
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "rgb(39, 39, 39)",
                      },
                    },
                  }}
                    inputProps={{ style: { color: "white",fontSize: 15 , height:30 } }}


                  className="inputField"
                  margin="normal"
                  placeholder="Enter password"
                  required
                  fullWidth
                  size="small"
                  name="password"
                  type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff  sx={{color: 'gray'}}/> : <Visibility sx={{color: 'gray'}}/>}
                      </IconButton>
                    </InputAdornment>
                    ),
                  }}
                 
                />
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                >
                  <Link
                    to={"/forgotPassword"}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: 13,
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                
                <Link
                  to={"/landingPage"}
                  style={{
                    color: "#ee6535",
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      backgroundColor: "#ff6838",
                      textTransform: "none",
                      fontWeight: "normal",
                    }}
                  >
                    Sign in
                  </Button>
                </Link>

            
              </Box>
            </Grid>
            <Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p style={{ color: "rgb(209, 209, 209)" }}>
                  Don't have an account? &nbsp;
                </p>

                <Link
                  to="/"
                  style={{
                    color: "#ee6535",
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  Sign Up
                </Link>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p>Copyright &copy; 2022 Traider. All Rights Reserved</p>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
  
  </Grid>

  );
}
