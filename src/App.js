import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Grid, createMuiTheme} from '@material-ui/core/'
import {teal} from '@material-ui/core/colors';
import {ThemeProvider} from '@material-ui/styles';
// import Image from './Assets/background-1.jpg';
import {Title} from "./Components/Title";
import {Exp} from "./Components/Exp";

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
  const [exps, setExps] = useState([]);

  useEffect(() => {
    axios.get('/Data.json').then(response => {
      setExps(response.data)
    })
  }, []);

  const renderExp = () => {
    return exps.map((exp, i) => <Exp key={i} title={exp.title} company={exp.company} date={exp.date} location={exp.location}
                                     description={exp.description}/>);

  };

  return (
    <ThemeProvider theme={theme}>
      <Title title={'Sarah MAURET'} description={'Looking for a developer position in the USA.'}/>
      <Grid container spacing={2} style={{
        top: '100px',
        width: '100%',
        margin: '0px',
        backgroundColor: '#dcdcdc',
        padding: '20px'
      }}>
        <Grid container item xs={12} md={5} spacing={2}>
          {renderExp()}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

App.whyDidYouRender = true;
export default App;
