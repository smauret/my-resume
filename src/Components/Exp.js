import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Chip} from '@material-ui/core'
import clsx from 'clsx';
import {Grid, Card, CardContent, Typography, IconButton, CardActions, Collapse, Box} from '@material-ui/core/'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export const Exp = ({title, company, date, location, description, detail, tech, logo}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Grid item xs={12} style={{marginBottom: '10px'}}>
      <Card elevation={expanded ? 1 : 0} style={{borderRadius: '2'}}>
        <CardContent>
          <Grid container style={{alignItems:'center', marginBottom:'30px'}}>
            <Grid item xs={2} style={{height: '100%'}}>
              <Box>
                <img src={logo} alt={'company logo'} style={{objectFit: 'cover', height: '100%', width: '100%'}}/>
              </Box>
            </Grid>
            <Grid container item xs={10} style={{height: '100%'}}>
              <Grid container item xs={12} style={{justifyContent: 'center'}}>
                <Typography color={"primary"} variant="h5" component="h2">
                  {title}
                </Typography>
              </Grid>
              {/*<Grid container item xs={12} style={{justifyContent: 'center'}}>
                <Typography color={"secondary"} variant="subtitle1" component="h3">
                  {company}
                </Typography>
              </Grid>*/}
            </Grid>
          <Typography variant="subtitle2" component="h3" style={{color: '#808080', textAlign: 'left'}}>
            {date}
          </Typography>
          </Grid>
          <Typography variant="body1" component="h2" style={{color: '#505050', textAlign: 'left'}}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container style={{justifyContent: 'flex-end'}}>
            <Grid item xs={2}>
              <Typography variant="body1" style={{color: '#505050', textAlign: 'right', padding: '10px 5px'}}>
                more
              </Typography>
            </Grid>
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
          </Grid>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {detail.map(detail => {
              let tasks = detail.tasks.map(t => <Typography key={t} paragraph>&#8226; {t}</Typography>)
              let skills = detail.tech.map(t => <Chip key={t}  variant="outlined" color="primary" label={t} style={{margin: '3px'}}/>)
              return (
                <Grid key={detail}>
                  <Typography color={"primary"} variant="subtitle1">{detail.title}</Typography>
                  {tasks}
                  {skills}
                </Grid>
              )
            })}

          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
};

export const Experiences = ({experiences}) => {
  const exps = experiences.map(
    (exp, i) => <Exp key={i}
                     title={exp.title}
                     company={exp.company} date={exp.date}
                     location={exp.location}
                     description={exp.description}
                     detail={exp.detail}
                     logo={exp.logo}
                     tech={exp.tech}/>)
  return <Grid id={'Experiences'} style={{margin: '0 0 25px 0'}}>
    {exps}
  </Grid>
};

