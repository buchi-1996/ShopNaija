import React, { Fragment, useContext} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PhonelinkSetup from '@material-ui/icons/PhonelinkSetup';
import { Badge, Button, Card } from '@material-ui/core';
import { Link } from 'react-router-dom'
import NotificationsIcon from '@material-ui/icons/Notifications';
import {
  Dashboard,
  DnsRounded,
  AccountCircle,
  People,
  PermMediaOutlined,
  Public,
  SettingsApplications,
  SettingsEthernet,
  SettingsInputComponent,
  SearchOutlined
} from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppState from '../context/AppState';


const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  drawer: (darkMode) => ({
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },

    '& .MuiPaper-root': {
      background: darkMode ?'#1d1b27' : 'white',
      color: darkMode ? '#fff' : '#1d1b27',
      transition: 'all .5s ease'
    },
    '& .MuiSvgIcon-root ': {
      color: darkMode  ? '#fff' : 'rgba(0, 0, 0, 0.54)'
    }
  }),
  appBar: {
    background: theme.palette.success.main,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },

  Card: {
    width: '35vw',
    position: 'relative',
    overflowX: 'hidden',
    display: 'flex',
    height: '45px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

  },

  Input: {
    flexGrow: 1,
    marginRight: '20px',
    border: 'none',
    background: 'transparent',
    outline: 'none',
    fontSize: 16
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  logo: {
    padding: theme.spacing(2),
    minHeight: 62,
    fontWeight: 'bold',
    color: theme.palette.success.main
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flex: 1,
    // background: '#1D1B27',
    height: '100vh'
  },
  topIcons: {
    marginLeft: 'auto',
  },
  brand: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  Button: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
}));


const drawerOptions = [
  { text: 'Men', icon: <Dashboard />, path: '/men' },
  { text: 'Women', icon: <SettingsApplications /> },
  { text: 'Children', icon: <People /> },
  { text: 'Premium', icon: <DnsRounded /> },
  { text: 'Storage', icon: <PermMediaOutlined /> },
  { text: 'Hosting', icon: <Public /> },
  { text: 'Functions', icon: <SettingsEthernet /> },
  { text: 'ML Kits', icon: <SettingsInputComponent /> },
  { text: 'Testing', icon: <PhonelinkSetup /> },
  { text: 'Authentication', icon: <People /> },
  { text: 'Database', icon: <DnsRounded /> },
  { text: 'Storage', icon: <PermMediaOutlined /> },
  { text: 'Hosting', icon: <Public /> },
  { text: 'Functions', icon: <SettingsEthernet /> },
  { text: 'ML Kits', icon: <SettingsInputComponent /> },
  { text: 'Test Lab', icon: <PhonelinkSetup /> },
];

function ResponsiveDrawer(props) {
  const { window } = props;
  const { toggleDrawer, open, dispatch, darkMode, inCart } = useContext(AppState);
  const classes = useStyles(darkMode);

  const theme = useTheme();


  

  const drawer = (
    <Fragment>
      <Link to='/'className={classes.logo} style={{textDecoration: 'none'}}>
      <Typography  variant="h6" noWrap>Shop Naija</Typography>
      </Link>
      <Divider />
      <List>
        {drawerOptions.map(({ icon, text, path }, index) => (
          <Fragment key={index}>
            <Link style={{ textDecoration: 'none', color: 'unset' }} to={`${path}/${index}`}>
              <ListItem button >
                <ListItemIcon color='primary'>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
            {/* <Divider /> */}
          </Fragment>
        ))}
      </List>
    </Fragment>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{ background: darkMode && '#1d1b27' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/' className={classes.brand} style={{textDecoration: 'none', color: '#fff'}}>
          <Typography  variant="h6">Shop Naija</Typography>
          </Link>
          <form>
            <Card className={classes.Card}>
              <IconButton>
                <SearchOutlined />
              </IconButton>
              <input type="search" placeholder="search..." className={classes.Input} />
            </Card>
          </form>
          <div className={classes.topIcons}>
            <Button variant='outlined' size='small' color="inherit" className={classes.Button} onClick={() => dispatch({ type: 'TOGGLE_DARKMODE' })}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Button>
            <Link to='/cart' style={{color: "inherit"}}>
            <IconButton  aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={inCart.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            </Link>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders" >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="js">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={open}
            onClose={toggleDrawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>

  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;