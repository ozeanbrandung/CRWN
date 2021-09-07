import {MenuActionTypes} from './menu-types';

export const fetchMenuSuccess = collections => ({
    type: MenuActionTypes.FETCH_MENU_SUCCESS,
    payload: collections
})

export const fetchMenuFailure = err => ({
    type: MenuActionTypes.FETCH_MENU_FAILURE, 
    payload: err
})

export const fetchMenuRequest = () => ({
    type: MenuActionTypes.FETCH_MENU_REQUEST
})

//thunk с асинхронщиной! принимает на вход service с методом getMenu()!
export const getMenuToStore = (service) => {
    return (dispatch) => {
        dispatch(fetchMenuRequest);
        service.getMenu().then(collections => dispatch(fetchMenuSuccess(collections)))
        .catch(err => dispatch(fetchMenuFailure(err)))
    }
}