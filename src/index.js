import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//
//  with redux
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";

const middlewareEnhancer = applyMiddleware(thunk);
const store = createStore(rootReducer, middlewareEnhancer);
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

//
//  without redux
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
