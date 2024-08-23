import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-rwybiybatpkgqx70.us.auth0.com"
  clientId="tzIxQ8z1m8i3x9mGtYF1xq9AgX80wB5N"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
 <BrowserRouter>
 <App />
 </BrowserRouter>
</Auth0Provider>,

)
