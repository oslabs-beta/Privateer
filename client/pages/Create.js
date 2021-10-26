import { Container, Typography } from '@mui/material';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ConfigMap from '../components/create/ConfigMap';
import DepServ from '../components/create/DepServ';
import Secret from '../components/create/Secret';
import WebApp from '../components/create/WebApp';
import CenteredTabs from '../components/create/Header'

const Create = () => {
  return (
    <Container size="sm">
      <Typography>
        <CenteredTabs/>
        <Router>
          <Switch>
            <Route path='/create/configmap'>
              <ConfigMap />
            </Route>
            <Route path='/create/depserv'>
              <DepServ />
            </Route>
            <Route path='/create/secret'>
              <Secret />
            </Route>
            <Route path='/create/webapp'>
              <WebApp />
            </Route>
          </Switch>
        </Router>
      </Typography>
    </Container>
  );
};

export default Create;
