import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function Secret(props) {
  const handleClick = window.electron.ipcRenderer.chooseDir;
  const secretFileGen = () => {
    const secretFile = {
      apiVersion: 'v1',
      kind: 'Secret',
      type: props.secType,
      metadata: {
        name: props.secMetaName,
      },
      data: {},
    };
    for (let i = 0; i < props.secDataNum; i++) {
      secretFile.data[props.secData[i][0]] = btoa(props.secData[i][1]);
    }
    return secretFile;
  };
  const multiFields = [];
  for (let i = 0; i < props.secDataNum; i++) {
    multiFields.push(
      <div key={i} className="data">
        <p>Key/value pair {i + 1}</p>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Data Key"
            value={props.secData[i][0]}
            sx={{ width: '125px', marginRight: '10px' }}
            onChange={(e) => {
              props.secData[i][0] = e.target.value;
              props.changeState({ ...props.secState, data: props.secData });
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Data Value"
            value={props.secData[i][1]}
            sx={{ width: '125px', marginLeft: '10px' }}
            onChange={(e) => {
              props.secData[i][1] = e.target.value;
              props.changeState({ ...props.secState, data: props.secData });
            }}
          />
        </div>
      </div>
    );
  }
  return (
    <Paper
      elevation={0}
      sx={{ margin: 10, padding: 5 }}
      className="Paper_form_container"
    >
      <form title="secret" className="tabs">
        <p>Name: </p>
        <TextField
          required
          id="outlined-required"
          label="Required?"
          value={props.secMetaName}
          onChange={(e) =>
            props.changeState({ ...props.secState, metaName: e.target.value })
          }
        />
        <p>Type: </p>
        <TextField
          required
          id="outlined-required"
          label="Required?"
          value={props.secType}
          onChange={(e) =>
            props.changeState({ ...props.secState, type: e.target.value })
          }
        />
        <p># of Key/value Pairs: </p>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          value={props.secDataNum}
          InputLabelProps={{ shrink: true }}
          InputProps={{ inputProps: { min: 1, max: 10 } }}
          sx={{ width: '200px' }}
          onChange={(e) =>
            props.changeState({ ...props.secState, dataNum: e.target.value })
          }
        />
        {multiFields}
      </form>
      <form className="file-save-buttons">
        <Button
          id="create-button"
          variant="contained"
          onClick={() => {
            const obj = secretFileGen();
            handleClick('secret', obj);
            props.changeState({
              metaName: '',
              data: [
                ['', ''],
                ['', ''],
                ['', ''],
                ['', ''],
                ['', ''],
                ['', ''],
                ['', ''],
                ['', ''],
                ['', ''],
                ['', ''],
              ],
              dataNum: 0,
              type: 'Opaque',
            });
          }}
        >
          create
        </Button>
      </form>
    </Paper>
  );
}

export default Secret;
