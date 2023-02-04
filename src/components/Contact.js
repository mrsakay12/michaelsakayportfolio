import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import DoneRounded from "@material-ui/icons/School";

import CardMedia from "@material-ui/core/CardMedia";
import project3 from "../images/mern-stack.jpg";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";





const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: 'transparent',
    height: "100%",
    marginTop:"70px",
  },
  heading: {
    color: "#59C1BD",
    padding: "1rem 0",
    textTransform: "uppercase",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#678983",
      fontSize: "5rem",
      "&:hover": {
        fill: "#00425A",
        fontSize: "5rem",
      },
    },
  },
});

const projects = [
  {
  
    image: project3,
    
  }
 
];
const Contact = () => {
  const classes = useStyles();

  return (
    
    
    <BottomNavigation className={classes.mainContainer}>
      
       
      <Grid container justify="center"  className={classes.mainContainer}>
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
          
                <CardMedia
                  component="img"
                  alt="Project 1"
            
                  height="170"
                  image={project.image}
                />
                
              </CardActionArea>
              <CardActions>
              <BottomNavigationAction icon={<Facebook />} className={classes.root}  href="https://www.facebook.com/profile.php?id=100042068954522" target="_blank" alt="facebook"/>
              <BottomNavigationAction icon={<LinkedIn />} className={classes.root} href="https://www.linkedin.com/in/michael-roland-sakay/" target="_blank"/>
              <BottomNavigationAction icon={<GitHub />} className={classes.root}  href="https://github.com/mrsakay12" target="_blank" />
              <BottomNavigationAction icon={<DoneRounded />} className={classes.root}  href="https://drive.google.com/file/d/1NNH0Un_1w5ncF7pCwRATTqsX0m9E83ma/view?usp=sharing" target="_blank" />

          
              </CardActions>
              
            </Card>
          </Grid>
        ))}
      </Grid>
      <br></br>
    
    </BottomNavigation>
  );
};
export default Contact;
