import React from 'react'
import {Grid, Typography, Box, Button} from '@material-ui/core/'
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
          <Typography fontWeight={'bold'} variant="h2">
            <Box fontWeight="fontWeightBold" m={1}>
              {title}
            </Box>
          </Typography>
        </Typing>
      </Grid>

      <Grid container item xs={12} style={{justifyContent: 'left'}}>
        <Typography variant="subtitle1" style={{paddingLeft: '12px'}}>{description}</Typography>
      </Grid>
      <Grid container item xs={12} style={{justifyContent: 'left', paddingLeft: '9px'}}>
        <Button variant="outlined" color="primary" style={{margin: '3px'}} href="mailto:sarah.mauret@epfedu.fr">
          Get in contact
        </Button>
      </Grid>
    </Grid>
  )
};



