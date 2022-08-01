import React from 'react';
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom'

import App from "./app"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);