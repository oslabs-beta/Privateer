import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { renderEditInputCell, useGridControlState } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';

  
  const ConfigMap = (props) => {
    const handleClick = window.electron.ipcRenderer.chooseDir;
    const configFileGen = () => {
      const configFile = {
        apiVersion: props.cmApi,
        kind: "ConfigMap",
        metaData: {
          name: props.cmMetaName,
        },
        data: {},
      }
      for (let i = 0; i < props.cmDataNum; i++) {
        configFile.data[props.cmData[i][0]] = props.cmData[i][1]
      }
      return configFile
    }
    const multiFields = []
    for (let i = 0; i < props.cmDataNum; i++) {
      multiFields.push(<div key={i} className='data'>
        <p> ConfigMap Data Key/Value Pair {i + 1} </p>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Data Key"
            value={props.cmData[i][0]}
            sx={{width: '125px', marginRight: '10px'}}
            onChange={(e) => {
              props.cmData[i][0] = e.target.value;
              props.changeState({...props.cmState, data: props.cmData,})}
            }
          />
          <TextField
            required
            id="outlined-required"
            label="Data Value"
            value={props.cmData[i][1]}
            sx={{width: '125px', marginLeft: '10px'}}
            onChange={(e) => { 
              props.cmData[i][1] = e.target.value;
              props.changeState({...props.cmState, data: props.cmData,})}
            }
          />
        </div>
      </div>)
    }

    return (
      <Paper elevation={0} sx={{margin: 10, padding: 5}}>  
        <form className='tabs'>
          <p>What is your ConfigMap Api Version</p>
          <TextField
            required
            id="outlined-required"
            label="Required?"
            value={props.cmApi}
            onChange={(e) => props.changeState({...props.cmState, apiVersion: e.target.value,})}        
          />
          <p>What is your ConfigMap "metadata" name?</p>
          <TextField
            required
            id="outlined-required"
            label="Required?"
            value={props.cmMetaName}
            onChange={(e) => props.changeState({...props.cmState, metaName: e.target.value,})}
          />
          <p>How many ConfigMap "data" key/value pairs?</p>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            value={props.cmDataNum}
            InputLabelProps={{shrink: true}}
            InputProps={{ inputProps: { min: 1, max: 10 } }}
            sx={{width: '200px'}}
            onChange={(e) => props.changeState({...props.cmState, dataNum: e.target.value,})}
          />
          <h4>Config Map Data</h4>
          {multiFields}
        </form>
        <form className="file-save-buttons">
          <Button id="create-button" variant="contained"
          onClick={() => { 
            const obj = configFileGen()
            handleClick('configMap', obj),
            props.changeState({apiVersion: "", metaName: "", data:[["", ""],["", ""],["", ""],["", ""],["", ""],["", ""],["", ""],["", ""],["", ""],["", ""]], dataNum: 0})}
          }
          >Create</Button>
        </form>
    </Paper>
  )
};

export default ConfigMap;