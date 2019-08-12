import React from 'react';
import {Col, Row} from "react-bootstrap";
import axios from "axios";
import {Functions} from '../../../../src/assets/Functions';
import {UserFavorite} from "./UserFavorite";

const ListUsers = (props) => {

    const [iniPage, setIniPage] = React.useState(false);
    const [listUsers, setListUsers] = React.useState([]);

    const getUsers = () => {
        const userAuth = Functions.getUser();
        axios.get(`http://localhost:3000/users`).then(response => {
            const users = response.data.filter(item => item.id !== userAuth.id);
            debugger;
            const likesUsers = users.map(item => {
                const sim = Functions.compareArrays(item.favoriteEpisodes, userAuth.favoriteEpisodes);
                const sim2 = Functions.compareArrays(item.favoriteCharacters, userAuth.favoriteCharacters);
                return {...item, episodesLike: (sim.length > 0), charactersLike: (sim2.length > 0)}
            });

            setListUsers(likesUsers);
            setIniPage(true);
        }).catch(error => {
            //Tools.notify("error", "No es posible obtener los usuarios");
        });
    };

    React.useEffect(() => {
        if (listUsers.length === 0 && !iniPage) {
            getUsers();
        }
    }, [iniPage, listUsers]);

      return (
        <Row>
            {
                (listUsers.length > 0) ?
                    listUsers.map(item =>
                        <UserFavorite key={item.id} data={item}/>
                    )
                    : <Col md={12} className={'text-center'}><h2>Sin usuarios...</h2></Col>
            }
        </Row>
    );
};

export default ListUsers;