import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

const NetworkModal = ({ data, pointer, open, setClosed }) => {
  const style = {
    position: 'absolute',
    top: pointer.y,
    left: pointer.x,
    transform: 'translate(50%, 0%)',
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
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={setClosed}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          invisible: true,
        }}
      >
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {data?.name}
          </Typography>
          <Divider />
          {data &&
            Object.entries(data).map(([k, v]) => {
              return (
                <Typography
                  key={k}
                  id="transition-modal-description"
                  sx={{ mt: 2 }}
                >
                  {`${k}: ${v}`}
                </Typography>
              );
            })}
        </Box>
      </Modal>
    </div>
  );
};

export default NetworkModal;
