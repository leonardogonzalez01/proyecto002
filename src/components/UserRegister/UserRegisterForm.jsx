import React, {useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import {connect} from "react-redux";
import Input from "../commons/Controls/Input";
import {addUserAction} from "../../store/users/actions";
import axios from "axios";

const UserRegisterForm = (props) => {

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
    const handlerOnClick = async () => {
        const rs = await axios.get("http://localhost:3000/users");
        const users = rs.data;

        /*try {
            if (users.length > 0) {
                const existeCuenta = users.find(item => (item.email.toLowerCase() === userForm.email.toLowerCase()));

                if (typeof existeCuenta === "object" && typeof existeCuenta.email === "string") {
                    //Tools.notify("warn", "La cuenta de email ya existe", 3000);
                    //setLoading(false);
                    return false;
                }
            }
        } catch (e) {
            //Tools.notify("error", "Error al validar nueva cuenta de usuario", 3000);
            //setLoading(false);
            return false;
        }*/
debugger;
        //ME FUNCIONO POST PARA INSERTAR UN NUEVO OBJETO
        axios.post("http://localhost:3000/users", userForm).then(response => {
            //setLoading(false);
            alert("Registro de usuario correcto, redireccionando");
            props.history.push("/login");
        }).catch(error => {
           alert("error"+error.message);
            //setLoading(false);
        });
    };


    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h5 text-center mb-4">Sign up</p>
                        <div className="grey-text">
                            <Input value={userForm.name} onChange={handlerOnChange} name={'name'} text={'User'} type='text'/>
                            <Input value={userForm.email} onChange={handlerOnChange} name={'email'} text={'Email'} type='text'/>
                        </div>
                        <div className="text-center">
                            <MDBBtn color="primary" onClick={handlerOnClick}>Register</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};


export default UserRegisterForm;