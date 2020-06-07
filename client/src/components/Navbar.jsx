import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Hidden, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Popover from "./Popover";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
}));

const Navbar = (props) => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();
  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <div className={classes.flexGrow} />
        {props.isSignedIn === false ? 
        <>
        <IconButton color="inherit">
            <Popover 
              handleUserLogin={props.handleUserLogin}
              isSignedIn={props.isSignedIn}
              />
          </IconButton>
        </> : 
        <>
        <Hidden mdDown>
          <IconButton color="inherit">
            <Popover 
              handleSignOut={props.handleSignOut}
              isSignedIn={props.isSignedIn}
              />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
        <IconButton color="inherit">
            <Popover
              handleSignOut={props.handleSignOut}
              isSignedIn={props.isSignedIn}
              />
          </IconButton>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        </>
        }
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
};

export default Navbar;
