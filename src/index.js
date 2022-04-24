import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './store/store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
// ReactDOM.render(<App/>,document.getElementById('root'))

