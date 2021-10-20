import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import { createTheme, ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';

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
        <h1>hi world</h1>
        <Sidenav />
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/create"></Route>
          <Route path="/test"></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
