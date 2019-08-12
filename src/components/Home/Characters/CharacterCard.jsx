import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol} from 'mdbreact';

const CharacterCard = (props) => {
    const {character} = props;
    return (
        <MDBCol>
            <MDBCard style={{width: "15rem"}}>
                <MDBCardImage className="img-fluid" src={character.image}
                              waves/>
                <MDBCardBody>
                    <MDBCardTitle>{character.name}</MDBCardTitle>
                    <MDBCardText>
                        {character.status}-{character.species}
                    </MDBCardText>
                    <MDBBtn href="#">Agregar a Favorito</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>

    );
};

export default CharacterCard;
/*        <tr>
            <td>{character.id}</td>
            <td>{character.name}</td>
            <td>{character.status}</td>
            <td>{character.species}</td>
            <td>{character.image}</td>
        </tr>*/