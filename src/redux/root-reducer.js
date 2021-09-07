//НАСТРОЙКА REDUX И СОХРАНЕНИЯ СЕССИИ
import { combineReducers } from "redux";
//КЭШИРОВАНИЕ СЕССИИ 
import {persistReducer} from 'redux-persist'
//local storage в браузере
import storage from 'redux-persist/lib/storage';
//import sessionStorage from 'redux-persist/........';

import cartReducer from "./cart/cart-reducer";
import shopReducer from "./shop/shop-reducer";
import userReducer from "./user/user-reducer";
import menuReducer from "./menu/menu-reducer";

const persistConfig = {
    key: 'root', 
    storage, 
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    //user is held by firebase authentification, there is no reason to persist this
    user: userReducer, 
    cart: cartReducer,
    shop: shopReducer, 
    menu: menuReducer
});

export default persistReducer(persistConfig, rootReducer);