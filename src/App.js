import React from 'react';
import Header from './components/Header';
import './style.css';

export default function App() {
  return (
    <div>
      <div id="page-stripes" style={{ display: 'none' }}></div>
      <Header />
    </div>
  );
}
