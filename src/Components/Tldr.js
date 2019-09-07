import React from 'react'
import {Radar} from "./Radar";
import {Grid, Typography} from '@material-ui/core/'

export const Tldr = () => {
  return(
  <Grid container item xs={12} style={{margin: '50px 0'}}>
    <Typography paragraph>
      I am a developer with (some) experience in Blockchain and React looking an opportunity in the Silicon
    Valley.
    </Typography>
    <Radar/>
  </Grid>
  )
}
