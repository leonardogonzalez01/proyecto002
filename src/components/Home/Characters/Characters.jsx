import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {MDBBtn, MDBCol, MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';

import {getCharactersAction} from '../../../store/characters/actions';
import Character from "./Character";
import Loading from "../../commons/Loading/Loading";
import CharacterCard from "./CharacterCard";

const Characters = props => {


    useEffect(()=> {
        if(props.characters.length===0) {
            props.getCharactersComponent('https://rickandmortyapi.com/api/character/')
        }
    },[]);

    if (props.charactersLoading) {
        return <Loading/>
    }
    if (props.charactersError) {
        return <div>Es un error...</div>
    }

    const handleClickVerMas = () => {
        console.log(props.info.next);
        if(props.info.next===''){
            alert('No hay mas Episodios');
        }else{
            props.getCharactersComponent(props.info.next);
        }


    };
    console.log(props.info);
    return (
<>
        <MDBCol>
            <div className='d-flex flex-wrap'>
            {props.characters.map(character => <CharacterCard key={character.id} character={character}/>)}
            </div>
        </MDBCol>
        <MDBBtn onClick={handleClickVerMas} color="primary">Ver Mas</MDBBtn>
</>
       /* <MDBTable title="Lista Herpoes">
            <MDBTableHead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Especie</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {props.characters.map(character => <CharacterCard key={character.id} character={character}/>)}
            </MDBTableBody>
            <MDBBtn onClick={handleClickVerMas} color="primary">Ver Mas</MDBBtn>
        </MDBTable>*/

    );
};

const mapStateToProps = state => ({
    characters: state.characters.characters,
    info: state.characters.info,
    charactersLoading: state.characters.charactersLoading,
    charactersError: state.characters.charactersError
});

const mapDispatchToPros = dispatch => ({
    getCharactersComponent: payload => dispatch(getCharactersAction(payload))
});

export default connect(mapStateToProps, mapDispatchToPros)(Characters);