import React, { useContext } from 'react';
import players from '../mocks/players';
import MatchDayContext from '../contexts/MatchDayContext';

function Players(props) {
  const { team } = props;

  const { addScore } = useContext(MatchDayContext);
  return (
    <div>
      { players.map((player, index) => (
        <label key={ index } htmlFor={ `player-${index}` }>
          {player.name}
          <input
            type="radio"
            id={ `player-${index}` }
            name="players"
            value={player.name}
            />
        </label>
      ))}
      <button
        type="button"
        onClick={ () => addScore(team) }
      >
        Adicionar
      </button>
    </div>
  )
}

export default Players;
