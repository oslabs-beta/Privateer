import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function Deploy(props) {
  const handleClick = window.electron.ipcRenderer.chooseDir;
  const deployFileGen = () => {
    const deployFile = {
      apiVersion: 'apps/v1',
      kind: 'Deployment',
      metadata: {
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
          metadata: {
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
        <p>Deployment Name: </p>
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
        <p>Selector: </p>
        <TextField
          required
          id="outlined-required"
          label="Required?"
          value={props.deployAppName}
          onChange={(e) =>
            props.changeState({ ...props.deployState, appName: e.target.value })
          }
        />
        <p>Replicas: </p>
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
        <p>Container Name: </p>
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
        <p>Container Image: </p>
        <TextField
          required
          id="outlined-required"
          label="Required?"
          value={props.deployImage}
          onChange={(e) =>
            props.changeState({
              ...props.deployState,
              imageName: e.target.value,
            })
          }
        />
        <p>Port: </p>
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
              metaName: '',
              appName: '',
              replicas: 0,
              imageName: '',
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
}

export default Deploy;
