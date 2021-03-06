import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import MyBucket from './my-bucket';
import MyWall from './my-wall';
import RegistrationPage from './registration-page';
import NotFoundRoute from './not-found-route';
import {refreshAuthToken} from '../actions/auth';

import './style.css';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegistrationPage} />        
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/my-bucket" component={MyBucket} />
        <Route exact path="/my-wall" component={MyWall} />
        <Route path="*" component={NotFoundRoute} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));