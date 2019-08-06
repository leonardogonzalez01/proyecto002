import React, { Component } from "react";
import {MDBNavbarBrand,MDBNav, MDBNavItem, MDBNavLink} from "mdbreact";

const Nav = () => {
    return (
            <MDBNav color="blue-gradient" className="font-weight-bold py-4 px-2 mb-4" >
                <MDBNavbarBrand href="/"  className="white-text">
                    <img src="logo.png" height="50rem" width="100rem" className="align-center" alt="marvel" />
                </MDBNavbarBrand>
                <MDBNavItem>
                    <MDBNavLink className="white-text" exact to={'/'}>Home</MDBNavLink>
                </MDBNavItem>
            </MDBNav>
    );
};
export default Nav;