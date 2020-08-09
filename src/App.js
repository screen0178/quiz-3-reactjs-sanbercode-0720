import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes'
import Navi from './component/navi'
import Landing from './component/landing'
import './App.css';

function Footer() {
  return (
    <div className="footer">
        <h5>copyright &copy; 2020 by Sanbercode</h5>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Landing />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
