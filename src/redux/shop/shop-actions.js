import { ShopActionTypes } from "./shop-types"

export const fetchShopSuccess = (collections) => ({
    type: ShopActionTypes.FETCH_SHOP_SUCCESS,
    payload: collections
})

export const fetchShopRequest = () => ({
  type: ShopActionTypes.FETCH_SHOP_REQUEST,
})

export const fetchShopFailure = (err) => ({
  type: ShopActionTypes.FETCH_SHOP_FAILURE,
  payload: err
})

//thunk
export const getShopToStore = (service) => {
    return (dispatch) => {
      dispatch(fetchShopRequest());
      service.getShop().then(collections => dispatch(fetchShopSuccess(collections)) )
      .catch(err => dispatch(fetchShopFailure(err)))
    };
  }