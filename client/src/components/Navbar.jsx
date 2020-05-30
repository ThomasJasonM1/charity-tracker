<<<<<<< Updated upstream
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> Stashed changes
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
<<<<<<< Updated upstream
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccessibleIcon from '@material-ui/icons/Accessible';
import Popover from './Popover';
=======
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
>>>>>>> Stashed changes

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

<<<<<<< Updated upstream
  // const [notifications] = useState([]);
=======
  const [notifications] = useState([]);
>>>>>>> Stashed changes

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
<<<<<<< Updated upstream
          <AccessibleIcon />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          {/* <IconButton color="inherit">
=======
          <img
            alt="Logo"
            // src="https://img.icons8.com/plasticine/100/000000/xing.png"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
>>>>>>> Stashed changes
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
<<<<<<< Updated upstream
          </IconButton> */}
=======
          </IconButton>
>>>>>>> Stashed changes
          <IconButton
            className={classes.signOutButton}
            color="inherit"
          >
<<<<<<< Updated upstream
            {/* <InputIcon /> */}
            <Popover />
=======
            <InputIcon />
>>>>>>> Stashed changes
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
