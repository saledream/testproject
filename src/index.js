import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

import { AppLoader } from './components/loader/AppLoader';


import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Suspense } from 'react';

import createSagaMiddleware from '@redux-saga/core';
import sagaReducer from './reducers/sagaReducer';
import mySaga from './saga/saga';

const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:sagaReducer,
    middleware :[sagaMiddleware]
});

sagaMiddleware.run(mySaga);

const App = React.lazy(() => import("./App") );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

     <React.StrictMode>
        
            <Provider store={store} >
                <Suspense fallback={<AppLoader/>}>
                    <App/>
                </Suspense>
            </Provider>

      </React.StrictMode>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 




