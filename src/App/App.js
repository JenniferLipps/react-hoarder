import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home/Home';
import MyNavBar from '../MyNavBar/MyNavBar';
import './App.scss';

function App() {
  return (
    <div className="App">
       <MyNavBar />
       <Home />
    </div>
  );
}

export default App;
