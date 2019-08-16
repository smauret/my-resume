import React from 'react'
import {Grid, Typography} from '@material-ui/core/'

export const Language = ({lang, level}) => {

  const stars = level => {
    switch (level) {
      case 0:
        return ''
      case 1:
        return '★'
      case 2:
        return '★★'
      case 3:
        return '★★★'
      case 4:
        return '★★★★'
      case 5:
        return '★★★★★'
      default:
        return '★★★★★'
    }
  };

  return (
    <Grid container item xs={6}>
      <Grid container item xs={3} style={{justifyContent: 'center'}}>
        <Typography variant="subtitle2" style={{color: '#808080', alignSelf:'center'}}>{lang}</Typography>
      </Grid>
      <Grid container item xs={6}>
        <Typography color={"primary"} variant="h5" style={{width:'fit-content'}}>{stars(level)}</Typography>
        <Typography color={"secondary"} variant="h5" style={{width:'fit-content'}}>{stars(5-level)}</Typography>
      </Grid>
    </Grid>
  )
};
