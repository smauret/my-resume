import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Grid, createMuiTheme, CardContent, Card} from '@material-ui/core/'
import {teal} from '@material-ui/core/colors';
import {ThemeProvider} from '@material-ui/styles';
// import Image from './Assets/background-1.jpg';
import {Title} from "./Components/Title";
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
      <div>
        <Title sticky={sticky} title={'Sarah MAURET'} description={'Looking for a developer position in the USA.'}/>

        <Grid container spacing={2} style={{
          alignContent: 'center',
          flexDirection: 'column',
          width: '100%',
          margin: '0',
          backgroundColor: '#dcdcdc',
          padding: '20px'
        }}>
          <Grid container item xs={12} md={8} lg={5} spacing={2}>
            <Grid item xs={12}>
              <Card elevation={0} style={{borderRadius: '0', width: '100%'}}>
                <CardContent>
                  <Grid container item xs={12}>
                    <Language lang={'French'} level={5}/>
                    <Language lang={'English'} level={5}/>
                    <Language lang={'German'} level={3}/>
                    <Language lang={'Spanish'} level={3}/>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            {renderEd()}
            {renderExp()}
          </Grid>
          <Grid container item xs={12} md={8} lg={5} spacing={2}>
            <Skills tileData={skills}/>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

App.whyDidYouRender = true;
export default App;
