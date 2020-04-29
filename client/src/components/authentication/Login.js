// React Imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Redux Imports
import { loginUser } from "../../actions/authenticationActions";

// Material UI Imports
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    grow: 1,
    minHeight: "95vh",
  },
  loginCardItem: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "480px",
    },
  },
  loginCard: {
    padding: 16,
  },
  iconSize: {
    fontSize: 128,
  },
  mb8: {
    marginBottom: 8,
  },
  mb16: {
    marginBottom: 16,
  },
  mb32: {
    marginBottom: 32,
  },
  mr16: {
    marginRight: 16,
  },
  mr32: {
    marginRight: 32,
  },
  border: {
    border: "1px solid black",
  },
}));

const Login = (props) => {
  const classes = useStyles();

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailFieldChange = (e) => {
    setEmailField(e.target.value);
  };

  const handlePasswordFieldChange = (e) => {
    setPasswordField(e.target.value);
  };

  const onClickLogIn = (e) => {
    e.preventDefault();
    const userCredentials = {
      email: emailField,
      password: passwordField,
    };

    loginUser(userCredentials, setLoading, props.history);
  };

  const onClickBack = (e) => {
    e.preventDefault();
    props.history.goBack();
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={12} className={classes.loginCardItem}>
        <Paper className={classes.loginCard} elevation={3}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <AccountCircleIcon className={classes.iconSize} color="primary" />
            </Grid>
            <Grid item>
              <Typography variant="h5">Logging in</Typography>
            </Grid>
            <Grid item className={classes.mb16}>
              <Typography variant="body2">Welcome back!</Typography>
            </Grid>
            <Grid item className={classes.mb8}>
              <TextField
                required
                label="Email"
                onChange={handleEmailFieldChange}
              ></TextField>
            </Grid>
            <Grid item className={classes.mb16}>
              <TextField
                required
                label="Password"
                type="password"
                onChange={handlePasswordFieldChange}
              ></TextField>
            </Grid>
            <Grid item className={classes.mb32}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item className={classes.mr32}>
                  <Button onClick={onClickBack}>Back</Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={onClickLogIn}
                  >
                    Log in
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  {loading === true ? (
                    <CircularProgress />
                  ) : (
                    <Typography variant="body2">
                      Don't have an account? <Link to="/register">Sign up</Link>
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
