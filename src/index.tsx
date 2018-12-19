import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import './index.css';
import * as WebFontLoader from 'webfontloader';
import { BrowserRouter as Router } from 'react-router-dom';
import { TodoStore } from './state/Todo';
import { DataItemStore } from './state/TimeData';
import { PresidioStore } from './state/PresidioApi';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

const todoStore = new TodoStore();
const dataStore = new DataItemStore();
const presidioStore = new PresidioStore();

ReactDOM.render(
  <Provider todoStore={todoStore} dataStore={dataStore} presidioStore={presidioStore}>
    <Router><App /></Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);