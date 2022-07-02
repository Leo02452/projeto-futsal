import React, { useContext } from 'react';
import MatchDayContext from '../contexts/MatchDayContext';
import players from '../mocks/players';
import './Players.css';

function Players(props) {
  const { onInputChange, isAssistPlayer } = props;
  const { event } = useContext(MatchDayContext);

  return (
    <section className="players-wrapper">
      { players.map((player, index) => (
        <label
          key={ index }
          htmlFor={ `player-${index}` }
          className="player-input"
        >
          {player.name}
          <input
            type="radio"
            id={ `player-${index}` }
            name="players"
            value={player.name}
            onChange={ handleChange }
            />
        </label>
      ))}
      <label htmlFor="unknown" className="player-input">
        Não sei
        <input
          type="radio"
          id="unknown"
          name="players"
          value="unknown"
        />
      </label>
      <label htmlFor="own-goal" className="player-input">
        Gol contra
        <input
          type="radio"
          id="own-goal"
          name="players"
          value="own-goal"
        />
      </label>
      <button
        type="button"
        className="btn"
        onClick={ handleClick }
      >
        Adicionar
      </button>
    </section>
  )
}

export default Players;
