import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import {
  Divider,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { startCase } from 'lodash';

const NetworkModal = ({ data, pointerLocation, modalOpen, setClosed }) => {
  const style = {
    position: 'absolute',
    top: pointerLocation.y,
    left: pointerLocation.x + 240,
    width: 400,
    bgcolor: 'background.paper',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        aria-labelledby="data-modal"
        aria-describedby="data modal for selected Kubernetes object"
        open={modalOpen}
        onClose={setClosed}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          invisible: true,
        }}
      >
        <Grow in={modalOpen} style={{ transformOrigin: 'top left' }}>
          <Box sx={style}>
            <Typography
              id="data-modal"
              variant="h5"
              component="h5"
              sx={{ padding: '0.5em' }}
            >
              {data?.name}
            </Typography>
            <Divider />
            {data && (
              <TableContainer>
                <Table
                  sx={{ maxWidth: 400 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableBody>
                    {Object.entries(data).map(([k, v]) => (
                      <TableRow
                        key={k}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {startCase(k)}
                        </TableCell>
                        <TableCell>{v}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        </Grow>
      </Modal>
    </div>
  );
};

export default NetworkModal;
