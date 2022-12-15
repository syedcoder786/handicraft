import React, { Component } from 'react';
// import '../style/style.css';
import { connect } from 'react-redux';
import { fetchCart, removecart } from '../../actions/categoryActions';
class Cart extends Component {
    state = {
        cart:true,
        // cartprice:null
    }

  componentDidUpdate(){
    if(this.props.auth.user){
        // console.log("console")
        if(this.state.cart){
        console.log(this.props.auth.user)
        this.setState({cart:false})
        // this.props.fetchCart({id:this.props.auth.user._id})
        setInterval(
            () => this.props.fetchCart({id:this.props.auth.user._id}),
            3000
          );
        }
      }
  }

//   onClick = (e) => {
//     console.log(e.target.id)
//     window.location.assign("/category/"+e.target.id)
//   }
    hide = (e) => {
        document.getElementById("hide").innerHTML=<div></div>
    }

    remove = (e) => {
        console.log(e.target.id)
        this.props.removecart({userid:this.props.auth.user._id, productid:e.target.id})
    }

  render() {
      var pricecart = 0
    //   var i = 0
    //   var flag=0
          const cart = this.props.cart.map(({ _id, categoryid, subcategoryid, productid, img_path_1, img_path_2, img_path_3, img_path_4, img_path_5, name, price, instock, features, discription }) => (
                <div class="boxcart">
                    <div class="leftdetcart">
                        <div class="leftimgcart">
                            <img src={img_path_1} alt="hii"></img>
                        </div>
                        <div class="rightnamecart">
                        <h3 id="namecart">{name}</h3>
                        <div class="rightvaluecart"><span><button>-</button> <button> x2 </button> <button>+</button></span></div>
                        </div>
                    </div>
                    <div class="rightdetcart">
                        <h3 id="pricecart"><b>₹ {price}</b></h3>
                        <img src="./logo.jpg" alt="hii"></img><br/><br/>
                        <button onClick={this.remove} id={_id}>Remove</button>
                    </div>
                    {/* {i++} */}
                    {/* <p onLoad={this.hide()} id="hide">hiii{pricecart = pricecart + parseInt(price)}</p> */}
                    <script>{pricecart = pricecart + parseInt(price)}</script>
                </div>
                
          ))

          const cartitems = this.props.cart.map(({ _id, categoryid, subcategoryid, productid, img_path_1, img_path_2, img_path_3, img_path_4, img_path_5, name, price, instock, features, discription }) => (
              <div>
                  <p>{name}</p>
              </div>
          ))
        //   console.log(i)
        //   console.log('cart'+this.props.cart.length)
        // //   i === this.props.cart.length+1? this.setState({cartprice:100}):''
        //   if(i === this.props.cart.length && i!==0){
              
        //       console.log('inside if '+flag)
        //     //   console.log(i+this.props.cart.length)
        //     if(flag===0){
        //         flag=1
        //         this.setState({cartprice:pricecart})
        //     }
              
        //   }

          const cartprice = (<span>Total- ₹ <b>{pricecart}</b></span>)
      return (
        <header id="cartbg">
                <div class="containercss">
                    <section id="maincpro">
                        <section id="boxescart">
                            <div class="containercss">
                                {cart}
                            </div>
                    </section>
                </section>

                <section>
                    <aside id="sidebarcart">
                        <div class="containercss">
                            <b>Cart</b><br/>
                            {/* <p>Items</p>
                            <p>Items</p>
                            <p>Items</p>
                            <p>Items</p> */}
                            {cartitems}
                            <p>{cartprice}</p>
                            <button>Add Payment method</button>
                        </div>
                        
                    </aside>
                </section>
            </div>
        </header>
      )
    
}
}

const mapStateToProps = state => ({
    // categories:state.categories.items,
    // categoriesLoading:state.categories.categoriesLoading,
    cart:state.categories.cartnew,
    auth:state.auth,
});

export default connect(mapStateToProps, { fetchCart, removecart })(Cart);
// export default Cart;
