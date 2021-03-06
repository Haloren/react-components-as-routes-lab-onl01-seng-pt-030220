import React from 'react';
import { actors } from '../data';

const Actors = () => {
  
  const actorList = actors.map(actor => {
    return(
      <div>
        <h3>{actor.name}</h3>
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
  
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      { actorList }
    </div>
  );
};

export default Actors;
