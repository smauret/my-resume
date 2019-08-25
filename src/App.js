import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter} from "react-router-dom";
import {
  Grid,
  createMuiTheme,
  CardMedia,
} from '@material-ui/core/'
import {deepOrange} from '@material-ui/core/colors';
import {ThemeProvider} from '@material-ui/styles';
import ImageLecture from './Assets/sarah-lecture.jpg';
import {Info} from "./Components/Info";
import {Experiences} from "./Components/Exp";
import {Educations} from "./Components/Education";
import {Skills} from "./Components/Skill";
import {Language} from "./Components/Language";
import {Title} from "./Components/Title";
import {Menu} from "./Components/Menu";

const whyDidYouRender = require('@welldone-software/why-did-you-render');
whyDidYouRender(React);

const theme = createMuiTheme({
  typography: {
    fontSize: 15,
    fontFamily: 'system-ui',
    color: deepOrange['A400']
  },
  palette: {
    primary: {
      main: deepOrange['A400']
    },
    secondary: {
      main: deepOrange[200]
    }

  }
});

function App() {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    axios.get('./Assets/Data/Experiences.json').then(response => {//https://raw.githubusercontent.com/smauret/my-resume/master/public/Assets/Data/Skills.json
      setExperiences(response.data)
    });
    axios.get('./Assets/Data/Skills.json').then(response => {
      setSkills(response.data)
    });
    axios.get('./Assets/Data/Educations.json').then(response => {
      setEducations(response.data)
    });
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Grid container style={{backgroundColor: '#3f4240', width: '100%', justifyContent: 'center'}}>

          <Grid container item elevation={4} style={{
            width: '100%',
            height: '100%',
            margin: '8px',
            backgroundColor: 'white',
            justifyContent: 'flex-start',
          }}>
            <Info title={'Hi, I\'m Sarah'}
                  description={'Looking for a developer position in the Silicon Valley.'}/>

            <Grid container item xs={12} style={{justifyContent:'center'}}>
              <Grid container item xs={12} md={10}>
                <CardMedia title={'Giving an Ethereum intro class to engineering students - June 2019'}
                           component={'img'}
                           image={ImageLecture}
                           style={{
                             height: '100%',
                             width: '100%',
                             backgroundSize: 'contain',
                             backgroundRepeat: 'no-repeat'
                           }}/>
              </Grid>
            </Grid>
            <Menu list={['Experiences', 'Education', 'Skills']}/>

            {/*<Grid container item xs={12} style={{justifyContent: 'flex-start'}}>*/}
              {/*<Grid item xs={3}/>*/}

              <Grid container item xs={12} md={6} spacing={2}>
                <Title title={'Experiences'}/>
                <Experiences experiences={experiences}/>
                <Title title={'Education'}/>
                <Educations educations={educations}/>
                <Title title={'Skills'}/>
                <Language/>
                <Skills tileData={skills}/>
              </Grid>

            {/*</Grid>*/}
          </Grid>
        </Grid>
      </ThemeProvider>
    </BrowserRouter>
  );
}

App.whyDidYouRender = true;
export default App;
