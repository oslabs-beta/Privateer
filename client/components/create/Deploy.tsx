import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { renderEditInputCell, useGridControlState } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';

interface deployInterface {
  deployApi: string;
  deployMetaName: string;
  deployAppName: string;
  deployReplicas: number;
  deployImage: string;
  deployContainer: string;
  deployPort: number;
  deployState: {};
  changeState: (newState: {}) => void; 
};

interface deployFileInterface {
  apiVersion: string;
  kind: string;
  metaData: {};
  spec: {};
};


const Deploy: React.FC<deployInterface> = ({ 
  deployApi, 
  deployMetaName, 
  deployAppName, 
  deployReplicas, 
  deployImage, 
  deployContainer, 
  deployPort, 
  deployState, 
  changeState
}) => {
  const handleClick = window.electron.ipcRenderer.chooseDir;
  const deployFileGen = () => {
    const deployFile: deployFileInterface = {
      apiVersion: deployApi,
      kind: "Deployment",
      metaData: {
        name: deployMetaName,
        labels: {
          app: deployAppName,
        }
      },
      spec: {
        replicas: Number(deployReplicas),
        selector: {
          matchLabels: {
            app: deployAppName,
          },
        },
        template: {
          metaData: {
            labels: {
              app: deployAppName,
            },
          },
          spec: {
            containers: [
              {
                name: deployContainer,
                image: deployImage,
                ports: [{
                  containerPort: Number(deployPort),
                }],
              },
            ],
          },
        },
      },
    }
    return deployFile
  }
  return (
    <Paper elevation={0}
      sx={{margin: 10, padding: 5}} className='Paper_form_container'>  
        <form className='tabs'>
          <p>What is your Deployment Api Version</p>
          <TextField
            required
            id="outlined-required"
            label="Required?"
            value={deployApi}
            onChange={(e) => changeState({...deployState, apiVersion: e.target.value,})}
          />
          <p>What is your Deployment "metadata" name?</p>
          <TextField
            required
            id="outlined-required"
            label="Required?"
            value={deployMetaName}
            onChange={(e) => changeState({...deployState, metaName: e.target.value})}
          />
          <p>What is part of your app are you deploying?</p>
          <TextField
            required
            id="outlined-required"
            label="Required?"
            value={deployAppName}
            onChange={(e) => changeState({...deployState, appName: e.target.value})}
          />
          <p>How many replicas/deployments would you like to make?</p>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            value={deployReplicas}
            InputLabelProps={{shrink: true}}
            InputProps={{ inputProps: { min: 1, max: 10 } }}
            sx={{width: '200px'}}
            onChange={(e) => changeState({...deployState, replicas: e.target.value,})}
          />
          <p>What is the containers name? (take one from docker)</p>
          <TextField
            required
            id="outlined-required"
            label="Required?"
            value={deployContainer}
            onChange={(e) => changeState({...deployState, containerName: e.target.value})}
          />
          <p> What is the image name and tag? (Can be found in DockerHub)</p>
          <TextField
            required
            id="outlined-required"
            label="Required?"
            value={deployImage}
            onChange={(e) => changeState({...deployState, image: e.target.value})}
          />
          <p> What port would you like to run your container on?</p>
          <TextField
            required
            id="outlined-required"
            label="Required?"
            value={deployPort}
            onChange={(e) => changeState({...deployState, port: e.target.value})}
          />     
        </form>
        <form className="file-save-buttons">
          <Button id="create-button" variant="contained" 
            onClick={() => { 
              const obj = deployFileGen();
              handleClick(deployAppName, obj);
              changeState({
                apiVersion: "", 
                metaName:"", 
                appName:"", 
                replicas:0, 
                image:'', 
                port:'', 
                containerName: ''
              });
            }
          }>
            Create
          </Button>
        </form>
      </Paper>
  )
}

export default Deploy;