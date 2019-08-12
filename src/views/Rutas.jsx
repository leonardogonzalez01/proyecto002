import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "../views/Home";
import Episodios from "../views/Episodios";
import Personajes from "../views/Personajes";
import Login from "../components/Login/Login";
import {PrivateRoute} from "../components/commons/PrivateRoute/PrivateRoute";
import {setIsLogin} from "../store/login/actions";
import {Functions} from '../assets/Functions';
import UserRegisterForm from "../components/UserRegister/UserRegisterForm";
import {Logout} from "../components/Login/Logout";
import Usuarios from "./Usuarios";

function Rutas(props) {
    props.setIsLoginComp(Functions.isLogin());

    return (
            <Router>
                <Switch>
                    <Route exact={true} path='/' component={Home}/>
                    <Route exact={true} path='/login' component={Login}/>
                    <Route exact={true} path='/userregisterform' component={UserRegisterForm}/>
                    <PrivateRoute isLoggedIn={props.isLogin} exact={true} path='/episodios' component={Episodios}/>
                    <PrivateRoute isLoggedIn={props.isLogin} exact={true} path='/personajes' component={Personajes}/>
                    <PrivateRoute isLoggedIn={props.isLogin} exact={true} path='/usuarios' component={Usuarios}/>
                    <PrivateRoute isLoggedIn={props.isLogin} exact={true} path='/logout' component={Logout}/>
                </Switch>
            </Router>
    );
}

const mapStateToProps = state => {
    return {
        isLogin: state.login.isLogin
    };
};

const mapDispatchToProps = dispatch => ({
    setIsLoginComp: payload => dispatch(setIsLogin(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Rutas);