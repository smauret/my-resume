import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Grid, createMuiTheme, CardContent, Card} from '@material-ui/core/'
import {teal} from '@material-ui/core/colors';
import {ThemeProvider} from '@material-ui/styles';
import ImageLecture from './Assets/sarah-lecture.jpg';
import {Info} from "./Components/Info";
import {Exp} from "./Components/Exp";
import {Skills} from "./Components/Skill";
import {Language} from "./Components/Language";

const whyDidYouRender = require('@welldone-software/why-did-you-render');
whyDidYouRender(React);

const theme = createMuiTheme({
  typography: {
    fontSize: 15,
    fontFamily: 'system-ui',
    color: teal[300]
  },
  palette: {
    primary: {
      main: teal[800]
    },
    secondary: {
      main: teal[300]
    }

  }
});

function App() {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [educations, setEducations] = useState([]);
  const [sticky, setSticky] = useState(true);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/smauret/my-resume/master/public/Assets/Data/Experiences.json').then(response => {
      setExperiences(response.data)
    });
    axios.get('https://raw.githubusercontent.com/smauret/my-resume/master/public/Assets/Data/Skills.json').then(response => {
      setSkills(response.data)
    });
    axios.get('https://raw.githubusercontent.com/smauret/my-resume/master/public/Assets/Data/Educations.json').then(response => {
      setEducations(response.data)
    });
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setSticky(false);
      console.log(window.scrollY)
    } else {
      setSticky(true);
    }
  };
  window.addEventListener('scroll', handleScroll);

  const renderExp = () => {
    return experiences.map(
      (exp, i) => <Exp key={i}
                       title={exp.title}
                       company={exp.company} date={exp.date}
                       location={exp.location}
                       description={exp.description}/>);
  };

  const renderEd = () => {
    return educations.map(
      (ed, i) => <Exp key={i}
                      title={ed.title} courses={ed.courses}
                      school={ed.school} date={ed.date}
                      location={ed.location}
                      description={ed.description}/>);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container elevation={4} style={{backgroundColor: '#3f4240', width: '100%', justifyContent: 'center'}}>

        <Grid style={{width: '100%', height: '100%', margin: '8px'}}>

          <Info sticky={sticky} title={'Sarah MAURET'} description={'Looking for a developer position in the USA.'}/>

          <Grid container spacing={2} style={{
            alignContent: 'center',
            flexDirection: 'column',
            width: '100%',
            margin: '0',
            backgroundColor: 'white',
          }}>

            <div title={'Giving an Ethereum intro class to engineering students - June 2019'}
                 style={{
                   height: '50vh',
                   margin: '30px 0',
                   backgroundSize: 'contain',
                   backgroundImage: `url(${ImageLecture})`,
                   backgroundRepeat: 'no-repeat'
                 }}/>

            <Grid container item xs={12} md={10} lg={8} spacing={2}>
              <Card elevation={0} style={{borderRadius: '0', width: '100%'}}>
                <CardContent>
                  <Grid container item xs={12}>
                    <Language lang={'French (Mother tongue)'} level={5}/>
                    <Language lang={'German (Survivable)'} level={3}/>
                    <Language lang={'English (Daily use)'} level={5}/>
                    <Language lang={'Spanish (Si, Señor)'} level={3}/>
                  </Grid>
                </CardContent>
              </Card>
              {renderEd()}
              {renderExp()}
              <Skills tileData={skills}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

App.whyDidYouRender = true;
export default App;
