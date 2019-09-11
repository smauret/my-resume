import React from 'react'
import {Grid, Typography} from '@material-ui/core/'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

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

  const starss = level => {
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

  const stars = level => {
    let stars = []
    for (let i =0; i<level; i++){
      stars.push(<StarIcon color={"primary"}/>)
    }
    for (let i =0; i<5-level; i++){
      stars.push(<StarBorderIcon color={"primary"}/>)
    }
    return stars
  }

  return (
    <Grid container item xs={12} style={{padding: '20px 0'}}>
      {languages.map(l => {
        return (<Grid key={l.lang} container item xs={12} md={6}>
          <Grid container item xs={7} style={{justifyContent: 'center'}}>
            <Typography variant="subtitle2" style={{color: '#808080', alignSelf: 'center'}}>{l.lang}</Typography>
          </Grid>
          <Grid container item xs={5}>
            {stars(l.level).map(s => <Typography align={'center'} color={"primary"} variant="h5" style={{width: 'fit-content'}}> {s} </Typography>)}
          </Grid>
        </Grid>)
      })}
    </Grid>
  )
};
