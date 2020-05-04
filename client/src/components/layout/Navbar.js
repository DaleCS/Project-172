import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Grid, Button } from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbarClr: {
    backgroundColor: "#343a40",
  },
  noStyle: {
    textDecoration: "none",
    color: "#ffffff",
  },
  btnStyle: {
    backgroundColor: "#343a40",
    color: "#ffffff",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbarClr}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.root}
          >
            <Grid item>
              <Link
                to={props.isLoggedInState === true ? "/dashboard" : "/"}
                className={classes.noStyle}
              >
                <Typography variant="h6" className={classes.title}>
                  Agenda
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {props.isLoggedInState === true ? (
                  <Button
                    variant="contained"
                    className={classes.btnStyle}
                    onClick={props.handleLogOut}
                  >
                    Sign Out
                  </Button>
                ) : (
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item>
                        <Link to="/login" className={classes.noStyle}>
                          <Button
                            variant="contained"
                            className={classes.btnStyle}
                          >
                            Sign In
                          </Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
