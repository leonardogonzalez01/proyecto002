import React from 'react';
import Header from "../components/commons/Header/Header";
import Footer from "../components/commons/Footer/Footer";
import {MDBContainer} from 'mdbreact';
import Episodes from "../components/Home/Episodes/Episodes";

const Home = () => {
    return (
        <MDBContainer>
            <Header/>
<Episodes/>
            <Footer/>
        </MDBContainer>
    );
};


export default Home;