import React from 'react';
import TextField from '@mui/material/TextField';
import { useGridControlState } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const Secret = () => {
  return (
		<div id='secret'>
			<form id='secret'>
				<p>"apiVersion:"value</p>
          <TextField
						required
						id=""
						label="Ex: v1"
						defaultValue=""
          />
					<p>What is your "metadata" name property value?</p>
						<TextField
							required
							id="outlined-required"
							label="my-name"
							defaultValue=""
						/>
					<p>"type:" Value</p>
						<TextField
							required
							id="outlined-required"
							label="Opaque (default)"
							defaultValue=""
						/>
					<p>"stringData:" Value</p>
						<TextField
							required
							id="outlined-required"
							label="Opaque (default)"
							defaultValue=""
						/>
					<p>"username:" Value</p>
						<TextField
							required
							id="outlined-required"
							label="Opaque (default)"
							defaultValue=""
						/>
					<p>"password:" Value</p>
						<TextField
							required
							id="outlined-required"
							label="Opaque (default)"
							defaultValue=""
						/>
				</form>
		</div>
  )	
};

export default Secret;