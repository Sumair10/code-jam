import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./style.css";
import { Link } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import dashboard from "../../assets/h.jpg";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useSnackbar } from 'notistack';

// const theme = createTheme();

export default function SignIn() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    signInWithEmailAndPassword(auth, data.get("email"),  data.get("password"))
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        enqueueSnackbar('sign in successful', { variant: 'success' });  
        localStorage.setItem('user', JSON.stringify(user));

        navigate("/landingPage")
        console.log(user);


    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        enqueueSnackbar(errorMessage, { variant: 'error' });  

    });

  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      // showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid
      container
      component="main1"
      // sx={{ backgroundColor: "#0f0f11", color: "white" }}
    >
     {/* <Grid */}
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
      

      
      </Grid>

      <Grid
        className="leftSide"
        xs={12}
        sm={12}
        md={6}
        lg={5.5}
        sx={{ padding: 5, paddingRight: { lg: 15, md: 0, sm: 0 } }}
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
            sx={{ height: "60vh" }}
          >
            <Grid>
              {" "}
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1, width: { md: 450, sm: 450, xs: 450 } }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <h1 style ={{marginBottom :50}}> Hungry</h1>
                </Grid>
                <h1>Welcome Back!</h1>
                <p style={{ marginBottom: 20 }}>
                Enter your details below
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
                    style: { color: "white", fontSize: 15, height: 30 },
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

                <Grid>
                  <h5>Password</h5>
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
                  inputProps={{
                    style: { color: "white", fontSize: 15, height: 30 },
                  }}
                  className="inputField"
                  margin="normal"
                  placeholder="Enter password"
                  required
                  fullWidth
                  size="small"
                  name="password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
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
                          {values.showPassword ? (
                            <VisibilityOff sx={{ color: "gray" }} />
                          ) : (
                            <Visibility sx={{ color: "gray" }} />
                          )}
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
                <p>Copyright &copy; 2022 Hungry. All Rights Reserved</p>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
