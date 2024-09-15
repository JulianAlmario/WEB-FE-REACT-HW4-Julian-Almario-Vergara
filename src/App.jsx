import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import './styles.css'
import { Diag, Obj } from "./data/data";
import { useState } from 'react'



function App() {

  return (
    <>
    <Header/>
    <Main diag={Diag} obj={Obj}/>
    <Footer/>
    </>
  );
}

export default App;
