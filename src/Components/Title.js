import React from 'react'
import {Grid, Typography} from '@material-ui/core/'

export const Title = ({title,description}) => {
  return <Grid container item xs={12} style={{height:'15%',justifyContent: 'center',position: 'sticky', top: '0px', backgroundColor:'#dcdcdc' }}>
    <Typography color={"primary"} variant="h2">{title}</Typography>
    <Typography color={"primary"} variant="subtitle1">{description}</Typography>
  </Grid>
};



