import React, { useContext, useState, useEffect } from 'react';
import players from '../mocks/players';
import MatchDayContext from '../contexts/MatchDayContext';
import './Players.css';

function Players(props) {
  const { team, eventType } = props;
  const { addEvent, setRenderButtons, event, setEvent } = useContext(MatchDayContext);

  useEffect(() => {
    const handleEvent = () => {
      setEvent({ ...event, type: eventType, team });
    };
    handleEvent();
  }, [team, eventType]);
  

  const handleChange = ({ target }) => {
    const { value } = target;
    if(eventType === 'goal') {
      setEvent({ ...event, goalPlayer: value });
    }
    if(eventType === 'foul') {
      setEvent({ ...event, foulPlayer: value });
    }
  }

  const handleClick = () => {
    addEvent(event);
    setRenderButtons({
      showEventTypesButton: { activated: false },
      showTeamButtons: { activated: false, event: '' },
      showPlayers: { activated: false, team: '' },    
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
