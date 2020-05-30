import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputIcon from '@material-ui/icons/Input';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
              onChange={e => setUsername(e.target.value)} 
            />
            <br/>
            <br/>
            <TextField 
              id="standard-basic"
              label="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <br/>
            <br/>
            <Button 
              style={{marginLeft: "30%"}}
              onClick={() => console.log(username + " " + password)}
            >Login
            </Button>
          </form>
        </Typography>
      </Popover>
    </div>
  );
}