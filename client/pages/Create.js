import { Container, Typography } from '@mui/material';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ConfigMap from '../components/create/ConfigMap';
import DepServ from '../components/create/DepServ';
import Secret from '../components/create/Secret';
import WebApp from '../components/create/WebApp';
import CenteredTabs from '../components/create/Header';
import { connect } from 'react-redux';

const mapStateToProps = ({ create }) => ({
  //example
  // newLocation: markets.newLocation,
});

const mapDispatchToProps = (dispatch) => ({
  //example
  // setLocation: (location) => dispatch(actions.setNewLocation(location)),
});

const Create = () => {
  return (
    <Container size="sm">
      <Typography component={'span'} variant={'body2'}>
        <CenteredTabs />
        <Router>
          <Switch>
            <Route path="/create/configmap">
              <ConfigMap />
            </Route>
            <Route path="/create/depserv">
              <DepServ />
            </Route>
            <Route path="/create/secret">
              <Secret />
            </Route>
            <Route path="/create/webapp">
              <WebApp />
            </Route>
          </Switch>
        </Router>
      </Typography>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
