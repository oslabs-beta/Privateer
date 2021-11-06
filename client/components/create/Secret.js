import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { renderEditInputCell, useGridControlState } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';

  const Secret = (props) => {
    const handleClick = window.electron.ipcRenderer.chooseDir;
    const secretFileGen = () => {
      const secretFile = {
        apiVersion: props.secApi,
        kind: "Secret",
        type: props.secType,
        metaData: {
          name: props.secMetaName,
        },
        data: {},
      }
      for (let i = 0; i < props.secDataNum; i++) {
        secretFile.data[props.secData[i][0]] = props.secData[i][1]
      }
      return secretFile
    }
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
            onChange={(e) => {
              props.secData[i][0] = e.target.value;
              props.changeState(
                { ...props.secState, data: props.secData,})}
            }
          />
          <TextField
            required
            id="outlined-required"
            label="Data Value"
            value={props.secData[i][1]}
            sx={{width: '125px', marginLeft: '10px'}}
            onChange={(e) => { 
              props.secData[i][1] = e.target.value;
              props.changeState({...props.secState, data: props.secData,})}
            }
          />
          </div>
        </div>)
    }
    return (
    <Paper elevation={0} sx={{margin: 10, padding: 5}}>  
      <form className='tabs'>
        <p>What is "Secret" your Api Version</p>
        <TextField
          required
          id="outlined-required"
          label="Required?"
          value={props.secApi}
          onChange={(e) => props.changeState({...props.secState, apiVersion: e.target.value,})}   
        />
        <p>What is your "Secret metadata" name?</p>
        <TextField
          required
          id="outlined-required"
          label="Required?"
          value={props.secMetaName}
          onChange={(e) => props.changeState({...props.secState, metaName: e.target.value,})}
        />
        <p>What is your "Secret" type?</p>
        <TextField
          required
          id="outlined-required"
          label="Required?"
          value={props.secType}
          onChange={(e) => props.changeState({...props.secState, type: e.target.value})}
        />
        <p>How many "Secret data" key/value pairs?</p>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          value={props.secDataNum}
          InputLabelProps={{shrink: true}}
          InputProps={{ inputProps: { min: 1, max: 10 } }}
          sx={{width: '200px'}}
          onChange={(e) => props.changeState({...props.secState, dataNum: e.target.value,})}
        />
        <h4>"Secret" Data</h4>
        {multiFields}
      </form>
      <form className="file-save-buttons">
        <Button id="create-button" variant="contained" 
          onClick={() => { 
            const obj = secretFileGen()
            handleClick('secret', obj),
            props.changeState({
              apiVersion: "",
              metaName: "", 
              data:[
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""]
              ],
              dataNum: 0, 
              type: 'Opaque'
            })
          }
        }>
          Create
        </Button>
      </form>
    </Paper>
  )
}

export default Secret;