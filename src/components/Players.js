import React from 'react';
import players from '../mocks/players';

function Players() {
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
      >
        Adicionar
      </button>
    </div>
  )
}

export default Players;
