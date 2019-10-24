import React from 'react'
import {Radar} from "./Radar";
import {Grid, Typography, LinearProgress} from '@material-ui/core/'

const skills = [
  {axis: 'Ethereum', value: 70},
  {axis: 'DLTs', value: 70},
  {axis: 'Solidity', value: 60},
  {axis: 'React', value: 80},
  {axis: 'Redux', value: 80},
  {axis: 'Material-UI', value: 80},
  {axis: 'Scrum', value: 90},
  {axis: 'Sharing knowledge', value: 100},
  {axis: 'Team Work', value: 70}]

export const Tldr = () => {
  return (
    <Grid id={'tl;dr'} container item xs={12} style={{margin: '25px 0'}}>
      <Typography paragraph>
        I am a developer with (some) experience in Blockchain and React looking for an opportunity in the Silicon
        Valley.
      </Typography>
      <Typography color={"primary"} variant="h5" component="h2" align={'center'}>
        Skills
      </Typography>
      <Grid container item xs={12} spacing={2}>
        {skills.map(s =>
          <Grid container item xs={6} alignItems={'baseline'}>
            <Grid item xs={12} sm={4} xl={2}>
              <Typography paragraph>
                {s.axis}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} xl={10}>
              <LinearProgress variant="determinate" value={s.value} style={{width: '100%'}}/>
            </Grid>
          </Grid>
        )
        }
      </Grid>
      {/*<Radar tech={false}/>*/}
    </Grid>
  )
}
