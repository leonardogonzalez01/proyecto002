import React from 'react';

const User = (props) => {
    const {user} = props;
    //let epi = user.favoriteEpisodes.map(favoriteEpisodes => favoriteEpisodes)
    //const arreglo = user.favoriteEpisodes;
   /* arreglo.forEach( function(valor, indice, arreglo) {
        console.log("En el índice " + indice + " hay este valor: " + valor);
    });*/
   let episodios = localStorage.getItem('userAuth')

    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                {
                     user.favoriteEpisodes.map((item, key) =>
                      <li key={item.id}>{item}</li>
                  )
                }
            </td>
        </tr>
    );
};

export default User;