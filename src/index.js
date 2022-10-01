import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ButtonIngr from './ButtonIngr'
import Ingredients from './Ingredients';
import Counter from './Counter'
import MyApp from './Counter';
import CounterInd from './CounterInd';
import TitleRow from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<ButtonIngr />
    <Ingredients />
    <CounterInd />
    
    <CounterInd />
    <MyApp />*/}
    <App />
  </React.StrictMode>
);


