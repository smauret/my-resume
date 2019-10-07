import React from 'react'
import {Grid, Typography} from '@material-ui/core/'
import Typing from 'react-typing-animation';
import Cursor from "./Cursor";

export const Info = ({title, description}) => {
  return (

    <Grid container item xs={12} style={{
      position: 'relative',
      backgroundColor: 'white',
      justifyContent: 'center',
      padding: '80px 20px'
    }}>

      <Grid container item xs={12} style={{justifyContent: 'center'}}>
        <Typing cursor={<Cursor/>} speed={120}>
          <Typography color={"primary"} variant="h2">  {title} </Typography>
        </Typing>
      </Grid>

      <Grid container item xs={12} style={{justifyContent: 'center'}}>
        <Typography color={"primary"} variant="subtitle1">{description}</Typography>
      </Grid>

      {/*<Grid container item xs={12} md={8} style={{justifyContent: 'center'}}>
        <Grid container item xs={12} md={6} style={{justifyContent: 'center'}}>
          <Typography color={"primary"} variant="subtitle1">sarah.mauret@epfedu.fr</Typography>
        </Grid>
        <Grid container item xs={12} md={6} style={{justifyContent: 'center'}}>
          <Typography color={"secondary"} variant="subtitle2">LinkedIn: www.linkedin.com/in/sarah-mauret</Typography>
        </Grid>
        <Grid container item xs={12} md={6} style={{justifyContent: 'center'}}>
          <Typography color={"secondary"} variant="subtitle2">Phone: (+33) 6 45 06 38 69</Typography>
        </Grid>
        <Grid container item xs={12} md={6} style={{justifyContent: 'center'}}>
          <Typography color={"secondary"} variant="subtitle2">Address: 20 rue Georges Bizet, Paris, France</Typography>
        </Grid>
      </Grid>*/}

    </Grid>
  )
};



