import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Typed from "react-typed";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  heading: {
    color: "#59C1BD",
    padding: "1rem 0",
    textTransform: "uppercase",
  },
  subtitle2: {
    color: "#AACB73",
    textAlign: "center",
  }
}));

const projects = [
  {
    name: "Easy Visit Pass - (Best in Capstone Project)",
    description: `Tools used: HTML/ CSS, Bootstraps , Laravel , PHP, Blade , Ajax , JavaScript , MySQL.
    `,
    description2: ` Description: System for all kind of company , It helps in capturing the details about the visitors in a systematic manner and maintains a repository of the same. 
    Lead the team, Work in Backend - building and maintaining the mechanisms that process data and perform actions on websites, Troubleshoot and debug.
    `,
    description3: ` Note: For Live Demo use Icognito Windows - here the credentials for login,  Email : admin@example.com , employee@example.com ,reception@example.com Password : 12345678
    `,
    image: project1,
    button2: <Button size="small" color="primary" href="https://evpass.000webhostapp.com/home" target="_blank">
    Live Demo
  </Button>,
    button: <Button size="small" color="primary" href="https://github.com/mrsakay12/easyvisitpass" target="_blank">
    Source Code
  </Button>,
  },
  {

    name: "Cawayan (Best in Mini Project II)",

    description: `Tools used: HTML/ CSS, Bootstraps , React & Node.js `,
    image: project2,
    description2: `Description:  I enhanced its functionality by adding admin portal thru implementation of create, read, update , delete and dashboards, as well as API integration.
    `,
    description3: ` Note: For the credentials to Admin,  Email : admin-cawayan , Password : 12345
    `,
    button2: <Button size="small" color="primary" href="https://cawayan.onrender.com/" target="_blank">
    Live Demo
  </Button>,
    button: <Button size="small" color="primary" href="https://github.com/Kertski/cawayan" target="_blank">
    Source Code
  </Button>,
  },
  {
    name: "Yosef Vinsweets CakeShop",
    description: `Tools used: HTML/ CSS, Bootstraps `,
    image: project3,
    description2: `Description:  This is a static website, user can view & browse the items list, can submit their information (signup-form) and can be view into a mobile browser devices & As of now this website can’t do place an order through cart & transact online, not yet build on the data base (backend) for the product update & customer information.
    `,
    button2: <Button size="small" color="primary" href="https://mrsakay12.github.io/" target="_blank">
    Live Demo
  </Button>,
    button: <Button size="small" color="primary" href="https://github.com/mrsakay12/mrsakay12.github.io" target="_blank">
    Source Code
  </Button>,
  },
 
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
        List of My Projects
      </Typography>
        
      <Typography
            className={classes.subtitle2} variant="h5"
          >
           MY SKILLS : 
 
            
        <Typed
   strings={[
            
            " Back-End Development",
            " Front-End Development",
            " Leadership",
            " Analytical skills",
            " Attention to detail",
            " A logical approach to work",
            " Testing and debugging skills",
            " Problem-solving skills",
            " PHP",
            " Laravel",
            " HTML/CSS",
            "Bootstraps",
            " AJAX",
            " Blade",
            " JavaScript",
            " React JS",
            " Node  JS",
            " Xampp",
            " MySQL",
            " Heidisql",
            " GitHub",
          
          
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                  <br></br>
                  <Typography variant="body2" color="textSecondary">
                    {project.description2}
                  </Typography>
                  <br></br>
                  <Typography variant="body2" color="textSecondary">
                    {project.description3}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              {project.button2}
              {project.button}
               
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
