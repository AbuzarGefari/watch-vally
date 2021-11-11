import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddNewProduct from './components/AddNewProduct/AddNewProduct';
import AllOrderManage from './components/AllOrderManage/AllOrderManage';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import DetailsService from './components/DetailsProduct/DetailsProduct';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Login/Register/Register';
import MoreProduct from './components/MoreProduct/MoreProduct';
import MyOrders from './components/MyOrders/MyOrders';
import NotPage from './components/NotPage/NotPage';


import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <AuthProvider>
    <Router>
       <Switch>
          <Route exact path="/">
              <Header/>
              <Home/>
              <Footer/>
          </Route>
          <Route path="/home">
              <Header/>
              <Home/>
              <Footer/>
          </Route>
  
          <Route path="/moreproduct">
            <Header/>
          <MoreProduct></MoreProduct>
            <Footer/>
          </Route>
          <PrivateRoute path="/addProduct">
            <Header/>
             <AddNewProduct/>
             <Footer/>
          </PrivateRoute>
          <Route path="/login">
            <Header/>
            <Login></Login>
            <Footer/>
          </Route>
          <Route path="/register">
            <Header/>
            <Register></Register>
            <Footer/>
          </Route>
        
          <PrivateRoute path="/dashboard">
            <Header/>
            <Dashboard></Dashboard>
            <Footer/>
          </PrivateRoute>
          <PrivateRoute path="/products/:productId">
            <Header/>
            <DetailsService/>
            <Footer/>
          </PrivateRoute>
        
          <Route path="*">
           <NotPage></NotPage>
          </Route>
       </Switch>
    </Router>
  </AuthProvider>
);
}
export default App;
