import React, { Component } from 'react';
// import axios from 'axios';
import '../style/style.css';
import { connect } from 'react-redux';
import { findProducts } from '../actions/categoryActions';
class Products extends Component {
  // state = {
  //     cart:[]
  //   }

componentDidMount() {
  console.log(this.props.match.params.id)
    this.props.findProducts({id:this.props.match.params.id})
  // console.log(this.props.categories)

}

onClick = (e) => {
  console.log('clicked')
  window.location.assign("/product/"+e.target.id)

  // window.top.close();
}

// addtocart = (e) => {
//   console.log('clicked')
//   // var cart = localStorage.getItem('cart');
//   const cart = {
//     id:e.target.id
//   }
//   const state = this.state.cart;
//   state.push(cart); //check for unshift
//   this.setState({cart:state})
//   localStorage.setItem('cart',JSON.stringify(state))
//   console.log(state)
//   console.log(JSON.parse(localStorage.getItem('cart')))
//   // window.top.close();
// }

  render() {

    const products = this.props.products.map(({ _id, categoryid, subcategoryid, productid, img_path_1, img_path_2, img_path_3, img_path_4, img_path_5, name, price, instock, features, discription }) => (
              <div class="boxcsspro">
                <div class="leftdet" onClick={this.onClick} id={_id}>
                  <div class="leftimg">
                    <img src={img_path_1} alt="hii" onClick={this.onClick} id={_id}></img>
                  </div>
                  <div class="rightname">
                    <h4><b onClick={this.onClick} id={_id}>{name}</b></h4>
                    <ul>
                      <li onClick={this.onClick} id={_id}>{features}</li>
                      <li onClick={this.onClick} id={_id}>Instock- {instock}</li>
                      {/* <li>Details</li>
                      <li>Details</li> */}
                    </ul>
                  </div>
                </div>
                <div class="rightdet">
                    <h4><b onClick={this.onClick} id={_id}>₹ {price}</b></h4>
                  <img src="../logo.jpg" alt="hi" onClick={this.onClick} id={_id}></img><br/><br/>
                  <button>Add To Cart</button>
                </div>
              </div>
    ))

    return(
        <div>
            {/* <div class="containercss"> */}
              <section id="mainpro">
                <section id="boxes">
                <div class="containercsspro">
                  {products}
                  {/* <div className="boxcsssub">
                    <img src='../home_dec.png' alt="hi" style={{width:'100%'}}></img><br/>
                      <p>
                        <b>subcategory</b><br/>
                        subcategories<br/>
                        <br/>
                      </p>
                  </div>
                  <div className="boxcsssub">
                      <img src='../home_dec.png' alt="hi" style={{width:'100%'}}></img><br/>
                        <p>
                          <b>subcategory</b><br/>
                          subcategories<br/>
                          <br/>
                        </p>
                  </div>
                  <div className="boxcsssub">
                      <img src='../home_dec.png' alt="hi" style={{width:'100%'}}></img><br/>
                        <p>
                          <b>subcategory</b><br/>
                          subcategories<br/>
                          <br/>
                        </p>
                  </div>
                  <div className="boxcsssub">
                      <img src='../home_dec.png' alt="hi" style={{width:'100%'}}></img><br/>
                        <p>
                          <b>subcategory</b><br/>
                          subcategories<br/>
                          <br/>
                        </p>
                  </div> */}
                </div>
                </section>
              </section>
              <section>
                <aside id="sidebarpro">
                  <div class="containercsspro">
                    <b>Produts</b><br/>
                    <p>Cards</p>
                    <p>Gift Cards</p>
                    <p>Cards</p>
                    <p>Cards</p>
                    <p>Cards</p>
                    <p>Cards</p>
                  </div>
                </aside>
              </section>
            {/* </div> */}
        </div>
    )
  }
}


const mapStateToProps = state => ({
    products:state.categories.productitems,
    // subcategoryerr:state.categories.itemerr,
    // token:state.auth.token
});

export default connect(mapStateToProps, { findProducts })(Products);
// export default Subcategories;
