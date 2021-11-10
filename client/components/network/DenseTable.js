import React, { useState } from 'react';
import {
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Collapse,
  Typography,
  IconButton,
} from '@mui/material';
import { startCase } from 'lodash';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box } from '@mui/system';

const DenseTable = ({ nodeData }) => {
  return (
    <TableContainer>
      <Table sx={{ maxWidth: 500 }} size="small" aria-label="a dense table">
        <TableBody>
          {Object.entries(nodeData).map(([k, v]) => {
            if (typeof v === 'object') {
              const [open, setOpen] = useState(false);
              return (
                <>
                  <TableRow
                    key={k}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell>{/[.\/]/.test(k) ? k : startCase(k)}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        sx={{ padding: 0 }}
                        onClick={() => setOpen(!open)}
                      >
                        {open ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={2}
                    >
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 0, border: 0 }}>
                          <DenseTable nodeData={v} />
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </>
              );
            } else {
              return (
                <TableRow
                  key={k}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {/[.\/]/.test(k) ? k : startCase(k)}
                  </TableCell>
                  <TableCell>{v}</TableCell>
                </TableRow>
              );
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DenseTable;
