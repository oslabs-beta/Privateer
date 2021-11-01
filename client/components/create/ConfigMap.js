import React from 'react';
import TextField from '@mui/material/TextField';
import { renderEditInputCell, useGridControlState } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { spacing } from '@mui/system';


  
  const ConfigMap = (props) => {
    const multiFields = []
    for (let i = 0; i < props.cmDataNum; i++) {
      console.log()
      multiFields.push(<div key={i} className='data'>
        <p> Data Key/Value Pair </p>
          <div>
            <TextField
            required
            id="outlined-required"
            label="Data Key"
            sx={{width: '125px', marginRight: '10px'}}
            />
            <TextField
            required
            id="outlined-required"
            label="Data Value"
            sx={{width: '125px', marginLeft: '10px'}}
            />
          </div>
        </div>)
    }
    return (
    <Paper elevation={0}
      sx={{margin: 10, padding: 5}}>  
        <form id='config-map'>
          <p>What is your Api Version</p>
            <TextField
              required
              id="outlined-required"
              label="Required?"
              defaultValue=""
              
            />
            <p>What is your "metadata" name?</p>
              <TextField
                required
                id="outlined-required"
                label="Required?"
                defaultValue=""
              />
            <p>How many "data" key/value pairs?</p>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{ inputProps: { min: 1, max: 10 } }}
              sx={{width: '200px'}}
              onChange={(e) => {
                props.changeData(Number(e.target.value));
              }}
            />
          <h4>"data:"</h4>
            {multiFields}

            
        </form>
          <div className="file-save-buttons">
            <Button id="save-button" variant="contained">Save</Button>
            <Button id="create-button" variant="contained">Create</Button>
          </div>
    </Paper>
  )
}

export default ConfigMap;