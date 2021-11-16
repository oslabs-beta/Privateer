const path = require('path');
const express = require('express');

const app = express();

// import routers
const clusterRouter = require('./routers/cluster');

// utility middleware
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../dist')));

// use routers
app.use('/api/cluster', clusterRouter);

// serve index
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
});

// 404 handler
app.use((req, res) => res.status(404).send('Page not found!'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const PORT = process.env.PORT || 3070;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
