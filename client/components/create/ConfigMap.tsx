import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { renderEditInputCell, useGridControlState } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';


interface ConfigMapsInterface {
  cmApi: string;
  cmMetaName: string;
  cmDataNum: number;
  cmData: any[];
  cmState: {};
  changeState: (newState: any) => void; 
};

interface ConfigFileInterface {
  apiVersion: string;
  kind: string;
  metaData: {};
  data: any;
};

const ConfigMap: React.FC <ConfigMapsInterface> = ({ 
  cmApi, 
  cmMetaName, 
  cmDataNum, 
  cmData, 
  cmState, 
  changeState 
}) => {
  const handleClick = window.electron.ipcRenderer.chooseDir;
  const configFileGen = () => {
    const configFile: ConfigFileInterface = {
      apiVersion: cmApi,
      kind: "ConfigMap",
      metaData: {
        name: cmMetaName
      },
      data: {}
    }
    for (let i = 0; i < cmDataNum; i++) {
      configFile.data[cmData[i][0]] = cmData[i][1];
    }
    return configFile;
  }
  const multiFields = [];

  for (let i = 0; i < cmDataNum; i++) {
    multiFields.push(
      <div key={i} className='data'>
      <p> ConfigMap Data Key/Value Pair {i + 1} </p>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Data Key"
          value={cmData[i][0]}
          sx={{width: '125px', marginRight: '10px'}}
          onChange={(e) => {
            cmData[i][0] = e.target.value;
            changeState({...cmState, data: cmData})}
          }
        />
        <TextField
          required
          id="outlined-required"
          label="Data Value"
          value={cmData[i][1]}
          sx={{width: '125px', marginLeft: '10px'}}
          onChange={(e) => { 
            cmData[i][1] = e.target.value;
            changeState({...cmState, data: cmData})}
          }
        />
      </div>
      </div>
    );
  }

    return (
      <Paper elevation={0} sx={{margin: 10, padding: 5}} className='Paper_form_container'>  
        <form className='tabs'>
          <p>"apiVersion:"</p>
          <TextField
            required
            id="outlined-required"
            label="Required?"
            value={cmApi}
            onChange={(e) => changeState({...cmState, apiVersion: e.target.value,})}        
          />
          <p>Metadata "name:"</p>
          <TextField
            required
            id="outlined-required"
            label="Required?"
            value={cmMetaName}
            onChange={(e) => changeState({...cmState, metaName: e.target.value,})}
          />
          <p>How many "data" key/value pairs?</p>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            value={cmDataNum}
            InputLabelProps={{shrink: true}}
            InputProps={{ inputProps: { min: 1, max: 10 } }}
            sx={{width: '200px'}}
            onChange={(e) => changeState({...cmState, dataNum: e.target.value,})}
          />
          {multiFields}
        </form>
        <form className="file-save-buttons">
          <Button id="create-button" variant="contained"
          onClick={() => { 
            const obj = configFileGen();
            handleClick('configMap', obj);
            changeState({
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
              });
            }
          }>
            Create
        </Button>
        </form>
    </Paper>
  )
};

export default ConfigMap;