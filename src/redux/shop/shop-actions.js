import { ShopActionTypes } from "./shop-types"

export const fetchShopSuccess = (collections) => ({
    type: ShopActionTypes.FETCH_SHOP_SUCCESS,
    payload: collections
})

//thunk
export const getShopToStore = (service) => {
    return (dispatch) => {
      service.getShop().then(collections => dispatch(fetchShopSuccess(collections)) )
    };
  }