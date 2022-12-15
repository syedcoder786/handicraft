import React, { Component } from 'react';
import Slider from '../slider/Slider';
import Categories from '../Categories';

class Home extends Component {

  render() {

      return (
          <div>
            <Slider />
            <Categories />
          </div>
                
      )
    
    }
}


export default Home;
