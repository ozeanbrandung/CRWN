import {MenuActionTypes} from './menu-types';

export const fetchMenuSuccess = collections => ({
    type: MenuActionTypes.FETCH_MENU_SUCCESS,
    payload: collections
})

//thunk с асинхронщиной! принимает на вход service с методом getMenu()!
export const getMenuToStore = (service) => {
    return (dispatch) => {
        service.getMenu().then(collections => dispatch(fetchMenuSuccess(collections)))
    }
}