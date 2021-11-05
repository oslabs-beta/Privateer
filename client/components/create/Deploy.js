import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { renderEditInputCell, useGridControlState } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';

const Deploy = (props) => {
  return (
    <Paper elevation={0}
      sx={{margin: 10, padding: 5}}>  
        <form className='tabs'>
          <p>What is your Deployment Api Version</p>
            <TextField
              required
              id="outlined-required"
              label="Required?"
              value={props.deployApi}
              onChange={(e) => props.changeState({apiVersion: e.target.value, metaName: props.deployMetaName, })}
            />
            <p>What is your Deployment "metadata" name?</p>
            <TextField
              required
              id="outlined-required"
              label="Required?"
              value={props.deployMetaName}
              onChange={(e) => props.changeState({...props.deployState, metaName: e.target.value})}
            />
        </form>
        <form className="file-save-buttons">
          <Button id="create-button" variant="contained">Create</Button>
        </form>
      </Paper>
  )
}

export default Deploy;