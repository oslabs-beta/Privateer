import { Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ConfigMap from '../components/create/ConfigMap';
import Deploy from '../components/create/Deploy';
import Secret from '../components/create/Secret';
import Service from '../components/create/Service';
import CenteredTabs from '../components/create/Header';
// import * as actions from '../actions/actions';

// Renders the Create container
const Create = props => {

  // Hooks for stateConfigMap.js 
  const [cmState, setCmState] = useState(
    {
      apiVersion: '',
      metaName: '',
      data:[
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', '']
      ],
      dataNum: 0
    }
  );

  // Hooks for Secret.js
  const [secState, setSecState] = useState(
    {
      apiVersion: '',
      metaName: '',
      data:[
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', '']
      ],
      dataNum: 0,
      type: "Opaque"
    }
  );

  // Hooks for DepServ.js
  const [deployState, setDeployState] = useState(
    {
      apiVersion: '',
      metaName: '',
      appName: '',
      replicas: 0,
      imageName:'',
      port:'',
      containerName: ''
    }
  );

  // Hooks for Service.js
  const [servState, setServState] = useState(
    {
      apiVersion: '',
      metaName: '',
      appName: '',
      port: '',
      targetPort: ''
    }
  );

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
                cmState={cmState}
                changeState={setCmState}
              />
            </Route>
            <Route path="/create/secret">
              <Secret 
                secApi={secState.apiVersion} 
                secMetaName={secState.metaName} 
                secDataNum={secState.dataNum}   
                secData={secState.data}
                secType={secState.type}
                secState={secState}
                changeState={setSecState}
              />
            </Route>
            <Route path="/create/deploy">
              <Deploy 
                deployApi={deployState.apiVersion}
                deployMetaName={deployState.metaName}
                deployAppName={deployState.appName}
                deployReplicas={deployState.replicas}
                deployImage={deployState.image}
                deployContainer={deployState.containerName}
                deployPort={deployState.port}
                deployState={deployState}
                changeState={setDeployState}
              />
            </Route>
            <Route path="/create/service">
              <Service
                servApi={servState.apiVersion}
                servMetaName={servState.metaName}
                servAppName={servState.appName}
                servPort={servState.port}
                servTargetPort={servState.targetPort}
                servState={servState}
                servChangeState={setServState}
              />
            </Route>
          </Switch>
        </Router>
      </Typography>
    </Container>
  );
};

export default Create;
