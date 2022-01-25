import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers";
import { Auth0Provider } from "@auth0/auth0-react";


const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
   <Auth0Provider
    domain="dev-81am5xqj.us.auth0.com"
    clientId="E4hXpPdj3yNghoiuq4djDRlNFUm3oZqn"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);

