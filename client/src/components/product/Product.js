import React, { Component } from 'react';
// import axios from 'axios';
// import '../style/style.css';
import { connect } from 'react-redux';
import { findProduct } from '../../actions/categoryActions';
import { addtocart, checkcart } from '../../actions/categoryActions';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import RelatedSlider from './RelatedSlider';
class Product extends Component {
  state = {
      galleryItems:
          [
            <div key="1"><h1>Loading</h1></div>,
            <div key="2"><h1>Loading</h1></div>
          ],
      addcart:false,
      
    }

componentDidMount() {
  console.log(this.props.match.params.id)
    this.props.findProduct({id:this.props.match.params.id})

    if(this.props.auth.token){
      console.log('sending to check cart '+ this.props.auth.token)
      // this.props.checkcart({ userid:this.props.auth.user._id })
    }
    
  // console.log(this.props.categories)

}

componentDidUpdate(prevProps){
    const {product,cartchecking} = this.props;
    console.log(product)
    // console.log(checkcart)
    console.log(cartchecking)
    if(product !== prevProps.product){
      // console.log(this.props.addcart)
      // console.log(product)
      this.setState({galleryItems:[
        <img src={product.img_path_1} alt="hii" style={{width:'100%', height:'400px'}}></img>,
        <img src={product.img_path_2} alt="hii" style={{width:'100%', height:'400px'}}></img>,
        <img src={product.img_path_3} alt="hii" style={{width:'100%', height:'400px'}}></img>,
        <img src={product.img_path_4} alt="hii" style={{width:'100%', height:'400px'}}></img>,
        <img src={product.img_path_5} alt="hii" style={{width:'100%', height:'400px'}}></img>
      ]
      
    })
    // console.log(this.props.auth.user)
    // if(this.state.addcart === false){
    //   console.log('sending to check cart '+ this.props.auth.user._id)
    //   this.props.checkcart({ userid:this.props.auth.user._id,
    //   productid:this.props.match.params.id })
    // }
      
    }

    // const {checkcart} = this.props
    // console.log(checkcart)
    // console.log('checking cart')
    
    // console.log(checkcart)
    // if(checkcart !== prevProps.checkcart){
    //   console.log('statecart '+checkcart)
    //   this.setState({ addcart:true })
    // }

    // console.log(this.props.auth.user)
      // if(this.props.auth.user){
      //   console.log('sending to check cart '+ this.props.auth.user._id)
      //   this.props.checkcart({ userid:this.props.auth.user._id,
      //     productid:this.props.match.params.id })
      // }
      if(this.props.auth.user){
        if(this.state.addcart === false){
          console.log('sending to check cart '+ this.props.auth.user._id)
          this.props.checkcart({ userid:this.props.auth.user._id,
          productid:this.props.match.params.id })
        }
        
      }

      if(cartchecking !== prevProps.cartchecking){
        console.log('statecart '+cartchecking)
        this.setState({ addcart:cartchecking.cartadd })
      }

    
  }


//   thumbItem = ({src},i) => (
//     <img src={src} alt="hi" onClick={() => this.Carousel.slideTo(i)} style={{width:'50px', height:'50px', cursor:'pointer', border:'solid 1px', borderRadius:'3px'}}>
//       {/* *{' '} */}
//     </img>
//   )

// onClick = (e) => {
//   console.log('clicked')
//   window.location.assign("/product/"+e.target.id)

//   // window.top.close();
// }

addtocart = (e) => {
  console.log('clicked')
  console.log(document.getElementById('btncart').innerHTML)
  // var cart = localStorage.getItem('cart');
  if(this.props.auth.token){
    if(document.getElementById('btncart').innerHTML === 'Add To Cart'){
      const cartdet = {
        userid:this.props.auth.user._id,
        productid:this.props.product._id
      }
      this.props.addtocart(cartdet)
      document.getElementById('btncart').innerHTML = 'Added';
    }else{
      alert('Already added')
    }

      // const cartdet = {
      //   userid:this.props.auth.user._id,
      //   productid:this.props.product._id
      // }
      // this.props.addtocart(cartdet)
      // document.getElementById('btncart').innerHTML = 'Added';

    
  }else{
    alert('Please Log In To Add To Cart')
  }
    
  }
//   const state = this.state.cart;
//   state.push(cart); //check for unshift
//   this.setState({cart:state})
//   localStorage.setItem('cart',JSON.stringify(state))
//   console.log(state)
//   console.log(JSON.parse(localStorage.getItem('cart')))
//   // window.top.close();
// }

