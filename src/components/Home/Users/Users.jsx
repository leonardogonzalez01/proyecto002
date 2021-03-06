import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';
import {getUsersAction} from '../../../store/users/actions';
import User from "./User";
import Loading from "../../commons/Loading/Loading";
import axios from "axios";

const Users = (props) => {

    useEffect(() => {
        //if (props.users.length === 0) {
        props.getUsersComponent('http://localhost:3000/users')
        //}
    }, []);

    if (props.usersLoading) {
        return <Loading/>
    }
    if (props.usersError) {
        return <div>Es un error...</div>
    }

    const usersList = props.users;
    //const userFavorito = usersList.find(favoriteEpisodes => favoriteEpisodes === '3');
    //const userFavorito = usersList.find(usersList => usersList.name === 'Manolo');
    //console.log(userFavorito);
    /*let usuarioFavorito = usersList.map(usersList =>  usersList.favoriteEpisodes);
    let episodioFavorito = usuarioFavorito.find(usuarioFavorito => usuarioFavorito === '3');
    console.log(usuarioFavorito);
    console.log(episodioFavorito);*/
    /*let episodiosFavoritos = usersList.map(usersList => {
        return usersList.favoriteEpisodes.map(favoriteEpisodes =>
        return {favoriteEpisodes: usersList.favoriteEpisodes, name: usersList.name}
    )
    });*/
    let episodiosFavoritos = usersList.map(usersList => {
     return {episode: usersList.favoriteEpisodes}});
   /* let episodiosFavoritos = usersList.map(usersList => {
        return usersList.favoriteEpisodes.map(favoriteEpisodes => {return {favorito: usersList.favoriteEpisodes}})
    });*/
   let listaEpisodios = episodiosFavoritos.map(current => current.episode);
    console.log(episodiosFavoritos);
    console.log(listaEpisodios);
    return (
        <div>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Episodios Favoritos</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {props.users.map(user => <User key={user.id} user={user}/>)}
                </MDBTableBody>
            </MDBTable>
        </div>
    );
};

const mapStateToProps = state => ({
    users: state.users.users,
    usersLoading: state.users.usersLoading,
    usersError: state.users.usersError
});

const mapDispatchToPros = dispatch => ({
    getUsersComponent: payload => dispatch(getUsersAction(payload))
});

export default connect(mapStateToProps, mapDispatchToPros)(Users);