import React from "react";
import { Switch, Route,Link } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage=()=>
{
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}


function App() {
  return (
    <div>
     <Route exact path='/' component={HomePage}></Route>
     <Route  path='/hats' component={HatsPage}></Route>
    </div>
  );
}

export default App;
