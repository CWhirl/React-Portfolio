import React from "react";
//import "../styles/Nav.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function Nav({ currentPage, handlePageChange }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="parent">
      <div className="nav">
        <ul className="nav nav-tabs">
          <Paper className={classes.root}>
          <h1 className="myName">
            Camden Whirl
      </h1>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="palette.primary"
        textColor="palette.primary"
        centered
      >
        <Tab onClick={() => handlePageChange("About Me")} label="About Me" />
        <Tab onClick={() => handlePageChange("Web Development")} label="Projects" />
        <Tab onClick={() => handlePageChange("Contact")}label="Contact" />
        <Tab onClick={() => handlePageChange("Resume")}label="Resume" />
      </Tabs>
    </Paper>
        </ul>
      </div>
    </div>

  );
}


export default Nav;
