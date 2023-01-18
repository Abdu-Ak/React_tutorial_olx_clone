import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/Context'
import firebase from "./firebase/config";
import Context from './store/Context'
import Loading from './store/loaderContext';



ReactDOM.render(
<FirebaseContext.Provider value={{firebase}} >
   <Loading>
    <Context>
    <App />
    </Context>
    </Loading>
</FirebaseContext.Provider>
, document.getElementById('root')
 );
