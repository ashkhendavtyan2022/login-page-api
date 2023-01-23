import React from "react";
import { NAVIGATION_PAGES } from "../../../data/data";
import { NavItem } from "../NavItem";
import "./style.css";

const {dashboard, product, edit} = NAVIGATION_PAGES;

export const NavBar = () => {
    return (
        <nav>
            <ul className="navigation_list">
                <NavItem label={dashboard.label} link={dashboard.link}/>
                <NavItem label={product.label} link={product.link} />
                <NavItem label={edit.label} link={edit.link}/>
            </ul>
        </nav>
    )
}