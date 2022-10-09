import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContext } from "react";

const autographs = {
  danielcraig: 'James Bond/007 series'
};
// ここでuseContextの定義
const AutographsContext = createContext(autographs);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AutographsContext.Provider value={autographs}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AutographsContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default AutographsContext;
