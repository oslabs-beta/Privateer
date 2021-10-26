import React from 'react';
import TextField from '@mui/material/TextField';
import { useGridControlState } from '@mui/x-data-grid';


  
  const ConfigMap = () => {
  return (
    <div id='config form'>
        <form id='configMap'>
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
            />
        </form>
    </div>
  )
}

export default ConfigMap;