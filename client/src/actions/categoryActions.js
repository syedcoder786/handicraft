import { FETCH_CATEGORIES, CATEGORIES_LOADING, CATEGORIES_LOADED, GET_CATEGORY, ERROR_CATEGORY, GET_PRODUCTS, GET_PRODUCT, ADD_CART, GET_RPRODUCTS, CHECK_CART, FETCH_CART, REMOVE_CART } from './types';
import axios from 'axios';

export const fetchCategories = () => dispatch => {
    dispatch({ type:CATEGORIES_LOADING })
    axios.get('/api/fetchCategories')
    // .then(res => res.json()) 
      .then(categories => {
            dispatch({ type:CATEGORIES_LOADED })
            dispatch({
                type:FETCH_CATEGORIES,
                payload:categories.data
            })
      })
      
};



// export const findSubcategory = (id) => {

// console.log(id)
//   axios({
//     method: 'post',
//     url: '/api/findSubcategory',
//     data: id
//     }).then( (data) => {
//       console.log('request sended'+data)
//     }

//       );
// };

export const findSubcategory = (id) => (dispatch) => {


  axios.post('/api/findSubcategories',id)
  .then(subcategory =>{
      console.log(subcategory.data)
            dispatch({
              type: GET_CATEGORY,
              payload: subcategory.data
            })
          })
            .catch(error =>{
              dispatch({
                type: ERROR_CATEGORY,
                payload: error.response.data
              })
            })
            // console.log(post.data)
          
};

export const findProducts = (id) => (dispatch) => {

  axios.post('/api/findProducts',id)
    .then(products =>{
      console.log(products.data)
            dispatch({
              type: GET_PRODUCTS,
              payload: products.data
            })
    })
          // .catch(error =>{
          //   dispatch({
          //     type: ERROR_CATEGORY,
          //     payload: error.response.data
          //   })
          // })
          // console.log(post.data)
};

export const findProduct = (id) => (dispatch) => {

  axios.post('/api/findProduct',id)
    .then(product =>{
      console.log(product.data)
            dispatch({
              type: GET_PRODUCT,
              payload: product.data
            })
    })
          // .catch(error =>{
          //   dispatch({
          //     type: ERROR_CATEGORY,
          //     payload: error.response.data
          //   })
          // })
          // console.log(post.data)
};


// Add To Cart
export const addtocart = (cart) => (dispatch,getState) => {

  //get token from local storage
  const token = getState().auth.token;

  //headers
  const config = {
      headers:{
          "Content-type":"application/json"
      }
  }
  console.log('token: '+ token)
  if(token){
      config.headers['x-auth-token'] = token;
  }
  console.log('config:  '+config.headers)

  axios.post('/addtocart',cart,config)
    .then(cart =>{
      console.log(cart.data)
            dispatch({
              type: ADD_CART,
              // payload: cart.data
            })
    })
          // .catch(error =>{
          //   dispatch({
          //     type: ERROR_CATEGORY,
          //     payload: error.response.data
          //   })
          // })
          // console.log(post.data)
};


// Check Cart
export const checkcart = (cartdata) => (dispatch) => {

  axios.post('/checkcart', cartdata)
    .then(checkcart =>{
      // console.log(checkcart.data)
            dispatch({
              type: CHECK_CART,
              payload: checkcart.data
            })
    })
          // .catch(error =>{
          //   dispatch({
          //     type: ERROR_CATEGORY,
          //     payload: error.response.data
          //   })
          // })
          // console.log(post.data)
};

// Related Products
export const relatedProducts = () => (dispatch) => {
  console.log('sending req. for rproducts')
  axios.post('/relatedProducts')
    .then(rproducts =>{
      console.log('rproducts')
      console.log(rproducts.data)
            dispatch({
              type: GET_RPRODUCTS,
              payload: rproducts.data
            })
    })
          // .catch(error =>{
          //   dispatch({
          //     type: ERROR_CATEGORY,
          //     payload: error.response.data
          //   })
          // })
          // console.log(post.data)
};

// Fetch Cart
var x,y = 0
export const fetchCart = (fetchcart) => (dispatch) => {

  axios.post('/fetchCart', fetchcart)
    .then(cart =>{
      // console.log(cart.data)
      //       dispatch({
      //         type: FETCH_CART,
      //         payload: cart.data
      //       })

      if (x===0){
        console.log(x)
        // axios.get('/api/showpost')
        //   .then(posts => {
              dispatch({
              type: FETCH_CART,
              payload: cart.data
            })
            console.log(cart.data)
          // })
        x=1;
        y=cart.data.length;
        console.log('first')
        console.log(y)
      }
      else if (y!==cart.data.length){
                  console.log(y)
                  // axios.get('/api/showpost')
                  //   .then(posts => {
                      // dispatch({type:POST_LOADED})
                      dispatch({
                      type: FETCH_CART,
                      payload: cart.data
                    })
                  // })
                  y=cart.data.length;
                  console.log('secound')
      }
    })
          // .catch(error =>{
          //   dispatch({
          //     type: ERROR_CATEGORY,
          //     payload: error.response.data
          //   })
          // })
          // console.log(post.data)
};

// Remove Cart
export const removecart = (cartdata) => (dispatch) => {

  axios.post('/removecart', cartdata)
    .then(checkcart =>{
      console.log(checkcart.data)
            dispatch({
              type: REMOVE_CART,
              // payload: checkcart.data
            })
    })
          // .catch(error =>{
          //   dispatch({
          //     type: ERROR_CATEGORY,
          //     payload: error.response.data
          //   })
          // })
          // console.log(post.data)
};