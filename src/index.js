import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import './styles/index.css';
import './tailwind.output.css';
import { Provider } from 'react-redux';
import store from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
