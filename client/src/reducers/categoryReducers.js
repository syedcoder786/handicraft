import { FETCH_CATEGORIES, CATEGORIES_LOADING, CATEGORIES_LOADED, GET_CATEGORY, ERROR_CATEGORY, GET_PRODUCTS, GET_PRODUCT, GET_RPRODUCTS, CHECK_CART, FETCH_CART } from '../actions/types';

const initialState = {
    items:[],
    subitems:[],
    productitems:[],
    product:{},
    cartchecking:{},
    itemerr:{},
    categoriesLoading: false,
    rproducts:[],
    cartnew:[],
}
export default function(state=initialState,action){
    switch(action.type){
        case CATEGORIES_LOADING:
        return{
            ...state,
            categoriesLoading:true
            }
        case CATEGORIES_LOADED:
        return{
            ...state,
            categoriesLoading:false
            }
        case FETCH_CATEGORIES:
        return {
            ...state,
            items:action.payload
        };
        case GET_CATEGORY:
        // localStorage.setItem('price', action.payload.selling_rate)
        // localStorage.setItem('item', JSON.stringify(action.payload))
        return {
            ...state,
            subitems:action.payload
        };
        
        case ERROR_CATEGORY:
        return {
            ...state,
            itemerr:action.payload
        };
        case GET_PRODUCTS:
        return {
            ...state,
            productitems:action.payload
        };
        case GET_PRODUCT:
        return {
            ...state,
            product:action.payload
        };
        case GET_RPRODUCTS:
        return {
            ...state,
            rproducts:action.payload
        };
        // case CHECK_CART:
        // return {
        //     ...state,
        //     checkcart:action.payload
        // };
        case CHECK_CART:
        return {
            ...state,
            cartchecking:action.payload
        };
        case FETCH_CART:
        return {
            ...state,
            cartnew:action.payload
        };
        default:
        return state;
    };
}