import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
// import { renderEditInputCell, useGridControlState } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
// import { V1SubjectAccessReviewStatus } from '@kubernetes/client-node';
// import Box from '@mui/material/Box';
// import { spacing } from '@mui/system';

const Service = (props) => {

  const servHandleClick = window.electron.ipcRenderer.chooseDir;
    const servFileGen = () => {
      const servFile = {
        apiVersion: props.servApi,
        kind: "Service",
        metaData: {
          name: props.servMetaName
        },
        spec: {
          selector: {
            app: props.servAppName
          },
          ports: [
            {
            protocal: 'TCP',
            port: Number(props.servPort),
            targetPort: Number(props.servTargetPort),
            }
          ] 
        },
      }
      return servFile
    }

  return (
  <Paper elevation={0} className='Paper_form_container'>  
    <form className='tabs'>
      <p>"apiVersion:"</p>
      <TextField
        required
        id="outlined-required"
        label="Value"
        value={props.servApi}
        onChange={(e) => props.servChangeState({...props.servState, apiVersion: e.target.value})}   
      />
      <p>Metadata "name:"</p>
      <TextField
        required
        id="outlined-required"
        label="Value"
        value={props.servMetaName}
        onChange={(e) => props.servChangeState({...props.servState, metaName: e.target.value})}
      />
      <p>App "name:"</p>
      <TextField
        required
        id="outlined-required"
        label="Value"
        value={props.servAppName}
        onChange={(e) => props.servChangeState({...props.servState, appName: e.target.value})}
      />
      <p>"port:"</p>
      <TextField
        id="outlined-required"
        label="Value"
        value={props.servPort}
        onChange={(e) => props.servChangeState({...props.servState, port: e.target.value})}
      />
      <h4>"targetPort:"</h4>
      <TextField
        required
        id="outlined-required"
        label="Value"
        value={props.servTargetPort}
        onChange={(e) => props.servChangeState({...props.servState, targetPort: e.target.value})}
      />
    </form>
      <form className="file-save-buttons">
        <Button id="create-button" variant="contained"
          onClick={() => { 
            const servObj = servFileGen();
            servHandleClick('service', servObj);
            props.servChangeState({
              apiVersion: '', 
              metaName: '', 
              appName: '', 
              port: '', 
              targetPort: '',
            });
          }
        }>
          Create
        </Button>
      </form>
    </Paper>
  )
}

export default Service;