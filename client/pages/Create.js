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

  const [cmState, setCmState] = useState({apiVersion: "", metaName: "", data:[[],[],[],[],[],[],[],[],[],[]], dataNum: 0});
  const [secState, setSecState] = useState({apiVersion: "", metaName: "", data:[[],[],[],[],[],[],[],[],[],[]], dataNum: 0});
  const [depSerState, setDepSerState] = useState({apiVersion: "", metaName:"", appName:"", replicas:0, imageName:'', imageTag:'latest', port:''});

  return (
    <Container size="sm" title="create-container" className='create_container'>
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
              <DepServ 
                depSerApi={depSerState.apiVersion}
                depSerMetaName={depSerState.metaName}
                depSerAppName={depSerState.appName}
                depSerReplicas={depSerState.replicas}
                depSerImageName={depSerState.imageName}
                depSerImageTag={depSerState.imageTag}
                
              />
            </Route>
            <Route path="/create/secret">
              <Secret 
              secApi={secState.apiVersion} 
              secMetaName={secState.metaName} 
              secDataNum={secState.dataNum}   
              secData={secState.data}
              changeState={setSecState}
              />
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
