import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Banner from './components/Banner.jsx';
import Flag from './components/Flag.jsx';
import Gallery from './components/Gallery.jsx';
import Error404 from './components/Error404';
import Footer from './components/Footer.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Banner />
    <Flag />
    <Gallery />
    <Error404 />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
