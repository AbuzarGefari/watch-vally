import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddIcon from '@mui/icons-material/Add';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import { palette } from '@mui/system';

import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    NavLink
} from "react-router-dom";

import AddNewProduct from '../../AddNewProduct/AddNewProduct';
import AllOrderManage from '../../AllOrderManage/AllOrderManage';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Pay from '../Pay/Pay';
import ManageProduct from '../ManageProduct/ManageProduct';
import AdminRoute from '../AdminRoute/AdminRoute';
import Header from '../../Header/Header';
import Review from '../Review/Review';
const drawerWidth = 240;

export default function Dashboard() {
    let { path, url } = useRouteMatch();
    const { user,logout,admin}= useAuth()
 

    return (
        <Box sx={{ display: 'flex',bgcolor: 'primary.main' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        <Header></Header>
                      
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItem button>
                    <BookmarkBorderIcon/> <Link to={url}>My Orders</Link>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                     <CreditCardIcon/>   <Link to={`${url}/payment`}>Pay</Link>

                    </ListItem>
                </List>
                <Divider />
                <Divider />
                <List>
                    <ListItem button>
                <ReviewsIcon/>   <Link to={`${url}/review`}>Review</Link>

                    </ListItem>
                </List>
                <Divider />
            {
admin && <Box>
    <List>
                    <ListItem button>
                      <AddIcon/>  <Link to={`${url}/addnewproduct`}>Add New Product</Link>

                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                     <AdminPanelSettingsIcon/>   <Link to={`${url}/makeadmin`}>Make Admin</Link>

                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                      <DoneAllIcon/>  <Link to={`${url}/allorder`}>AllOrderManage</Link>

                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                      <ManageAccountsIcon/>  <Link to={`${url}/manageproducts`}>Manage Product</Link>

                    </ListItem>
                </List>
               
                <Divider />






</Box>


            }
                <Divider />
                <List>
                  {  user.email ?
                    <ListItem button>
                    <LogoutIcon/>  <Link to='/' onClick={logout}>Logout</Link>

                    </ListItem> :  <ListItem button>
                        <Link to='/login'>login</Link>

                    </ListItem> }
                </List>
                <Divider />
        

            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/addnewproduct`}>
                        <AddNewProduct></AddNewProduct>
                    </AdminRoute>
                    
                    <AdminRoute path={`${path}/allorder`}>
                        <AllOrderManage></AllOrderManage>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}