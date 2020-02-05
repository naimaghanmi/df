import React from 'react';
// import './App.css';
import Navbar from"./folder/navbar"
import Main from "./folder/main"
import Sommes from  './folder/quiSomme'
import Marche from './folder/marche'
import Footer from './folder/footer'
import Login from './folder/login'
function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <Marche/> */
     /* <Sommes/> */}
     {/* <Main/> */}
    {/* <Footer /> */}
    <Login/>
    </div>
  );
}

export default App;
