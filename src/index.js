import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import App from './App';
import reducer, { initialState } from './components/reducer';
import { StateProvider } from './components/StoreProvider';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


