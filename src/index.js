import React from 'react';
import ReactDOM from 'react-dom';
//Router
import {BrowserRouter as Router} from 'react-router-dom'
//Redux
import {Provider} from 'react-redux';
//наш store и PERSIST - для сохранения сессии shopping cart!
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
//наш собственный провайдер нашего же сервиса получения данных с сервера
import { CrwnServiceProvider } from './services/crown-provider/crwn-service-context';
//наш собственный сервис получения данных с сервера
import CrwnServise from './services/crwn-service';
//Компонент, отлавливающий ошибки
import ErrorBoundry from './components/error-boundry/error-boundry';

//app
import App from './app';
//null scss
import './index.scss';

//создаем инстанс сервиса
const crwnService = new CrwnServise();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CrwnServiceProvider value={crwnService}>
        <ErrorBoundry>
          <Router>
            <PersistGate persistor={persistor}>
              <App />
            </PersistGate>
          </Router>
        </ErrorBoundry>
      </CrwnServiceProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


