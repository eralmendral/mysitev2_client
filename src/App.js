import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { fetchProjectsStart } from '@Redux/projects/actions';
import { fetchExperienceStart } from '@Redux/experience/actions';

import Home from './Containers/Home';
import Project from '@Components/Projects/Project';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import { MaterialThemeOverrides } from './config/material.theme';

const theme = createMuiTheme({
  overrides: MaterialThemeOverrides,
  palette: {
    primary: {
      main: '#b50e3b',
      light: '#735a3c',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#735a3c',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App(props) {
  useEffect(() => {
    props.fetchProjects();
    props.fetchExperience();
  }, [props])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ToastContainer />
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/projects/:id" component={Project} />
          <Redirect from="*" to='/' />
        </Router>
      </div>
    </ThemeProvider>

  );
}


const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => (dispatch(fetchProjectsStart())),
  fetchExperience: () => (dispatch(fetchExperienceStart())),
})

export default connect(null, mapDispatchToProps)(App);
