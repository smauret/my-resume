import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {Grid, Card, CardContent, Typography, IconButton, CardActions, Collapse} from '@material-ui/core/'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export const Exp = ({title, company, date, location, description, detail}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Grid item xs={12}>
      <Card elevation={0} style={{borderRadius: '0'}}>
        <CardContent>
          <Typography color={"primary"} variant="h5" component="h2" align={'center'}>
            {title}
          </Typography>
          <Typography color={"secondary"} variant="subtitle1" component="h3">
            {company}
          </Typography>
          <Typography variant="subtitle2" component="h3" style={{color: '#808080', textAlign: 'right'}}>
            {date}
          </Typography>
          <Typography variant="body1" component="h2" style={{color: '#505050', textAlign: 'left'}}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon/>
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{detail}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
};

export const Experiences = ({experiences}) => {
  return experiences.map(
    (exp, i) => <Exp key={i}
                     title={exp.title}
                     company={exp.company} date={exp.date}
                     location={exp.location}
                     description={exp.description}
                     detail={exp.detail}/>);
};

