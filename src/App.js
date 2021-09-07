import React, { Component, Fragment } from 'react';
//Redux
import {connect} from 'react-redux'
//action
import {setCurrentUser} from './redux/user/user-actions';
//reselect lib
import { selectCurrentUser } from './redux/user/user-selector';
import {createStructuredSelector} from 'reselect';
//Router
import {Route, Switch, Redirect} from 'react-router-dom';
//Firebase
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
//CUSTOM COMPONENTS
import Header from './components/header/header';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout';
//SCSS
import './app.scss';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    //собственный метод auth из firebase/auth
    //сюда зашито все, чтобы сессия авторизированного пользователя сохранялоась
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        //если не logged out - есть объект пользователя
        if (userAuth) {
          //эта функция (созданная нами) как раз userRef и возвращает
          const userRef = await createUserProfileDocument(userAuth);

          //объект о только что внесенном в бд пользователе или существующем
          //.data() позволяет из этого бд-шного объекта вытащить дату 
          userRef.onSnapshot(snapShot => {
                      //this.setState поменяли на this.props.setCurrentUser - action
                      setCurrentUser({
                                  id: snapShot.id, 
                                  ...snapShot.data()
                                })
                      //поскольку setState - асинхронная операция, то единственный шанс что-то
                      //выполнить гарантированно после (!) завершения работы setStste (а не до например)
                      //- передать вторым параметром в setState - так,
                      // как мы сделали для просмотра состояния state
                      //}, () => console.log(this.state))
          })
        } else {
            //если logged out -т.е. userAuth === null, currentUser устанавливаем в null
            //можно было и setState({current: null})
            //this.setState({currentUser: userAuth}, () => console.log(this.state))
            setCurrentUser(userAuth)
        }
    })
  }

  componentWillUnmount() {
    //вручную закрываем пользоват-ую сессию после закрытия приложения 
    //(именно закрытие, а не перезагрузка, например)
    this.unsubscribeFromAuth();
  }

  render() {
      return (
        <Fragment>
          <Header/>
          <Switch>
            <Route path='/' exact component={Homepage}/>
            {/* когда написала так /shop/ нихуя не сработало дальше с match */}
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' exact 
                   render={() => this.props.currentUser? 
                   <Redirect to='/' /> : <SignInAndSignUpPage />} />
            <Route path='/checkout' exact component={CheckoutPage}/>
            <Route render={() => <div>This page does not excist!</div>}/>
          </Switch>
        </Fragment>
      );
  }
}

const mapDispatschToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

//деструктурируем user-а из state: {user}
//вместо этого используем selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatschToProps)(App);
//если надо передать только MDTP: connect(null, mapDispatschToProps)(App)
