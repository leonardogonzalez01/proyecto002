import React from "react";
import {MDBContainer} from 'mdbreact';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
    return (
        <MDBContainer>
            <Header/>
            {children}
            <Footer/>
        </MDBContainer>
    );
};

export default Layout;
