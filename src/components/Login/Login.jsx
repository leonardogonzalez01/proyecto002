import React, {useEffect, useState} from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from "mdbreact";
import {getUsersAction} from "../../store/users/actions";
import {connect} from "react-redux";
import {Functions} from "../../assets/Functions";
import axios from 'axios';
import Input from "../commons/Controls/Input";

const Login = props => {

    if (Functions.isLogin()) {
        props.history.push("/");
    }
    const emptyUser = {
        name: "",
        email: "",
        password: "",
        favoriteEpisodes: [],
        episodesWatched: [],
        favoriteCharacters: []
    };

    const [userForm, setUser] = useState(emptyUser);

    const handlerOnChange = ({target}) => {
        setUser({
            ...userForm,
            [target.id]: target.value
        })
    };

    useEffect(() => {
        props.getUsersComponent('http://localhost:3000/login')
    }, []);


    const handlerOnClick = async () => {
        const rs = await axios.get("http://localhost:3000/users");
        const users = rs.data;
        const dato = users.find(users => users.name === userForm.name);
        if (dato) {
            let userLogin = null;
            axios.get("http://localhost:3000/login").then(response => {
                const token = response.data.token;
                if (token.length < 10) {
                    alert("Error al obtener token de acceso");
                    return false;
                }
                alert("Login correcto");
                Functions.setToken(token);
                Functions.setUser2(userForm);
                /*Functions.setUser({
                    id: userLogin.id,
                    name: userLogin.name,
                    favoriteEpisodes: userLogin.favoriteEpisodes,
                    episodesWatched: userLogin.episodesWatched,
                    favoriteCharacters: userLogin.favoriteCharacters,
                });*/
                window.location.href = "/";
            }).catch(error => {
                alert("error" + error.message);
            });
        } else {
            alert("Usuario no Existe!!!");
        }

    };


    const handlerOnClickRegister = () => {
        props.history.push(`/userregisterform`)
    };


    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardHeader className="form-header deep-blue-gradient rounded">
                                <h3 className="my-3">
                                    <MDBIcon icon="lock"/> Login:
                                </h3>
                            </MDBCardHeader>
                            <form>
                                <div className="grey-text">
                                    <br></br>
                                    <Input value={userForm.name} onChange={handlerOnChange} name={'name'} text={'User'}
                                           type='text'/>
                                    <Input value={userForm.email} onChange={handlerOnChange} name={'email'}
                                           text={'Email'} type='text'/>
                                </div>

                                <div className="text-center mt-4">
                                    <MDBBtn
                                        color="light-blue"
                                        className="mb-3"
                                        //type="submit"
                                        onClick={handlerOnClick}
                                    >
                                        Login
                                    </MDBBtn>
                                </div>
                            </form>
                            <MDBModalFooter>
                                <MDBBtn
                                    color="light-blue"
                                    className="mb-3"
                                    //type="submit"
                                    onClick={handlerOnClickRegister}
                                >
                                    Registrar Usuario
                                </MDBBtn>
                            </MDBModalFooter>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};


const mapStateToProps = state => ({
    users: state.users.users, //selectors reselect
    usersLoading: state.users.usersLoading,
    usersError: state.users.usersError
});

const mapDispatchToPros = dispatch => ({
    getUsersComponent: payload => dispatch(getUsersAction(payload))
});

export default connect(mapStateToProps, mapDispatchToPros)(Login);