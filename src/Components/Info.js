import React from 'react'
import {Grid, Typography, Box} from '@material-ui/core/'
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

      <Grid container item xs={12} style={{justifyContent: 'left'}}>
        <Typing cursor={<Cursor/>} speed={120}>
          <Typography color={"black"} fontWeight={'bold'} variant="h2">
            <Box fontWeight="fontWeightBold" m={1}>
              {title}
            </Box>
            </Typography>
        </Typing>
      </Grid>

      <Grid container item xs={12} style={{justifyContent: 'left'}}>
        <Typography color={"black"} variant="subtitle1">{description}</Typography>
      </Grid>

    </Grid>
  )
};



