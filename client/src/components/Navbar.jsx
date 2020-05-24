import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button>
            Admin Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
