import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter} from "react-router-dom";
import {
  Grid,
  createMuiTheme,
  CardMedia, Divider,
} from '@material-ui/core/'
import {amber} from '@material-ui/core/colors';
import {ThemeProvider} from '@material-ui/styles';
import ImageLecture from './Assets/sarah-lecture.jpg';
import {Info} from "./Components/Info";
import {Experiences} from "./Components/Exp";
import {Educations} from "./Components/Education";
import {Tldr} from "./Components/Tldr";
import {Menu} from "./Components/Menu";
import {More} from "./Components/More";
import VisibilitySensor from 'react-visibility-sensor'

const whyDidYouRender = require('@welldone-software/why-did-you-render');
whyDidYouRender(React);

const theme = createMuiTheme({
  typography: {
    fontSize: 15,
    fontFamily: 'system-ui',
    color: amber['A700']
  },
  palette: {
    primary: {
      main: amber['A700']
    },
    secondary: {
      main: amber['A400']
    }

  }
});

function App() {
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [visibleComponent, setVisibleComponent] = useState('');

  useEffect(() => {
    axios.get('./Assets/Data/Experiences.json').then(response => {//https://raw.githubusercontent.com/smauret/my-resume/master/public/Assets/Data/Skills.json
      setExperiences(response.data)
    });
    axios.get('./Assets/Data/Skills.json').then(response => {
    });
    axios.get('./Assets/Data/Educations.json').then(response => {
      setEducations(response.data)
    });
  }, []);

  const removeHash = () => {
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
  };

  const onChangeEd = (isVisible) => {
    isVisible && setVisibleComponent('Education')
    removeHash()
  };
  const onChangeEx = (isVisible) => {
    isVisible && setVisibleComponent('Experiences')
    removeHash()
  };

  const onChangeTl = (isVisible) => {
    isVisible && setVisibleComponent('tl;dr')
    removeHash()
  };

  const onChangeMore = (isVisible) => {
    isVisible && setVisibleComponent('More')
    removeHash()
  };

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

            <Grid container item xs={12} style={{justifyContent: 'center'}}>
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
            <Menu list={['Experiences', 'Education', 'More', 'tl;dr']} visibleComponent={visibleComponent} />

            <Grid container item xs={12} md={6} spacing={2} style={{marginTop: '20px'}}>
              <VisibilitySensor onChange={onChangeEx} offset={{bottom:document.documentElement.clientHeight * 0.6}} partialVisibility={true}>
                <Experiences experiences={experiences}/>
              </VisibilitySensor>
              <Divider style={{width:'100%'}}/>
              <VisibilitySensor onChange={onChangeEd} offset={{bottom:document.documentElement.clientHeight * 0.6}} partialVisibility={true}>
                <Educations educations={educations}/>
              </VisibilitySensor>
              <Divider style={{width:'100%'}}/>
              <VisibilitySensor onChange={onChangeMore} offset={{bottom:document.documentElement.clientHeight * 0.6}} partialVisibility={true}>
                <More/>
              </VisibilitySensor>
              <Divider style={{width:'100%'}}/>
              <VisibilitySensor onChange={onChangeTl} offset={{bottom:document.documentElement.clientHeight * 0.6}} partialVisibility={true}>
                <Tldr/>
              </VisibilitySensor>
            </Grid>

          </Grid>
        </Grid>
      </ThemeProvider>
    </BrowserRouter>
  );
}

App.whyDidYouRender = true;
export default App;
