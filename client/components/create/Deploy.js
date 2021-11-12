import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { renderEditInputCell, useGridControlState } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';

const Deploy = (props) => {
  const handleClick = window.electron.ipcRenderer.chooseDir;
  const deployFileGen = () => {
    const deployFile = {
      apiVersion: props.deployApi,
      kind: 'Deployment',
      metaData: {
        name: props.deployMetaName,
        labels: {
          app: props.deployAppName,
        },
      },
      spec: {
        replicas: Number(props.deployReplicas),
        selector: {
          matchLabels: {
            app: props.deployAppName,
          },
        },
        template: {
          metaData: {
            labels: {
              app: props.deployAppName,
            },
          },
          spec: {
            containers: [
              {
                name: props.deployContainer,
                image: props.deployImage,
                ports: [
                  {
                    containerPort: Number(props.deployPort),
                  },
                ],
              },
            ],
          },
        },
      },
    };
    return deployFile;
  };
  return (
    <Paper
      elevation={0}
      sx={{ margin: 10, padding: 5 }}
      className="Paper_form_container"
    >
      <form title="deployment" className="tabs">
        <p>Enter your "apiVersion:" value</p>
        <TextField
          required
          id="outlined-required"
          label="Required?"
          value={props.deployApi}
          onChange={(e) =>
            props.changeState({
              ...props.deployState,
              apiVersion: e.target.value,
            })
          }
        />
        <p>Enter Metadata "name:" value</p>
        <TextField
          required
          id="outlined-required"
          label="Required?"
          value={props.deployMetaName}
          onChange={(e) =>
            props.changeState({
              ...props.deployState,
              metaName: e.target.value,
            })
          }
        />
        <p>Enter your "app:" name</p>
        <TextField
          required
          id="outlined-required"
          label="Required?"
          value={props.deployAppName}
          onChange={(e) =>
            props.changeState({ ...props.deployState, appName: e.target.value })
          }
        />
        <p>Enter number of replica Pods you would like</p>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          value={props.deployReplicas}
          InputLabelProps={{ shrink: true }}
          InputProps={{ inputProps: { min: 1, max: 10 } }}
          sx={{ width: '200px' }}
          onChange={(e) =>
            props.changeState({
              ...props.deployState,
              replicas: e.target.value,
            })
          }
        />
        <p>Enter the container's name (take one from docker)</p>
        <TextField
          required
          id="outlined-required"
          label="Required?"
          value={props.deployContainer}
          onChange={(e) =>
            props.changeState({
              ...props.deployState,
              containerName: e.target.value,
            })
          }
        />
        <p>Enter your image name and tag (can be found in DockerHub)</p>
        <TextField
          required
          id="outlined-required"
          label="Required?"
          value={props.deployImage}
          onChange={(e) =>
            props.changeState({ ...props.deployState, image: e.target.value })
          }
        />
        <p>Enter the port number you would you like to run your container on</p>
        <TextField
          required
          id="outlined-required"
          label="Required?"
          value={props.deployPort}
          onChange={(e) =>
            props.changeState({ ...props.deployState, port: e.target.value })
          }
        />
      </form>
      <form className="file-save-buttons">
        <Button
          id="create-button"
          variant="contained"
          onClick={() => {
            const obj = deployFileGen();
            handleClick(props.deployAppName, obj);
            props.changeState({
              apiVersion: '',
              metaName: '',
              appName: '',
              replicas: 0,
              image: '',
              port: '',
              containerName: '',
            });
          }}
        >
          create
        </Button>
      </form>
    </Paper>
  );
};

export default Deploy;
