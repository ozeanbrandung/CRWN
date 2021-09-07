import {createStore, applyMiddleware} from 'redux';
//Middleware ловит action-ы до их попадания в reducer - обрабатывает и 
//передает дальше в reducer

//lib для session storage 
//persist store позволяет браузеру сохранять сессию
import {persistStore} from 'redux-persist';

//middleware для дебага redux кода
import logger from 'redux-logger';
//thunk middleware
import ReduxThunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [logger, ReduxThunk];

//spread-оператор - раскрываем массив и передаем в функцию отдлельными аргументами
//каждый элемент массива
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

//export default {store, persistor}; - на всякий случай этот экспорт оставляли, но
//консоль ругалась типа надо объект сначала переменной присвоить прежде чем экспортировать