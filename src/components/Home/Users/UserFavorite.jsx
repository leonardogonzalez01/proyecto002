import React from 'react';
import {Button, Col} from "react-bootstrap";


export const UserFavorite = (props) =>
    <Col className="card" md={3} style={{marginTop: '10px'}}>
        <div className="card-body">
            <h5 className="card-title">{props.data.name}</h5>
            <p className="card-text">
                <strong>Email: </strong> {props.data.email}<br/>
            </p>
            {
                (props.data.episodesLike) ?
                    <Button disabled={true} variant={'outline-success'} className="btn btn-sm"> <i
                        className="fas fa-list-ul"/> Tiene gustos similares en episodios</Button>
                    : ""
            }
            {
                (props.data.charactersLike) ?
                    <Button disabled={true} variant={'outline-primary'} className="btn btn-sm"> <i
                        className="fas fa-user-secret"/> Tiene gustos similares en personajes</Button>
                    : ""
            }
        </div>
    </Col>;