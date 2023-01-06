import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import logo from "../../assets/Images/logo forex.png"
import { Typography, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
// import MainScreen from "../MainScreen/MainScreen";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import "./style.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import dashboard from "../../assets/i.jpg";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useSnackbar } from 'notistack';


const label = { inputProps: { "aria-label": "Checkbox demo" } };

// const theme = createTheme();

export default function SignUp() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [values, setValues] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (event) => {
    console.log();
    setPassword(event.target.value);
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(email, password);
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    //   confirmPassword: data.get("ConfirmPassword"),
    // });
    await createUserWithEmailAndPassword(auth,  email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        enqueueSnackbar('signup successful', { variant: 'success' });  
        
        navigate("/signin")

        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        enqueueSnackbar(errorMessage, { variant: 'error' });  
        // ..
    });
  };

  return (
    // <MainScreen>

    <Grid
      container
      component="main1"
      sx={{ backgroundColor: "#0f0f11", color: "white" }}
    >
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
                  {/* <span style={{ marginRight: 10 }}>
                    <img src={logo} width="30px" height="30px" style={{ border : '5px solid #ff6838' , borderRadius: 3}}/>{" "}
                  </span> */}
                  <h1 style ={{marginBottom :50}}> Hungry</h1>
                </Grid>
                <h1>Create an account</h1>
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
                  value={email}
                  onChange={(e) => setEmail(e?.target.value)}
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
                  onChange={handleChange("password")}
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
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

                <Grid>
                  <h5>Confirm password</h5>
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
                  name="confirmPassword"
                  type={values.showConfirmPassword ? "text" : "password"}
                  value={values.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  id="confirmPassword"
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
                          {values.showConfirmPassword ? (
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
                  //   justifyContent="center"
                  alignItems="center"
                >
                  <Checkbox {...label} />
                  <p style={{ color: "rgb(209, 209, 209)" }}>
                    I agree all the statements included in&nbsp;
                  </p>
                  <p style={{ color: "#ee6535" }}>Terms of Use &nbsp;</p>
                </Grid>
                {/* <Link
                  to={"/signin"}
                  style={{
                    color: "#ee6535",
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                > */}
                <Button
                  onClick={handleSubmit}
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
                  Sign up
                </Button>
                {/* </Link> */}
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
                  Already have an account? &nbsp;
                </p>

                <Link
                  to="/signin"
                  style={{
                    color: "#ee6535",
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  Sign In
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
    // </MainScreen>
  );
}
