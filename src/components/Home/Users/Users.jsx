import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {MDBTable, MDBTableBody, MDBTableHead} from 'mdbreact';
import {getUsersAction} from '../../../store/users/actions';
import User from "./User";
import Loading from "../../commons/Loading/Loading";


const Users = (props) => {
    useEffect(() => {
        if (props.users.length === 0) {
            props.getUsersComponent('http://localhost:3000/users')
        }
    }, []);


    if (props.usersLoading) {
        return <Loading/>
    }
    if (props.usersError) {
        return <div>Es un error...</div>
    }
    return (
        <div>
            <MDBTable>

                <MDBTableHead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Email</th>
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

debugger;
const mapDispatchToPros = dispatch => ({
    getUsersComponent: payload => dispatch(getUsersAction(payload))
});

export default connect(mapStateToProps, mapDispatchToPros)(Users);