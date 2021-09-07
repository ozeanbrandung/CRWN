import {createSelector} from 'reselect';

const selectMenu = state => state.menu;

export const selectMenuLoading = createSelector(
    [selectMenu], 
    menu => menu.loading
)

export const selectMenuError = createSelector(
    [selectMenu], 
    menu => menu.error
)

export const selectMenuSections = createSelector(
    [selectMenu], 
    menu => menu.collections
)