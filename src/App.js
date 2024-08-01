import React, { Component } from "react";
import "./App.css";
import { Header } from "./global/header";
import { Switch, Route, Routes} from "react-router-dom";

import PlaceOrder from "./main/PlaceOrder";
import UpdatePredicted from "./main/UpdatePredicted";
import Kitchen from "./main/Kitchen";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<PlaceOrder/>} />
          <Route path="/updatepredicted" component={<UpdatePredicted/>} />  
          <Route path="/kitchen" component={<Kitchen/>} />
        </Routes>
      </div>
  );
}

export default App;
