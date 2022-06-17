import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import Footer from './components/footer'
import Main from './components/main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main placeholder="Enter a Pokemon Name..." />
    
    <Footer/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

