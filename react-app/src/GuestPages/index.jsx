import React from "react";
import "./style.css"
import {Sidebar} from "../Layout/Sidebar";
import {Header} from "../Layout/Header";
import {RouteComponent} from "../Routes";

export const GuestPages = ()=>{

    return <div className="guestpage">
        <Sidebar />
        <div className="main">
          <Header />
          <RouteComponent />
        </div>
    </div>
}