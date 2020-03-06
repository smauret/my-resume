import React from 'react'
import {Grid, Typography, Paper} from '@material-ui/core/'

/*const skills = [
    {axis: 'Ethereum', value: 70},
    {axis: 'DLTs', value: 70},
    {axis: 'Solidity', value: 60},
    {axis: 'Agility', value: 90},
    {axis: 'React', value: 80},
    {axis: 'Sharing knowledge', value: 100},
    {axis: 'Redux', value: 80},
    {axis: 'Team Work', value: 70},
    {axis: 'Material-UI', value: 80},
]*/

const skills = [
    {name: 'Blockchain', value: '38%', color:'#ffa000'},
    {name: 'React', value: '38%', color:'#dc004e'},
    {name: 'Methodology', value: '24%', color:'#8bc34a'},
]

export const Tldr = () => {
    return (
        <Grid id={'tl;dr'} container item xs={12} spacing={2} style={{margin: '25px 0'}}>
            <Grid container item xs={12} spacing={2}>
                <Typography paragraph>
                    I am a developer with experience in Blockchain Technologies and React looking for an opportunity in
                    Berlin.
                </Typography>
            </Grid>

            <Grid container item xs={12} spacing={2} >
                <Typography color={"primary"} variant="h5" component="h2" align={'center'}>
                    My skills
                </Typography>
            </Grid>
            <Grid container item xs={12} spacing={2} elevation={2} style={{justifyContent: 'flex-start', alignItems:'center'}}>
                {skills.map(s =>
                    <Paper elevation={0} square style={{width: s.value, backgroundColor: s.color}}>
                        <Typography paragraph> {s.name} </Typography>
                    </Paper>
                )}
            </Grid>
        </Grid>
    )
}
