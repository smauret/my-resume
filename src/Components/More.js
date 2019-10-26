import React from 'react'
import {Grid, Card, CardContent, CardMedia, CardActions, Button, Typography} from '@material-ui/core/'
import {makeStyles} from '@material-ui/core/styles';
import {Language} from "./Language";
import ImageAsseth from '../Assets/asseth-logo.jpg';
import ImageS2G from '../Assets/dev-team-share2gether.jpg';
import ImageEth from '../Assets/ethereum-2.png';
import IconKite from '../Assets/icon-kite.png';
import IconClimb from '../Assets/bouldering.png';
import PedestrianProject from '../Assets/pedestrian-intention-project.png';
import BeerPongProject from '../Assets/beer-pong-project.png';
import PersonalProject from '../Assets/personal-project.png';

const useStyles = makeStyles({
  card: {
    maxWidth: 245,
    height: 245
  },
  media: {
    height: 140,
  },
});

const articles = [
  {
    title: 'Share2Gether',
    image: ImageS2G,
    excerpt: 'A decentralized platform to organize events with a reputation system to avoid no-show...',
    link: 'https://talan.com/technologies/blockchain/blog/blog/2019/02/share2gether-collaboration-avec-etudiants-epf/'
  },
  {
    title: 'Ethereum 2.0',
    image: ImageEth,
    excerpt: 'What is Ethereum 2.0 ? Casper FFG ? Sharding ? Overview of the evolutions to come in Ethereum...',
    link: 'https://talan.com/technologies/blockchain/blog/blog/2018/10/meetup-consensys--pr%C3%A9sentation-dethereum-2.0/'
  },
  {
    title: 'Meetup Asseth',
    image: ImageAsseth,
    excerpt: 'Every month a meetup with Asseth: the french association that promotes Blockchain and its ecosystem...',
    link: 'https://talan.com/technologies/blockchain/blog/blog/2019/02/meetup-asseth--table-ronde/'
  }
];

const projects = [
  {
    title: 'Pedestrians intention detection',
    image: PedestrianProject,
    text: 'This project was about researching, proposing and implementing a solution to find the intention of the traffic participants in urban environments. It is using a logical-probabilistic approach.The system proposed focuses first on the pedestrians’ intention of crossing the road. '
  },
  {
    title: 'Beer Pong Game',
    image: BeerPongProject,
    text: 'This project is a beer pong game implemented in C++ using Urho3D as game engine.'
  },
  {
    title: 'Personal project: jump height measurement',
    image: PersonalProject,
    text: 'This project is mixing hardware and software development in building a jump height measurement sensor for kiteboarders.'
  },
];

export const More = () => {

  const classes = useStyles();

  const article = data =>
    <Grid item xs={12} lg={4} key={data.link} style={{margin: '20px 0'}}>
      <Card className={classes.card}>
        {/*        <CardMedia
          className={classes.media}
          image={data.image}
          title="article image"
        />*/}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.excerpt}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={data.link}>
            Read
          </Button>
        </CardActions>
      </Card>
    </Grid>


  const project = data =>
    <Grid container item xs={12} spacing={2} key={data.title} style={{padding: '20px 0'}}>
      <Grid item xs={12} md={4}>
        <Card style={{marginTop: '10px'}}>
          <CardMedia
            className={classes.media}
            image={data.image}
            title="project image"
          />
        </Card>
      </Grid>

      <Grid container item xs={12} md={8} spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" component="p">
            {data.text}
          </Typography>
        </Grid>
      </Grid>

    </Grid>


  const sports = icons =>
    <Grid container spacing={2}>
      {icons.map(img =>
        <Grid key={img} item xs={4} md={3}>
          <CardMedia
            className={classes.media}
            component={'img'}
            image={img}
            title="Kite icon"
            style={{
              height: '100%',
              width: '100%',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </Grid>
      )}
    </Grid>

  return (
    <Grid id={'More'} container item xs={12} style={{margin: '25px 0'}}>
      <Typography color={"primary"} variant="h5" component="h2" align={'center'}>
        Languages
      </Typography>
      <Language/>

      <Typography color={"primary"} variant="h5" component="h2" align={'center'}>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map(a => project(a))}
      </Grid>

      <Typography color={"primary"} variant="h5" component="h2" align={'center'}>
        Articles
      </Typography>
      <Grid container spacing={2}>
        {articles.map(a => article(a))}
      </Grid>

      <Typography color={"primary"} variant="h5" component="h2" align={'center'}>
        Hobbies
      </Typography>
      {sports([IconKite, IconClimb])}
    </Grid>
  )
}
