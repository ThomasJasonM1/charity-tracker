import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputIcon from '@material-ui/icons/Input';
import TextField from '@material-ui/core/TextField';
import API from "../api";



const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [formObject, setFormObject] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    API.signIn(formObject)
      .then((userDetails) => props.handleUserLogin(userDetails.data))
      .catch((err) => console.log("An error occured", err));
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        <InputIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          <form>
            <h3>Administrator Login</h3>
            <TextField 
              onid="standard-basic"
              label="Username"
              name="username"
              value={formObject.username}
              onChange={handleInputChange} 
            />
            <br/>
            <br/>
            <TextField 
              id="standard-basic"
              label="Password"
              name="password"
              value={formObject.password}
              onChange={handleInputChange}
            />
            <br/>
            <br/>
            <Button 
              style={{marginLeft: "30%"}}
              onClick={handleLogin}
            >Login
            </Button>
          </form>
        </Typography>
      </Popover>
    </div>
  );
}