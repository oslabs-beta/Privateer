import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { renderEditInputCell, useGridControlState } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';

const DepServ = (props) => {
  return (
    <Paper elevation={0}
      sx={{margin: 10, padding: 5}} className='Paper_form_container'>  
        <form className='tabs'>
          <p>What is your Dep/Ser Api Version</p>
            <TextField
              required
              id="outlined-required"
              label="Required?"
              value={props.cmApi}
              onChange={(e) => props.changeState({apiVersion: e.target.value, metaName: props.cmMetaName, data: props.cmData, dataNum: props.cmDataNum})}
            />
            <p>What is your DepSer "metadata" name?</p>
            <TextField
              required
              id="outlined-required"
              label="Required?"
              value={props.cmMetaName}
              onChange={(e) => props.changeState({...state, metaName: e.target.value, })}
            />
        </form>
        <form className="file-save-buttons">
          <Button id="create-button" variant="contained">Create</Button>
        </form>
      </Paper>
  )
}

export default DepServ;