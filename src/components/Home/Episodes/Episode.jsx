import React from 'react';

const Episode = (props) => {
    const {episode} = props;

    return (
        <tr className='hero_css'>
            <td>{episode.id}</td>
            <td>{episode.name}</td>
            <td>{episode.episode}</td>
            <td>{episode.air_date}</td>
        </tr>
    );
};

export default Episode;