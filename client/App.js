import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider, Box } from '@mui/material';
import { purple } from '@mui/material/colors';
import Monitor from './pages/Monitor';
import Layout from './components/Layout';
import Create from './pages/Create';
import Test from './pages/Test';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#262626',
    },
    secondary: purple,
  },
});

const App = () => {
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
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
