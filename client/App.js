import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import Monitor from './pages/Monitor';
import Layout from './components/Layout';
import Create from './pages/Create';
import Test from './pages/Test';
import Network from './pages/Network';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#262626',
    },
    secondary: lightBlue,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Monitor />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/network">
              <Network />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
