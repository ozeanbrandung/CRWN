import { MenuActionTypes } from "./menu-types";

const INITIAL_STATE = {
    collections: [], 
    loading: true, 
    error: null
}

const menuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case MenuActionTypes.FETCH_MENU_REQUEST: {
            return {
                collections: [], 
                loading: true, 
                error: null
            }
        }
        
        case MenuActionTypes.FETCH_MENU_SUCCESS: {
            return {
                collections: action.payload, 
                loading: false, 
                error: null
            }
        }

        case MenuActionTypes.FETCH_MENU_FAILURE: {
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

export default menuReducer;