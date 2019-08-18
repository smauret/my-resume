import React from 'react'
import {Grid, Typography} from '@material-ui/core/'

export const Language = () => {

  const languages = [
    {
      lang: 'French (Mother tongue)',
      level: 5
    },
    {
      lang: 'German (Survivable)',
      level: 3
    },
    {
      lang: 'English (Daily use)',
      level: 5
    },
    {
      lang: 'Spanish (Si, Señor)',
      level: 3
    },
  ];

  const stars = level => {
    switch (level) {
      case 0:
        return '';
      case 1:
        return '★';
      case 2:
        return '★★';
      case 3:
        return '★★★';
      case 4:
        return '★★★★';
      case 5:
        return '★★★★★';
      default:
        return '★★★★★'
    }
  };

  return (
    <Grid container item xs={12} style={{padding:'20px 0'}}>
      {languages.map(l =>  {
      return (<Grid key={l.lang} container item xs={12} md={6}>
        <Grid container item xs={7} style={{justifyContent: 'center'}}>
          <Typography variant="subtitle2" style={{color: '#808080', alignSelf: 'center'}}>{l.lang}</Typography>
        </Grid>
        <Grid container item xs={5}>
          <Typography color={"primary"} variant="h5" style={{width: 'fit-content'}}>{stars(l.level)}</Typography>
          <Typography color={"secondary"} variant="h5" style={{width: 'fit-content'}}>{stars(5 - l.level)}</Typography>
        </Grid>
      </Grid>)
      })}
    </Grid>
  )
};
