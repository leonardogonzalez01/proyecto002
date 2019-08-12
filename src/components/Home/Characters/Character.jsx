import React from 'react';

const Character = (props) => {
    const {character} = props;
    return (
        <tr>
            <td>{character.id}</td>
            <td>{character.name}</td>
            <td>{character.status}</td>
            <td>{character.species}</td>
            <td>{character.image}</td>
        </tr>
    );
};

export default Character;