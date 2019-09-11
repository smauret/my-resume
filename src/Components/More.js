import React from 'react'
import {Grid, Card, CardContent, CardMedia, CardActions, Button, Typography} from '@material-ui/core/'
import {makeStyles} from '@material-ui/core/styles';
import {Language} from "./Language";
import ImageAsseth from '../Assets/asseth-logo.jpg';
import ImageS2G from '../Assets/dev-team-share2gether.jpg';
import ImageEth from '../Assets/ethereum-2.png';
import IconKite from '../Assets/icon-kite.png';
import IconClimb from '../Assets/bouldering.png';

const useStyles = makeStyles({
  card: {
    maxWidth: 245,
    height: 345
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

export const More = () => {

  const classes = useStyles();

  const article = data =>
    <Grid item xs={4} key={data.link}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={data.image}
          title="article image"
        />
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

  const sports = icons =>
    <Grid container spacing={2}>
      {icons.map( img =>
        <Grid item xs={4} md={3}>
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
      <Language/>

      <Grid container spacing={2}>
        {articles.map(a => article(a))}
      </Grid>

      {sports([IconKite,IconClimb])}
    </Grid>
  )
}
