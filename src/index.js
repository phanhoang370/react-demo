import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Demo';
import registerServiceWorker from './registerServiceWorker';
import Crud from "./Crud";

import {createStore} from 'redux';
import myReducer from './reducers/index';
import {Provider} from 'react-redux';


const store=createStore(myReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><Crud /></Provider>,
    document.getElementById('root')
);
registerServiceWorker();
