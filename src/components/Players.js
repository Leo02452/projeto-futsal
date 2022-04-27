import React, { useContext, useState } from 'react';
import players from '../mocks/players';
import MatchDayContext from '../contexts/MatchDayContext';

function Players(props) {
  const { team, eventType } = props;
  const { addEvent } = useContext(MatchDayContext);
  const [event, setEvent] = useState({ type: eventType, team, player: '' })

  const handleChange = ({ target }) => {
    const { value } = target;
    setEvent({ ...event, player: value });
  }

  const handleClick = () => {
    addEvent(event);
  };

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
            onChange={ handleChange }
            />
        </label>
      ))}
      <label htmlFor="unknown">
        Não sei
        <input
          type="radio"
          id="unknown"
          name="players"
          value="unknown"
        />
      </label>
      <label htmlFor="own-goal">
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
        onClick={ handleClick }
      >
        Adicionar
      </button>
    </div>
  )
}

export default Players;
