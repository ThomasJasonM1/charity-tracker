import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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
  },
  media: {
    height: 140,
  },
});

const CharityCard = (props) => {
  const classes = useStyles();
  const { name, image, about, id, isSignedIn, showEdit } = props.charity;

  const styles = {
    card: {
      margin: 16,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  };

  return (
    <>
      <Grid item key={id} xs={12} sm={6} md={4}>
        <Card style={styles.card} className={classes.root}>
          <CardMedia className={classes.media} image={image} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography>{about}</Typography>
          </CardContent>
          <CardActions>
            <Link to={"/organization/" + id}>View</Link>
            {isSignedIn && showEdit ? (
              <Button size="small" color="primary">
                Edit
              </Button>
            ) : null}
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default CharityCard;
