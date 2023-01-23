import React from "react";
import "./App.css";
import { Header } from "./Layout/Header";
import { Sidebar } from "./Layout/Sidebar";
import { RouteComponent } from "./Routes";
import {Admin} from "./AdminPage";
import {AppComponent} from "./AppComponent";

function App() {
  return (
    <div className="App">
      {/*<Sidebar />*/}
      {/*<div className="main">*/}
      {/*  <Header />*/}
      {/*  <RouteComponent />*/}
      {/*</div>*/}
      {/*  <Admin />*/}
      <AppComponent />
    </div>
  );
}

export default App;