import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Auth0Provider
 domain="dev-rwybiybatpkgqx70.us.auth0.com"
    clientId="JcjhmG0FrdkZecPLbBZ74dwH4Psva1ug"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
 <App />
</Auth0Provider>,
</BrowserRouter>
)
