import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
// import { renderEditInputCell, useGridControlState } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
// import { V1SubjectAccessReviewStatus } from '@kubernetes/client-node';
// import Box from '@mui/material/Box';
// import { spacing } from '@mui/system';


interface ServiceInterface {
  servApi: string;
  servMetaName: string;
  servAppName: number;
  servPort: number;
  servTargetPort: number;
  servState: {};
  servChangeState: (newState: {}) => void; 
};

interface ServFileInterface {
  apiVersion: string;
  kind: string;
  metaData: {};
  spec: {};
};

const Service: React.FC <ServiceInterface> = ({
  servApi,
  servMetaName,
  servAppName,
  servPort,
  servTargetPort,
  servState,
  servChangeState
}) => {

  const servHandleClick = window.electron.ipcRenderer.chooseDir;
    const servFileGen = () => {
      const servFile: ServFileInterface = {
        apiVersion: servApi,
        kind: "Service",
        metaData: {
          name: servMetaName
        },
        spec: {
          selector: {
            app: servAppName
          },
          ports: [
            {
            protocal: 'TCP',
            port: Number(servPort),
            targetPort: Number(servTargetPort),
            }
          ] 
        },
      }
      return servFile;
    }

  return (
  <Paper elevation={0} className='Paper_form_container'>  
    <form className='tabs'>
      <p>"apiVersion:"</p>
      <TextField
        required
        id="outlined-required"
        label="Value"
        value={servApi}
        onChange={(e) => servChangeState({...servState, apiVersion: e.target.value})}   
      />
      <p>Metadata "name:"</p>
      <TextField
        required
        id="outlined-required"
        label="Value"
        value={servMetaName}
        onChange={(e) => servChangeState({...servState, metaName: e.target.value})}
      />
      <p>App "name:"</p>
      <TextField
        required
        id="outlined-required"
        label="Value"
        value={servAppName}
        onChange={(e) => servChangeState({...servState, appName: e.target.value})}
      />
      <p>"port:"</p>
      <TextField
        id="outlined-required"
        label="Value"
        value={servPort}
        onChange={(e) => servChangeState({...servState, port: e.target.value})}
      />
      <h4>"targetPort:"</h4>
      <TextField
        required
        id="outlined-required"
        label="Value"
        value={servTargetPort}
        onChange={(e) => servChangeState({...servState, targetPort: e.target.value})}
      />
    </form>
      <form className="file-save-buttons">
        <Button id="create-button" variant="contained"
          onClick={() => { 
            const servObj = servFileGen();
            servHandleClick('service', servObj);
            servChangeState({
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