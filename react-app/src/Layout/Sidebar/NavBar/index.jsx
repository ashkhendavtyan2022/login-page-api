import React from "react";
import { NAVIGATION_PAGES } from "../../../data/data";
import { NavItem } from "../NavItem";
import "./style.css";

const {dashboard, product, edit, shop, carts} = NAVIGATION_PAGES;

export const NavBar = () => {
    return (
        <nav>
            <ul className="navigation_list">
                <NavItem label={dashboard.label} link={dashboard.link}/>
                <NavItem label={product.label} link={product.link} />
                <NavItem label={edit.label} link={edit.link}/>
                <NavItem label={shop.label} link={shop.link}/>
                <NavItem label={carts.label} link={carts.link}/>
            </ul>
        </nav>
    )
}