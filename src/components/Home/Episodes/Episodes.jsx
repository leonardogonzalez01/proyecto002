import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import {getEpisodesAction} from '../../../store/episodes/actions';
import Episode from "./Episode";
import Loading from "../../commons/Loading/Loading";

const Episodes = props => {


    useEffect(()=> {
        props.getEpisodesComponent('https://rickandmortyapi.com/api/episode/')
    },[]);

    if (props.episodesLoading) {
        return <Loading/>
    }
    if (props.episodesError) {
        return <div>Es un error...</div>
    }

    const handleClickVerMas = () => {
        console.log(props.info.next);
        if(props.info.next===''){
            alert('No hay mas Episodios');
        }else{
            props.getEpisodesComponent(props.info.next);
        }


    };
    console.log(props.info);
    return (
        <MDBTable title="Lista Herpoes">
            <MDBTableHead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Episodio</th>
                    <th>Salida al Aire</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {props.episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </MDBTableBody>
            <MDBBtn onClick={handleClickVerMas} color="primary">Ver Mas</MDBBtn>
        </MDBTable>

    );
};

const mapStateToProps = state => ({
    episodes: state.episodes.episodes, //selectors reselect
    info: state.episodes.info,
    episodesLoading: state.episodes.episodesLoading,
    episodesError: state.episodes.episodesError
});

const mapDispatchToPros = dispatch => ({
    getEpisodesComponent: payload => dispatch(getEpisodesAction(payload))
});

export default connect(mapStateToProps, mapDispatchToPros)(Episodes);