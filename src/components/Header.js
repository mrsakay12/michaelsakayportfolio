import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../makisakay.png";



const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#7FE9DE",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  subtitle1: {
    color: "#FFE7CC",
    marginLeft:"60px",
    marginRight:"60px",
  },
  subtitle2: {
    color: "#AACB73",
  },
 

}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Michael Roland Sakay" />
      </Grid>
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer",
            "Database Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <Typography className={classes.title} variant="h3">
        <Typed strings={["Michael Roland Sakay | Maki"]} typeSpeed={60} />
      </Typography>

      

      <Typography
         
            align="paragraph"

            className={classes.subtitle1} variant="h6"
          >
            "Hi my nickname is Maki, I am a logical and results-driven web developer, My Strength are HTML/CSS, Bootstraps, Laravel , PHP & MySQL, I am a strong problem solver and an effective communicator and I am always looking for ways to improve the user experience and drive business growth."
           

          </Typography>
      
            
           


   

      

    </Box>
  );
};

export default Header;
