import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Popover,
  Card,
  CardContent,
  CardHeader
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import API from "../utils/API";

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
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    API.adminLogin(formObject)
      .then((userDetails) => props.handleUserLogin(userDetails.data.dbUser))
      .catch((err) => {
        console.log("An error occured", err);
        alert("wrong password, try again!");
      });
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      {props.isSignedIn === false ? (
        <>
          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            <EditIcon />
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Card>
              <CardContent>
              <form>
                <CardHeader title="Administrator Login"/>
                <TextField
                  onid="standard-basic"
                  fullWidth
                  label="Username"
                  name="username"
                  value={formObject.username}
                  onChange={handleInputChange}
                  margin="dense"
                  variant="outlined"
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Password"
                  name="password"
                  type="password"
                  value={formObject.password}
                  onChange={handleInputChange}
                  margin="dense"
                  variant="outlined"
                />
                <br />
                <br />
                <Button
                  style={{ marginLeft: "30%" }}
                  onClick={handleLogin}
                  color="primary"
                  variant="contained"
                >
                  Login
                </Button>
              </form>
              </CardContent>
            </Card>  
          </Popover>
        </>
      ) : (
        <>
          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Sign Out
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Card>
              <CardContent>
                <CardHeader 
                  title="Are you sure?" 
                  style={{ marginBottom: "15px" }}
                />
                <Button
                  style={{ marginRight: "10%", marginLeft: "10%" }}
                  onClick={props.handleSignOut}
                  color="primary"
                  variant="contained"
                >
                  Yes
                </Button>
                <Button
                  onClick={handleClose}
                  color="primary"
                  variant="contained"
                >
                  No
                </Button>
              </CardContent>
            </Card>
          </Popover>
        </>
      )}
    </div>
  );
}
