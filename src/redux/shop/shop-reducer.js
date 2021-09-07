import { ShopActionTypes } from "./shop-types"

const INITIAL_STATE = {
  collections: [], 
  loading: true, 
  error: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      
        case ShopActionTypes.FETCH_SHOP_REQUEST: {
          return {
            collections: [], 
            loading: true, 
            error: null
          }
        }
        case ShopActionTypes.FETCH_SHOP_SUCCESS: {
             return {
                collections: action.payload, 
                loading: false, 
                error: null
             }
        }
        case ShopActionTypes.FETCH_SHOP_FAILURE: {
          return {
            collections: [], 
            loading: false, 
            error: action.payload
          }
        }
        default:
            return state;
    }
}

export default shopReducer;