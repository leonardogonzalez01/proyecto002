import React from "react";
import {MDBNavbarBrand, MDBNav, MDBNavItem, MDBNavLink} from "mdbreact";

const Nav = () => {
    return (
        <div>
            <MDBNav color="blue-gradient" className="font-weight-bold py-4 px-2 mb-4">
                <MDBNavbarBrand href="/" className="white-text">
                    <img src="logo.png" height="50rem" width="100rem" className="align-center" alt="marvel"/>
                </MDBNavbarBrand>
                <MDBNavItem>
                    <MDBNavLink className="white-text" exact to={'/'}>Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="white-text" exact to={'/episodios'}>Episodios</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="white-text" exact to={'/personajes'}>Personajes</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="white-text" exact to={'/usuarios'}>Usuarios</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink className="white-text" exact to={'/logout'}>Logout</MDBNavLink>
                </MDBNavItem>
            </MDBNav>
        </div>
    );
};
export default Nav;