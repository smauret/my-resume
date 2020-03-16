import React, {useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {Grid, Card, CardContent, Typography, CardActions, Collapse, Chip, Fab, Box} from '@material-ui/core/'

export const Exp = ({title, company, date, location, description, detail, tech, logo}) => {
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Grid item xs={12} style={{marginBottom: '10px'}}>
      <Card elevation={expanded ? 1 : 0} style={{borderRadius: '2', backgroundColor: '#F0F0F0'}}>
        <CardContent>
          <Grid container style={{alignItems: 'center', marginBottom: '30px'}}>
            <Grid container item xs={10} style={{height: '100%', justifyContent: 'left'}}>
              <Grid container item xs={12} style={{height: '100%', justifyContent: 'left'}}>
                <Typography variant="h5" component="h2">
                  <Box style={{margin: 0}} fontWeight="fontWeightBold" m={1}>
                    {title}
                  </Box>
                </Typography>
              </Grid>
              <Grid container item xs={12} style={{height: '100%', justifyContent: 'left'}}>
                <Typography variant="subtitle2" component="h3" style={{color: '#808080', textAlign: 'left'}}>
                  {date} - {location}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={2} style={{height: '100%'}}>
              <Box>
                <img src={logo} alt={'company logo'} style={{objectFit: 'cover', height: '100%', width: '100%'}}/>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body1" component="h2" style={{color: '#505050', textAlign: 'left'}}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container item xs={9} md={11} style={{justifyContent: 'flex-start'}}>
          {detail.map(d => d.tech.map(t => <Chip key={t} variant="outlined" color="primary" label={t}
                                                 style={{margin: '3px'}}/>))}
          </Grid>
          <Grid container item xs={3} md={1} xl style={{justifyContent: 'flex-end'}}>
            <Fab elevation={0} color="primary" aria-label="expand" onClick={handleExpandClick}
                 style={{color: 'white', boxShadow: '4px 6px 6px -1px #ccc', height: '28px', width:'36px'}}>
              {expanded ? <RemoveIcon/> : <AddIcon/>}
            </Fab>
          </Grid>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {detail.map(detail => {
              let tasks = detail.tasks.map(t => <Typography key={t} paragraph>&#8226; {t}</Typography>)
              let skills = detail.tech.map(t => <Chip key={t} variant="outlined" color="primary" label={t}
                                                      style={{margin: '3px'}}/>)
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
  return <Grid item xs={12} id={'Experiences'} style={{margin: '25px 0', backgroundColor: '#F0F0F0', borderRadius: '5px'}}>
    {exps}
  </Grid>
};

