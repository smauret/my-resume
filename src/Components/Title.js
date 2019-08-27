import React from 'react'
import {Grid, Typography, Box} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      borderBottom: '1px solid black'
    }
  }
}));

export const Title = ({title}) => {
  const classes = useStyles();
  return (
    <Grid container style={{width: 'fit-content'}}>
        <Typography id={title} fontFamily="Monospace" color={"primary"} variant="h3" style={{padding: '10px 15px 15px 15px'}}>
        <Box borderBottom={1} className={classes.root} style={{borderWidth: 'medium',padding: '0 5px 5px 5px'}} >{title}</Box>
      </Typography>
    </Grid>
  )
};
