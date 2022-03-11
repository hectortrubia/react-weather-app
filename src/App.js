import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "./App.css";
import Home from "./pages/home/home";
import Topbar from './components/topbar/topbar';


function App() {



  return (
  <React.Fragment>
  <Topbar></Topbar>
  <Home></Home>;
  </React.Fragment>

  )
}

export default App;
