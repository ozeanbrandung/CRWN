import { MenuActionTypes } from "./menu-types";

const INITIAL_STATE = {
    collections: []
}

const menuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case MenuActionTypes.FETCH_MENU_SUCCESS: {
            return {
                collections: action.payload
            }
        }

        default:
            return state;
    }
}

export default menuReducer;