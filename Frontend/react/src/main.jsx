import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Lol from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-k75grkhw47hwdtgw.us.auth0.com"
    clientId="d21ZB6iqUx9P4akO5jB9jbJqDlXJkk4y"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <App />
 </Auth0Provider>
  </React.StrictMode>,
)
