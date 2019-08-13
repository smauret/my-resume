import React from 'react'
import {Grid, Typography} from '@material-ui/core/'


export const Title = ({title, description}) => {
  return (

    <Grid container item xs={12} style={{
      height: '15%',
      position: 'sticky',
      top: '0',
      backgroundColor: '#dcdcdc'
    }}>
      <Grid container item xs={12} style={{justifyContent: 'center'}}>
        <Typography color={"primary"} variant="h2">{title}</Typography>
      </Grid>
      <Grid container item xs={12} style={{justifyContent: 'center'}}>
        <Typography color={"primary"} variant="subtitle1">{description}</Typography>
      </Grid>
    </Grid>
  )
};



