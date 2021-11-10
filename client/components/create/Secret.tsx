import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { renderEditInputCell, useGridControlState } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';

interface SecretInterface {
  secApi: string;
  secMetaName: string;
  secDataNum: number;
  secData: any[];
  secType: string;
  secState: Object;
  changeState: (newState: any) => void; 
};

interface SecretFileInterface {
  apiVersion: string;
  kind: string;
  type: string;
  metaData: Object;
  data: any;
};


  const Secret: React.FC <SecretInterface> = ({
    secApi,
    secMetaName,
    secDataNum,
    secData,
    secType,
    secState,
    changeState
  }) => {
    const handleClick = window.electron.ipcRenderer.chooseDir;
    const secretFileGen = () => {
      const secretFile: SecretFileInterface = {
        apiVersion: secApi,
        kind: "Secret",
        type: secType,
        metaData: {
          name: secMetaName,
        },
        data: {},
      }
      for (let i = 0; i < secDataNum; i++) {
        secretFile.data[secData[i][0]] = secData[i][1]
      }
      return secretFile
    }
    const multiFields = []
    for (let i = 0; i < secDataNum; i++) {
      console.log()
      multiFields.push(<div key={i} className='data'>
        <p> "Secret" Data Key/Value Pair {i + 1} </p>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Data Key"
            value={secData[i][0]}
            sx={{width: '125px', marginRight: '10px'}}
            onChange={(e) => {
              secData[i][0] = e.target.value;
              changeState(
                { ...secState, data: secData,})}
            }
          />
          <TextField
            required
            id="outlined-required"
            label="Data Value"
            value={secData[i][1]}
            sx={{width: '125px', marginLeft: '10px'}}
            onChange={(e) => { 
              secData[i][1] = e.target.value;
              changeState({...secState, data: secData,})}
            }
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
            value={secApi}
            onChange={(e) => changeState({...secState, apiVersion: e.target.value,})}   
          />
          <p>What is your "Secret metadata" name?</p>
          <TextField
            required
            id="outlined-required"
            label="Required?"
            value={secMetaName}
            onChange={(e) => changeState({...secState, metaName: e.target.value,})}
          />
          <p>What is your "Secret" type?</p>
          <TextField
            required
            id="outlined-required"
            label="Required?"
            value={secType}
            onChange={(e) => changeState({...secState, type: e.target.value})}
          />
          <p>How many "Secret data" key/value pairs?</p>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            value={secDataNum}
            InputLabelProps={{shrink: true}}
            InputProps={{ inputProps: { min: 1, max: 10 } }}
            sx={{width: '200px'}}
            onChange={(e) => changeState({...secState, dataNum: e.target.value,})}
          />
        <h4>"Secret" Data</h4>
          {multiFields}
        </form>
        <form className="file-save-buttons">
          <Button id="create-button" variant="contained" 
            onClick={() => { 
              const obj = secretFileGen()
              handleClick('secret', obj),
              changeState({
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
    );
}

export default Secret;