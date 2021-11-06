import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { renderEditInputCell, useGridControlState } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';

  const Secret = (props) => {
    const multiFields = []
    for (let i = 0; i < props.secDataNum; i++) {
      console.log()
      multiFields.push(<div key={i} className='data'>
        <p> "Secret" Data Key/Value Pair {i + 1} </p>
          <div>
            <TextField
            required
            id="outlined-required"
            label="Data Key"
            value={props.secData[i][0]}
            sx={{width: '125px', marginRight: '10px'}}
            onChange={(e) => { props.secData[i][0] = e.target.value;
              props.changeState({apiVersion: props.secApi, metaName: props.secMetaName, data: props.secData , dataNum: props.secDataNum})}}
            />
            <TextField
            required
            id="outlined-required"
            label="Data Value"
            value={props.secData[i][1]}
            sx={{width: '125px', marginLeft: '10px'}}
            onChange={(e) => { props.secData[i][1] = e.target.value;
              props.changeState({apiVersion: props.secApi, metaName: props.secMetaName, data: props.secData , dataNum: props.secDataNum})}}
            />
          </div>
        </div>)
    }
    return (
    <Paper elevation={0} sx={{margin: 10, padding: 5}} className='Paper_form_container'>  
      <form className='tabs'>
        <p>What is "Secret" your Api Version</p>
        <TextField
          required
          id="outlined-required"
          label="Required?"
          value={props.secApi}
          onChange={(e) => props.changeState({apiVersion: e.target.value, metaName: props.secMetaName, data: props.secData, dataNum: props.secDataNum})}   
        />
        <p>What is your "Secret metadata" name?</p>
        <TextField
          required
          id="outlined-required"
          label="Required?"
          value={props.secMetaName}
          onChange={(e) => props.changeState({apiVersion: props.secApi, metaName: e.target.value, data: props.secData, dataNum: props.secDataNum})}
              />
            <p>How many "Secret data" key/value pairs?</p>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              value={props.secDataNum}
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{ inputProps: { min: 1, max: 10 } }}
              sx={{width: '200px'}}
              onChange={(e) => props.changeState({dataNum: e.target.value, metaName: props.secMetaName, apiVersion: props.secApi, data: props.secData})}
            />
          <h4>"Secret" Data</h4>
            {multiFields}
        </form>
          <form className="file-save-buttons">
            <Button id="create-button" variant="contained">Create</Button>
          </form>
    </Paper>
  )
}

export default Secret;