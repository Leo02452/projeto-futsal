import React, { useContext } from 'react';
import MatchDayContext from '../contexts/MatchDayContext';

function GoalsOptions(props) {
  const { onInputChange } = props;
  const { event } = useContext(MatchDayContext);  

  return (
    <>
      <label htmlFor="goalUnknown" className="player-input">
        Não sei
        <input
          type="radio"
          id="goalUnknown"
          name={ `${event.type}Player` }
          value="Desconhecido"
          onChange={ onInputChange }
        />
      </label>
      { event.team === 'teamA' && (
        <label htmlFor="own-goal" className="player-input">
          Gol contra
          <input
            type="radio"
            id="own-goal"
            name={ `${event.type}Player` }
            value="Gol contra"
            onChange={ onInputChange }
          />
        </label>
      ) }
    </>
  )
}

export default GoalsOptions;