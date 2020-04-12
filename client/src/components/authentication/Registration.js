// React Imports
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Redux Imports
import { connect } from "react-redux";
import { registerUser } from "../../actions/authenticationActions";

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

const Registration = (props) => {
  const classes = useStyles();

  const [emailField, setEmailField] = useState("");
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEmailFieldChange = (e) => {
    setEmailField(e.target.value);
  };

  const handleUsernameFieldChange = (e) => {
    setUsernameField(e.target.value);
  };

  const handlePasswordFieldChange = (e) => {
    setPasswordField(e.target.value);
  };

  const onClickSignUp = (e) => {
    e.preventDefault();
    const newUser = {
      email: emailField,
      username: usernameField,
      password: passwordField,
    };

    props.registerUser(newUser, props.history);
  };

  const onClickBack = (e) => {
    e.preventDefault();
    props.goBack();
  };

  const spinner = (
    <Grid item>
      <CircularProgress />
    </Grid>
  );

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
              <Typography variant="h5">Signing up</Typography>
            </Grid>
            <Grid item className={classes.mb16}>
              <Typography variant="body2">
                We're just gonna need a few things from you...
              </Typography>
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
              <TextField
                required
                label="Username"
                onChange={handleUsernameFieldChange}
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
                    onClick={onClickSignUp}
                  >
                    Sign up
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {props.auth.loading === true ? spinner : <div></div>}
                <Grid item>
                  <Typography variant="body2">
                    Already have an account? <Link to="/login">Log in</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

Registration.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(Registration);
