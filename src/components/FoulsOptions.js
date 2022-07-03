import React, { useContext } from 'react';
import MatchDayContext from '../contexts/MatchDayContext';

function FoulsOptions(props) {
  const { onInputChange } = props;
  const { event } = useContext(MatchDayContext);  

  return (
    <>
      <label htmlFor="foulUnknown" className="player-input">
        Não sei
        <input
          type="radio"
          id="foulUnknown"
          name={ `${event.type}Player` }
          value="Desconhecido"
          onChange={ onInputChange }
        />
      </label>
      { event.team === 'teamB' && (
      <label htmlFor="hand-foul" className="player-input">
        Mão
        <input
          type="radio"
          id="hand-foul"
          name={ `${event.type}Player` }
          value="Mão"
          onChange={ onInputChange }
        />
      </label>
      ) }
    </>
  )
}

export default FoulsOptions;