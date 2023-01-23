import React from "react";
import { NAVIGATION_PAGES } from "../../data/data";
import { NavItem } from "../../Layout/Sidebar/NavItem";
import "./style.css"
  
  export const DashboardPage = () => {
    const {edit} = NAVIGATION_PAGES;

    return (
      <div className="dashboard">
        <div className="edit-button">
          <NavItem className="button" label={edit.label} link={edit.link} />
        </div>
    </div>
    )
  };
  