import React from 'react'
import {Radar} from "./Radar";
import {Grid, Typography} from '@material-ui/core/'

export const Tldr = () => {
  return(
  <Grid id={'tl;dr'}  container item xs={12} style={{margin: '25px 0'}}>
    <Typography paragraph>
      I am a developer with (some) experience in Blockchain and React looking for an opportunity in the Silicon
    Valley.
    </Typography>
    <Typography color={"primary"} variant="h5" component="h2" align={'center'}>
      Technical skills
    </Typography>
    <Radar tech={true}/>
    <Typography color={"primary"} variant="h5" component="h2" align={'center'}>
      Soft skills
    </Typography>
    <Radar tech={false}/>
  </Grid>
  )
}
