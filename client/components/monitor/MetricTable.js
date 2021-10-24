import React from 'react';
import {
  Paper,
  Card,
  CardContent,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { startCase } from 'lodash';

const MetricTable = ({ data }) => {
  return (
    <Card>
      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {data &&
                  Object.keys(data[0]).map((key) => (
                    <TableCell key={key}>{startCase(key)}</TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {/* <TableCell component="th" scope="row">
                    {row.status}
                  </TableCell> */}
                    {Object.values(row).map((cell, i) => (
                      <TableCell key={i}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default MetricTable;
