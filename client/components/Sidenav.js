import React from 'react';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import DirectionsBoatFilledTwoToneIcon from '@mui/icons-material/DirectionsBoatFilledTwoTone';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import { Link } from 'react-router-dom';
import logo from '../assets/PrivateerLogo.png';
import k8Logo from '../assets/k8logo.png';

const styles = (theme) => ({
  listItem: {},
});

const drawerWidth = 240;

const Sidenav = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
        '& .MuiListItemText-primary': {
          fontSize: '1.5em',
        },
        '& .MuiSvgIcon-root': {
          fontSize: '1.8em',
        },
      }}
    >
      <Toolbar>
        <img src={logo} alt="kuberm8Logo" width={drawerWidth - 20} height='140' />
      </Toolbar>
      <Divider />
      <List>
        <ListItem
          button
          component={Link}
          to="/create/configmap"
          className={styles.listItem}
        >
          <ListItemIcon>
            <DirectionsBoatFilledTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Create" />
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <AssessmentTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Monitor" />
        </ListItem>
        <ListItem button component={Link} to="/network">
          <ListItemIcon>
            <ShareTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Network" />
        </ListItem>
        <ListItem button component={Link} to="/test">
          <ListItemIcon>
            <LocalFireDepartmentTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Test" />
        </ListItem>
      </List>
      <Toolbar>
        <img
          src={k8Logo}
          alt="logo"
          width={drawerWidth - 60}
          style={{
            opacity: 0.1,
            transform: 'rotate(-20deg)',
          }}
        />
      </Toolbar>
    </Drawer>
  );
};

export default Sidenav;
