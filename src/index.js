import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LocationSearch from './pages/LocationSearch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      {/* Content shown on all routes goes here */}

      <Routes>
        {/* Content shown on the homepage goes here */}
        <Route path='/' element={<App />} />

        {/* Content shown on the API fetch route goes here */}
        <Route path='/location/search/:location' element={<LocationSearch />} />

      </Routes>

    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
