import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import 'normalize.css'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Auth0Provider
    domain="dev-ki9wcdtr.us.auth0.com"
    clientId="dA5hy6M28hzKGrjVD4z0GiXdfSOupy3W"
      redirectUri={window.location.origin}>
      
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

