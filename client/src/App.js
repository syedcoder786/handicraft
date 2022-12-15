import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Header from './components/dashboard/Header';
// import './style/styleproducts';
// import Slider from './components/slider/Slider'
import 'bootstrap/dist/css/bootstrap.min.css'
import {loadUser} from './actions/authActions'

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }
  
  render() {
    return (
      <Provider store={store}>
            {/*           
              <title>Syed Expert</title>
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width" />
                <meta name="description" content="Todos on steroid!" />
                <meta name="keywords" content="web design, affordable web design, professional web design" />
                <meta name="author" content="Syed Expert" /> */}
            <div className="App">
              <Header />
            </div>
      </Provider>
    );
  }
}

export default App;
