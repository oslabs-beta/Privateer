import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { renderEditInputCell, useGridControlState } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';

  
  const ConfigMap = (props) => {
    const handleClick = window.electron.ipcRenderer.chooseDir;
    const multiFields = []
    for (let i = 0; i < props.cmDataNum; i++) {
      console.log()
      multiFields.push(<div key={i} className='data'>
      <p> ConfigMap Data Key/Value Pair {i + 1} </p>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Data Key"
          value={props.cmData[i][0]}
           sx={{width: '125px', marginRight: '10px'}}
           onChange={(e) => { props.cmData[i][0] = e.target.value;
             props.changeState({apiVersion: props.cmApi, metaName: props.cmMetaName, data: props.cmData , dataNum: props.cmDataNum})}}
        />
        <TextField
           required
          id="outlined-required"
          label="Data Value"
          value={props.cmData[i][1]}
          sx={{width: '125px', marginLeft: '10px'}}
          onChange={(e) => { props.cmData[i][1] = e.target.value;
            props.changeState({apiVersion: props.cmApi, metaName: props.cmMetaName, data: props.cmData , dataNum: props.cmDataNum})}}
        />
        </div>
      </div>)
    }
    return (
      <Paper elevation={0} sx={{margin: 10, padding: 5}} className='Paper_form_container'>  
        <form className='tabs'>
          <p>What is your ConfigMap Api Version</p>
          <TextField
            required
            id="outlined-required"
            label="Required?"
            value={props.cmApi}
            onChange={(e) => props.changeState({apiVersion: e.target.value, metaName: props.cmMetaName, data: props.cmData, dataNum: props.cmDataNum})}        
          />
          <p>What is your ConfigMap "metadata" name?</p>
          <TextField
            required
            id="outlined-required"
            label="Required?"
            value={props.cmMetaName}
            onChange={(e) => props.changeState({apiVersion: props.cmApi, metaName: e.target.value, data: props.cmData, dataNum: props.cmDataNum})}
          />
          <p>How many ConfigMap "data" key/value pairs?</p>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            value={props.cmDataNum}
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{ inputProps: { min: 1, max: 10 } }}
            sx={{width: '200px'}}
            onChange={(e) => props.changeState({dataNum: e.target.value, metaName: props.cmMetaName, apiVersion: props.cmApi, data: props.cmData})}
          />
          <h4>Config Map Data</h4>
            {multiFields}
        </form>
        <form className="file-save-buttons">
        <Button id="create-button" variant="contained" onClick={handleClick}>Create</Button>
        </form>
    </Paper>
  )
};

export default ConfigMap;