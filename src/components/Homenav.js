import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import ArrowBack from "@material-ui/icons/ArrowBack";
import AssignmentInd from "@material-ui/icons/AssignmentInd";

import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../makisakay.png";
import Button from "@material-ui/core/IconButton";


const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    margin: 0,
    opacity: 0.8,
    textSizeAdjust:"50%",
    
  },
  arrow: {
    color: "#1F8A70",
  },
  title: {
    color: "#00425A",
  },
  menuSliderContainer: {
    width: 250,
    background: "#8EC3B0",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "579BB1",
  },
  toolbar: {
   
    justifyContent: "center",
  },
  buttons: {
    


    elevation: 8,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    background: "#8EC3B0",
    margin: 0,

    color: "#03001C",
    height: "10px",
    fontSize: "1.6rem",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#227C70",
      fontSize: "1.7rem",
      color: "white",
    },
    
  },
}));

const menuItems = [
 
  { listIcon: <Apps />, listText: "Projects", listPath: "/portfolio" },
  { listIcon: <AssignmentInd />, listText: "Work Experience", listPath: "/resume" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },

];

const Homenav = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Michael Roland Sakay" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar  className={classes.toolbar}  align="center" >
            <IconButton onClick={() => setOpen(true)}>
              <ArrowBack className={classes.arrow} />
            </IconButton>
          
            <br></br>
          <Button  className={classes.buttons}  variant="contained"   onClick={() => setOpen(true)}>View My Portfolio </Button>&nbsp;&nbsp;
          <Button   className={classes.buttons}  variant="outlined" href="https://drive.google.com/file/d/1NNH0Un_1w5ncF7pCwRATTqsX0m9E83ma/view?usp=sharing" target="_blank" >Download My Resume</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}

      </Drawer>
    </React.Fragment>
  );
};

export default Homenav;
