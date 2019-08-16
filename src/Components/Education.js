import React from 'react'
import {Grid, Card, CardContent, Typography} from '@material-ui/core/'

export const Education = ({title, school, date, location, courses, description}) => {
  return (
    <Grid item xs={12}>
      <Card elevation={0} style={{ borderRadius:'0'}}>
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
          {courses.map(course => <Typography variant="body1" component="h2" style={{color: '#505050', textAlign: 'left'}}>
            {course}
          </Typography>)}
          <Typography variant="body1" component="h2" style={{color: '#505050', textAlign: 'left'}}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
      )
}
