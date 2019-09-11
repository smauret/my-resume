import React from 'react'
import {Grid, Card, CardContent, Typography} from '@material-ui/core/'

export const Education = ({title, school, date, location, courses, description}) => {
  return (
    <Grid item xs={12}>
      <Card elevation={0} style={{borderRadius: '0'}}>
        <CardContent>
          <Typography color={"primary"} variant="h5" component="h2" align={'center'}>
            {title}
          </Typography>
          <Typography color={"secondary"} variant="subtitle1" component="h3">
            {school}
          </Typography>
          <Typography variant="subtitle2" component="h3" style={{color: '#808080', textAlign: 'right'}}>
            {date}
          </Typography>
          <Typography variant="body1" component="h2" style={{color: '#505050', textAlign: 'left'}}>
            {description}
          </Typography>
          <Typography color={"primary"} variant="subtitle1">Main courses:</Typography>
          {courses.map(course => <Typography key={course} variant="body1" component="h2" style={{color: '#505050', textAlign: 'left'}}>
            &#8226; {course}
          </Typography>)}
        </CardContent>
      </Card>
    </Grid>
  )
};

export const Educations = ({educations}) => {
  let edu = educations.map(
    (ed, i) => <Education key={i}
      title={ed.title} courses={ed.courses}
      school={ed.school} date={ed.date}
      location={ed.location}
      description={ed.description}/>);
  return <Grid item xs={12} id={'Education'} style={{margin: '25px 0'}}>{edu}</Grid>

};
