// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
//auth
import 'firebase/compat/auth';
//db
import 'firebase/compat/firestore';

const config = 
    {
        apiKey: "AIzaSyDD6uxVM6mZ8kcCNxit_uANxHsfk3Eyd5c",
        authDomain: "crwn-db-8ad9d.firebaseapp.com",
        projectId: "crwn-db-8ad9d",
        storageBucket: "crwn-db-8ad9d.appspot.com",
        messagingSenderId: "740453027958",
        appId: "1:740453027958:web:02800943e8c6d8ad278f57",
        measurementId: "G-MGSXEK9BST"
      };

//В СЛЕД ФУНКЦ ВСЕ ОБЪЯСНЕНО НЕ СОВСЕМ ВЕРНО - НУЖНО ПЕРЕОСМЫСЛИТЬ 
//userAuth - сгенерированный объект пользователя
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //т.е. logged out
  if (!userAuth) return;

  //обращаемся к такому-то документу - месту в бд
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //полоучаем из этого места объект с инфой - асинхронно, поскольку обращение к бд
  const snapShot = await userRef.get();

  //если документа - даты в нем - нет, то вытаскиваем из userAuth объекта нужные поля
  if(!snapShot.exists) {
            const {displayName, email} = userAuth;
            const createdAt = new Date();

            //асинхронно - потому что запись в бд
            try {
              //проводить операции записи, удаления, чтения и изменения (CRUD)
              //можно только с Ref-объектом - т.е. образаемся к месту в бд и в него ставим дату
              await userRef.set({
                displayName, 
                email, 
                createdAt,
                ...additionalData
              })
            } catch (err) {
              console.log('error creating user: ', err.message)
            }
  }

  //это не дата, а объект бд с кучей всяких св-в не нужных нам
  return userRef; 
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
