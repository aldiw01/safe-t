/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>
        <Link to="/home" className={classes.navLink}>
          Home
        </Link>
      </ListItem>

      {/* <ListItem className={classes.listItem}>
        <Link to="/profile-page" className={classes.navLink}>
          Our Team
        </Link>
      </ListItem> */}

      <ListItem className={classes.listItem}>
        <Link to="/login" className={classes.navLink}>
          Login
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/register" className={classes.navLink}>
          Register
        </Link>
      </ListItem>

    </List>
  );
}

// const HeaderLinksContainer = connect(state => ({ state }))(HeaderLinks);

export default withStyles(headerLinksStyle)(HeaderLinks);
