import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
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
          <Redirect exact from="/" to="/create/deploy" />
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route exact path="/monitor">
              <Monitor />
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
