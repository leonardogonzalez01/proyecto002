import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Functions} from "../../../assets/Functions";

const Footer = () => {

    return (
        <>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Desarrollado por: Leonardo Gonzalez L.</h5>
                        <p>
                            Proyecto Final
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="https://desafiolatam.com/">DesafioLatam</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="https://github.com/leonardogonzalez01">Github</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="https://www.facebook.com/leonardoandres01">Facebook</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="http://www.dataplus.cl"> Leonardo Gonzalez L. </a>
                </MDBContainer>
            </div>
        </MDBFooter>
        </>
    );
}

export default Footer;