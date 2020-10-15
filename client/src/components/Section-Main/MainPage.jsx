import React, { Fragment, useContext } from 'react';
import auth from '../../utilities/auth';
import UserContext from '../../utilities/userContext';
import './css/main-page.css';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import EventIcon from '@material-ui/icons/Event';
import HelpSharpIcon from '@material-ui/icons/HelpSharp';
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';
import KitchenSharpIcon from '@material-ui/icons/KitchenSharp';
import { Box } from '@material-ui/core';
import TollSharpIcon from '@material-ui/icons/TollSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MainPage = props => {
    const {user, setUser} = useContext(UserContext);
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
        <div/>
            <Box 
                height={64}
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                pr={2}>
                <TollSharpIcon color="primary" fontSize="large"/>
            </Box>
            <Divider />
            <List>
                <ListItem button key={'kalendarz'}>
                    <ListItemIcon><EventIcon /></ListItemIcon>
                    <ListItemText primary='Kalendarz' />
                </ListItem>

                <ListItem button key={'sledz-ciaze'}>
                    <ListItemIcon><VisibilitySharpIcon /></ListItemIcon>
                    <ListItemText primary='Śledź ciążę' />
                </ListItem>

                <ListItem button key={'q&a'}>
                    <ListItemIcon><HelpSharpIcon /></ListItemIcon>
                    <ListItemText primary='Q&A' />
                </ListItem>

                <ListItem button key={'dieta'}>
                    <ListItemIcon><KitchenSharpIcon /></ListItemIcon>
                    <ListItemText primary='Dieta' />
                </ListItem>
            </List>
        </div>
    );

  const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Fragment>
            {/* Strona główna
            <button onClick={() => {
                auth.logout(() => {
                    props.history.push("/");
                }) 
            }}
            >Logout</button>

            <button onClick={() => {
                setUser(prev => prev+'a');
            }}>Manipulate context</button>
            {user} */}

        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Moja Ciąża
                </Typography>
                <Box className='avatar'>
                    <img src="/img/default.jpg" className='avatar-img'/>
                    <AccountCircleSharpIcon className='avatar-img' fontSize='large'/>
                    <Typography variant="h6" noWrap>
                        Maja
                    </Typography>
                </Box>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
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
                <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </main>
            </div>            
        </Fragment>
    )
}

export default MainPage;