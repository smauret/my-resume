import React from 'react'
import {Grid, Typography, CardMedia} from '@material-ui/core/'
import LogoBlockchain from '../Assets/blockchain.png';
import LogoReact from '../Assets/react.png';
import LogoAgile from '../Assets/agility.png';

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
    {name: 'Blockchain', logo: LogoBlockchain, color:'#ffa000'},
    {name: 'React', logo: LogoReact, color:'#dc004e'},
    {name: 'Methodology', logo: LogoAgile, color:'#8bc34a'},
]

export const Tldr = () => {
    return (
        <Grid id={'tl;dr'} container item xs={12} spacing={2} style={{margin: '25px 0'}}>
            <Grid container item xs={12} spacing={2}>
                <Typography paragraph>
                    I am a developer with one year experience in Blockchain Technologies and React looking for an opportunity in
                    Berlin.
                </Typography>
            </Grid>

            <Grid container item xs={12} spacing={2} >
                <Typography color={"primary"} variant="h5" component="h2" align={'center'}>
                    My skills
                </Typography>
            </Grid>
            <Grid container item xs={12} spacing={4} style={{justifyContent: 'center', alignItems:'stretch'}}>
                {skills.map(s =>
                    <Grid container item xs={4} style={{justifyContent: 'center', alignItems:'flex-end'}}>
                        <CardMedia title={s.name}
                               component={'img'}
                               image={s.logo}
                        />
                        <Grid><Typography paragraph align={'center'}> {s.name} </Typography></Grid>
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}
