/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { useHistory } from "react-router-dom";

// @material-ui/icons
import { Apps, CloudDownload, EventNote } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const history = useHistory();

  const handClick = (to) => () => history.push(to);

  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="精典案例"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/profile-page" className={classes.dropdownLink}>
              Profile page
            </Link>,
            <a
              href="/landing-page"
              className={classes.dropdownLink}
            >
              Landing page
            </a>,
            <Link to="/login-page" className={classes.dropdownLink}>
              Login page
            </Link>
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
          onClick={handClick('/articles')}
        >
          <EventNote className={classes.icons} />DevOps工具
        </Button>
      </ListItem>
    </List>
  );
}
