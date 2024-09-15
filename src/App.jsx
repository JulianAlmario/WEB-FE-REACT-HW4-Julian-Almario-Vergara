import Header from "./Components/Header";
import Main from "./Components/Main";
import './styles.css'
import { Diag, Obj } from "./data/data";
import { useState } from 'react'



function App() {

  return (
    <div className="max-[768px]:w-full box-border">
    <Header/>
    <Main diag={Diag} obj={Obj}/>
    </div>
  );
}

export default App;
