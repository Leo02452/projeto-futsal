import React, { useContext } from 'react';
import MatchDayContext from '../contexts/MatchDayContext';
import players from '../mocks/players';
import PropTypes from 'prop-types';
import './Players.css';

function Players(props) {
  const { onInputChange, isAssistPlayer } = props;
  const { event } = useContext(MatchDayContext);

  return (
    <section className="players-wrapper">
      { players.map((player, index) => (
        <label
          key={ index }
          htmlFor={ isAssistPlayer
            ? `assistPlayer-${index}`
            : `${event.type}Player-${index}` }
          className="player-input"
        >
          {player.name}
          <input
            type="radio"
            id={ isAssistPlayer
              ? `assistPlayer-${index}`
              : `${event.type}Player-${index}` }
            name={ isAssistPlayer ? "assistPlayer" : `${event.type}Player` }
            value={player.name}
            onChange={ onInputChange }
            />
        </label>
      ))}
    </section>
  )
}

Players.defaultProps = {
  isAssistPlayer: false,
};

Players.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  isAssistPlayer: PropTypes.bool,
};

export default Players;
