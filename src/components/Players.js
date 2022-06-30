import React, { useContext, useState, useEffect } from 'react';
import players from '../mocks/players';
import MatchDayContext from '../contexts/MatchDayContext';
import './Players.css';

function Players() {
  const { addEvent, setRenderButtons, event, setEvent } = useContext(MatchDayContext);  

  const handleChange = ({ target }) => {
    const { value } = target;
    if(event.type === 'goal') {
      setEvent({ ...event, goalPlayer: value });
    }
    if(event.type === 'foul') {
      setEvent({ ...event, foulPlayer: value });
    }
  }

  const handleClick = () => {
    addEvent(event);
    setRenderButtons({
      showEventTypesButton: false,
      showTeamButtons: false,
      showPlayers: false,    
    })
  };

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