  render() {

    // const products = this.props.products.map(({ _id, categoryid, subcategoryid, img_path, name, price, instock, features }) => (
    //           <div class="boxcsspro">
    //             <div class="leftdet" onClick={this.onClick} id={subcategoryid}>
    //               <div class="leftimg">
    //                 <img src={img_path} alt="hii" onClick={this.onClick} id={subcategoryid}></img>
    //               </div>
    //               <div class="rightname">
    //                 <h4><b onClick={this.onClick} id={subcategoryid}>{name}</b></h4>
    //                 <ul>
    //                   <li onClick={this.onClick} id={subcategoryid}>{features}</li>
    //                   <li onClick={this.onClick} id={subcategoryid}>Instock- {instock}</li>
    //                   {/* <li>Details</li>
    //                   <li>Details</li> */}
    //                 </ul>
    //               </div>
    //             </div>
    //             <div class="rightdet">
    //                 <h4><b onClick={this.onClick} id={subcategoryid}>₹ {price}</b></h4>
    //               <img src="../logo.jpg" alt="hi" onClick={this.onClick} id={subcategoryid}></img><br/><br/>
    //               <button>Add To Cart</button>
    //             </div>
    //           </div>
    // ))

    return(
        <div>
          {/* <section> */}
          {/* <div class="container"> */}
            {/* <div class="containercss"> */}
              <section>
                <div class="containercsspro">
                <article id="mainproduct">
                {/* <section id="boxes"> */}
                <div class="containercsspro">
                    <div id="top">
                    <h4>Name</h4>
                    <img src="../logo.jpg" style={{width:'60px', borderRadius:'50%'}} alt="hii"></img><span style={{color:'grey'}}>    100% Safe and Trusted</span>
                    <br/>
                    <br/>
                    <h2>₹ 100</h2>
                    <ul>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                    </ul>
                  {/* {products} */}
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

                  <div id="middle">
                    <h5>Discription</h5><hr/><br/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas velit ligula, cursus non metus nec, facilisis blandit orci. 
                        Nulla tristique eros massa, eu eleifend neque mattis ut. 
                        Fusce lobortis justo sit amet mollis ultrices.
                    </p>
                  </div>
                  <div id="middle">
                    <h5>Rating</h5><hr/><br/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas velit ligula, cursus non metus nec, facilisis blandit orci. 
                        Nulla tristique eros massa, eu eleifend neque mattis ut. 
                        Fusce lobortis justo sit amet mollis ultrices.
                    </p>
                  </div>
                  <br/><br/><br/><br/><br/><br/><br/><br/>
                  {/* <div style={{right:'50px'}}>
                  <RelatedSlider/>
                  </div> */}
                </div>
                </article>
                {/* </section> */}
              {/* </section> */}
              
              {/* <section> */}
                <aside id="sidebarproduct">
                  <div class="containercsspro">
                    <AliceCarousel
                        items={this.state.galleryItems}
                        // responsive={this.responsive}
                        // autoPlayInterval={2000}
                        autoPlayDirection="rtl"
                        autoPlay={false}
                        fadeOutAnimation={true}
                        mouseTrackingEnabled={true}
                        playButtonEnabled={false}
                        disableAutoPlayOnAction={true}
                        dotsDisabled={true}
                        buttonsDisabled={true}
                        //   items={this.state.galleryItems}
                        ref={(el) => (this.Carousel = el)}
                        // onSlideChange={this.onSlideChange}
                        // onSlideChanged={this.onSlideChanged}
                    >
                        {/* <img src="../home_dec.png" alt="hii" style={{width:'100%', height:'500px'}}></img>
                        <img src="../home_dec.png" alt="hii" style={{width:'100%', height:'500px'}}></img> */}
                    </AliceCarousel>
                    <br/>
                    {/* <ul>{this.props.product.map(this.thumbItem)}</ul> */}
                    <center>
                      <ul>
                        <img src={this.props.product.img_path_1} alt="logo" onClick={() => this.Carousel.slideTo(0)} style={{width:'50px', height:'50px', cursor:'pointer', borderRadius:'3px'}} />
                        <img src={this.props.product.img_path_2} alt="logo" onClick={() => this.Carousel.slideTo(1)} style={{width:'50px', height:'50px', cursor:'pointer', borderRadius:'3px'}} />
                        <img src={this.props.product.img_path_3} alt="logo" onClick={() => this.Carousel.slideTo(2)} style={{width:'50px', height:'50px', cursor:'pointer', borderRadius:'3px'}} />
                        <img src={this.props.product.img_path_4} alt="logo" onClick={() => this.Carousel.slideTo(3)} style={{width:'50px', height:'50px', cursor:'pointer', borderRadius:'3px'}} />
                        <img src={this.props.product.img_path_5} alt="logo" onClick={() => this.Carousel.slideTo(4)} style={{width:'50px', height:'50px', cursor:'pointer', borderRadius:'3px'}} />
                      </ul>
                    </center>
                    <br/>
                    <div id="addcart">
                      <button onClick={this.addtocart} id="btncart">{this.state.addcart ? this.state.addcart : 'Add To Cart '}</button>
                    </div>
                    <div id="buynow">
                        <button>Buy Now</button>
                    </div>
                  </div>
                  {/* <RelatedSlider /> */}
                </aside>
                </div>
              </section>
              <div class="containercss">
                <RelatedSlider/>
              </div>

              <br/><br/><br/>
        </div>
        
    )
  }
}


const mapStateToProps = state => ({
    product:state.categories.product,
    // checkcart:state.categories.checkcart,
    cartchecking:state.categories.cartchecking,
    // subcategoryerr:state.categories.itemerr,
    auth:state.auth
});

export default connect(mapStateToProps, { findProduct, addtocart, checkcart })(Product);
// export default Subcategories;
