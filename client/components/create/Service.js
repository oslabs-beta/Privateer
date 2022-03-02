import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function Service(props) {
  const servHandleClick = window.electron.ipcRenderer.chooseDir;
  const servFileGen = () => {
    const servFile = {
      apiVersion: 'v1',
      kind: 'Service',
      metadata: {
        name: props.servMetaName,
      },
      spec: {
        selector: {
          app: props.servAppName,
        },
        ports: [
          {
            protocol: 'TCP',
            port: Number(props.servPort),
            targetPort: Number(props.servTargetPort),
          },
        ],
      },
    };
    return servFile;
  };

  return (
    <Paper elevation={0} className="Paper_form_container">
      <form title="service" className="tabs">
        <p>Service Name: </p>
        <TextField
          required
          id="outlined-required"
          label="Required"
          value={props.servMetaName}
          onChange={(e) =>
            props.servChangeState({
              ...props.servState,
              metaName: e.target.value,
            })
          }
        />
        <p>Selector: </p>
        <TextField
          required
          id="outlined-required"
          label="Required"
          value={props.servAppName}
          onChange={(e) =>
            props.servChangeState({
              ...props.servState,
              appName: e.target.value,
            })
          }
        />
        <p>Port: </p>
        <TextField
          required
          id="outlined-required"
          label="Required"
          value={props.servPort}
          onChange={(e) =>
            props.servChangeState({ ...props.servState, port: e.target.value })
          }
        />
        <p>Target Port: </p>
        <TextField
          required
          id="outlined-required"
          label="Required"
          value={props.servTargetPort}
          onChange={(e) =>
            props.servChangeState({
              ...props.servState,
              targetPort: e.target.value,
            })
          }
        />
      </form>
      <form className="file-save-buttons">
        <Button
          id="create-button"
          variant="contained"
          onClick={() => {
            const servObj = servFileGen();
            servHandleClick('service', servObj);
            props.servChangeState({
              metaName: '',
              appName: '',
              port: '',
              targetPort: '',
            });
          }}
        >
          create
        </Button>
      </form>
    </Paper>
  );
}

export default Service;
