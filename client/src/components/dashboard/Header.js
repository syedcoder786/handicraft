import React, { Component } from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Subcategories from '../Subcategories';
import Products from '../Products';
import Logout from '../auth/Logout';
import Product from '../product/Product';
import Cart from '../user/Cart';
import Footer from './Footer';
// import Paytm from '../paytm/Paytm';
// import About from '../About';
// import RegisterModal from '../auth/RegisterModal';
// import '../../style/style.css';
class Header extends Component {

  render() {

      return (
          <div>
              <Dashboard />
              {/* <div><Footer/></div> */}
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/">
                      <Home/>
                    </Route>
                    <Route path="/cart" component = {Cart} />
                    <Route path="/category/:id" component = {Subcategories} />
                    <Route path="/subcategory/:id" component = {Products} />
                    <Route path="/logout" component = {Logout} />
                    <Route path="/product/:id" component = {Product} />
                    {/* <Route path="/login">
                      <Login />
                    </Route>
                    <Route path="/cart">
                      <Cart />
                    </Route> */}
                  </Switch> 
                </BrowserRouter>
                <div class="containerfooter">
                <Footer/>
                </div>
                
          </div>
                
      )
    
    }
}

// const mapStateToProps=state=>({
//     // posts:state.post.items,
//     // postLoading:state.post.postLoading,
//     auth:state.auth
// });

export default Header;
