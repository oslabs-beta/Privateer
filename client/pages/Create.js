import { Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ConfigMap from '../components/create/ConfigMap';
import DepServ from '../components/create/DepServ';
import Secret from '../components/create/Secret';
import WebApp from '../components/create/WebApp';
import CenteredTabs from '../components/create/Header';
import * as actions from '../actions/actions';

const Create = props => {
  const [cmState, setCmState] = useState({apiVersion: "", metaName: "", data:[[],[],[],[],[],[],[],[],[],[]], dataNum: 0})
  return (
    <Container size="sm">
      <Typography component={'span'} variant={'body2'}>
        <CenteredTabs />
        <Router>
          <Switch>
            <Route path="/create/configmap">
              <ConfigMap 
                cmApi={cmState.apiVersion} 
                cmMetaName={cmState.metaName} 
                cmDataNum={cmState.dataNum}   
                cmData={cmState.data}
                changeState={setCmState}
              />
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

export default Create;
