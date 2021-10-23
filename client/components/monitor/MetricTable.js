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

// mockup data
const rows = [
  {
    status: 'OK',
    pod: 'POST_1',
    containers: 'post',
    hostIP: '10.1.1.7',
    podIP: '192.168.1.2',
    volume: 'VOL_1',
  },
  {
    status: 'ERROR',
    pod: 'POST_2',
    containers: 'post',
    hostIP: '10.1.1.8',
    podIP: '192.168.1.2',
    volume: 'VOL_1',
  },
  {
    status: 'OK',
    pod: 'POST_3',
    containers: 'post',
    hostIP: '10.1.1.7',
    podIP: '192.168.1.3',
    volume: 'VOL_1',
  },
  {
    status: 'OK',
    pod: 'COMMENT_1',
    containers: 'comment',
    hostIP: '10.1.1.8',
    podIP: '192.168.1.3',
    volume: 'VOL_2',
  },
  {
    status: 'OK',
    pod: 'COMMENT_2',
    containers: 'comment',
    hostIP: '10.1.1.7',
    podIP: '192.168.1.4',
    volume: 'VOL_2',
  },
  {
    status: 'ERROR',
    pod: 'QUERY_1',
    containers: 'query',
    hostIP: '10.1.1.8',
    podIP: '192.168.1.4',
    volume: 'VOL_3',
  },
  {
    status: 'OK',
    pod: 'QUERY_2',
    containers: 'query',
    hostIP: '10.1.1.7',
    podIP: '192.168.1.5',
    volume: 'VOL_3',
  },
  {
    status: 'OK',
    pod: 'MODERATION_1',
    containers: 'moderation',
    hostIP: '10.1.1.8',
    podIP: '192.168.1.5',
    volume: 'VOL_4',
  },
];

const MetricTable = () => {
  return (
    <Card>
      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell align="right">Pod</TableCell>
                <TableCell align="right">Containers</TableCell>
                <TableCell align="right">Host IP</TableCell>
                <TableCell align="right">Pod IP</TableCell>
                <TableCell align="right">Volume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.pod}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.status}
                  </TableCell>
                  <TableCell align="right">{row.pod}</TableCell>
                  <TableCell align="right">{row.containers}</TableCell>
                  <TableCell align="right">{row.hostIP}</TableCell>
                  <TableCell align="right">{row.podIP}</TableCell>
                  <TableCell align="right">{row.volume}</TableCell>
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
