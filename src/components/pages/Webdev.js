import React from "react";
import bookSearch from "../../img/MERN-book-search.png";
import closingBrackets from "../../img/closing_brackets.png";
import budgetTracker from "../../img/budget-tracker.png";
import trailFinder from "../../img/trail-finder.png";
import fitnessTracker from "../../img/fitness-tracker.png";
import link from "../../img/link_icon.png";
import github from "../../img/github_icon.png";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../../styles/webdev.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Webdev() {
  const classes = useStyles();

  const cardClasses = `${classes.root} card`;

  const project = [
    {
      name: "MERN Book Search",
      img: bookSearch,
      desc: "A program that utilizes google's book search api to let a user search for books",
      github: "https://github.com/CWhirl/MERN-Book-Search-Engine",
      link: "https://protected-temple-41823.herokuapp.com/",
    },
    {
      name: "[Closing Brackets]",
      img: closingBrackets,
      desc: "A site for meeting and networking with other developers. Just sign in with your GitHub account, and it will generate and map a profile for you.",
      github: "https://github.com/CWhirl/Project_3",
      link: "https://sheltered-spire-55566.herokuapp.com/",
    },
    {
      name: "Web App Budget Tracker",
      img: budgetTracker,
      desc: "A budget tracking app that uses service workers to provide offline functionality",
      github: "https://github.com/CWhirl/Online-Offline-Budget-Tracker",
      link: "https://fast-fortress-73072.herokuapp.com",
    },
    {
      name: "Trail Finder",
      img: trailFinder,
      desc: "An early frontend app that uses the MapBox and leaflet apis to help users find famous trails in the Denver, CO area",
      github: "https://github.com/CWhirl/trail-finder",
      link: "https://cwhirl.github.io/trail-finder/",
    },
    {
      name: "Fitness Tracker",
      img: fitnessTracker,
      desc: "Tracks a users workouts in a mongo database and outputs them to dynamically generated animated graphs.",
      github: "https://github.com/CWhirl/NoSql-Fitness-Tracker",
      link: "https://pure-chamber-38790.herokuapp.com/?id=60f318f629ac9500150c84d6",
    },
  ];

  return (
    <div className="webdev">
      <h1>
        <span className="full-text">Projects</span>
      </h1>

      {project.map((item, i) => (
            <Card className={cardClasses} >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {item.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button href={item.github} size="small" color="primary">
                  <img src={github} alt="" className="image" />
                </Button>
                <Button href={item.link} size="small" color="primary">
                <img src={link} alt="" className="image" />
                </Button>
              </CardActions>
            </Card>
      ))}
    </div>
  );
}
export default Webdev;
