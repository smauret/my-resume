import React from 'react'
import {Grid, Card, CardContent, Typography} from '@material-ui/core/'

export const Exp = ({title, company, date, location, description}) => {
  return (
    <Grid item xs={12}>
      <Card elevation={0} style={{ borderRadius:'0'}}>
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
                     description={exp.description}/>);
};

