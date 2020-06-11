import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    height: 140,
  },
});

const CharityCard = (props) => {
  const classes = useStyles();
  const { name, image, about, id, isSignedIn, showEdit } = props.charity;

  return (
    <Grid item key={props.id} xs={12} sm={6} md={4}>
      <motion.div variants={props.variant}>
        <Card className={classes.root}>
          <CardMedia className={classes.media} image={image} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography>{about}</Typography>
          </CardContent>
          <CardActions>
            <Link to={"/search-details/" + id}>View</Link>
            {isSignedIn && showEdit ? (
              <Link to={"/organization/" + id}>Edit</Link>
            ) : null}
          </CardActions>
        </Card>
      </motion.div>
    </Grid>
  );
};

export default CharityCard;
