import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopSections = createSelector(
    [selectShop], 
    shop => shop.collections
)

//какая-то ебанутая хуйня но этот объект типа того понадобился 
//чтобы сделать соответсвие между названием коллекции в url
//и id коллекции в дате, которую получаем с сервака
const COLLECTION_ID_MAP = {
    hats: 1, 
    sneakers: 2,
    jackets: 3,
    womens: 4, 
    mens: 5
}

//КОНВЕРТАЦИЯ ОБЪЕКТА ОБЪЕКТОВ В МАССИВ - ЕСЛИ С СЕРВЕРА ПРИШЛИ ОБЪЕКТЫ С КЛЮЧАМИ
//const selectCollectionsForPreview = createSelector(
    //--в shop.collections сидят объекты: { hats; {...}, jackets: {...}, ...}
//    [selectCollection],
    //--Object.keys превращает объект в массив его ключей типа ['hats', 'jackets', ...]
    //а map вернет массив с значениями засунутыми туда по ключам
//    collections => Object.keys(collections).map(key => collections[key])
//)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopSections], 
    //collections => collections[collectionUrlParam] -- если бы это был объект
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
)