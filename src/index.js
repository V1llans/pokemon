import React from 'react';
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from "./app"
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';

const store = configureStore()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);