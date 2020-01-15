import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "40%",
    marginTop: 10,
    backgroundColor: "lightGrey"
  },
  cardHeader: {
    justifyContent: "left",
    textAlign: "left"
  },
  cardContent: {
    justifyContent: "left",
    textAlign: "left"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const ChatArea = ({ allMessages, deleteMessage }) => {
  const classes = useStyles();
  return (
    <div>
      {allMessages.map((message, i) => {
        return (
          <Card key={i + 1} className={classes.card}>
            <CardHeader
              className={classes.cardHeader}
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton
                  aria-label="settings"
                  onClick={() => deleteMessage(i)}
                >
                  <Icon>delete</Icon>
                </IconButton>
              }
              title="Me"
              subheader="Now"
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="body2" color="textSecondary" component="p">
                {message}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ChatArea;
