import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './Containers/Home';
import './App.css';
import { fetchProjectsStart } from '@Redux/projects/actions';

function App(props) {
  useEffect(() => {
    props.fetchProjects();
  }, [props])

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Redirect from="*" to='/' />
      </Router>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => (dispatch(fetchProjectsStart())),
})

export default connect(null, mapDispatchToProps)(App);
